import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles'

interface Repository {
    // Não precisa colocar todas as informações que contem no repository
    // Colocar somente as informações que serão utilizadas da interface
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    // Informando tambem que este estado é um array de repositories
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        // Adição de um novo repositorio
        // Consumir api do github
        // Salvar novo repositorio no estado
        event.preventDefault();

        // Chamando a API
        const response = await api.get(`repos/${newRepo}`);

        const repository = response.data;

        // Adicionando no final da lista
        setRepositories([...repositories, repository]);

        // Limpando o input após fazer a pesquisa
        setNewRepo('');

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Lista de repositorios */}
            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}

            </Repositories>
        </>
    );
}

export default Dashboard;
