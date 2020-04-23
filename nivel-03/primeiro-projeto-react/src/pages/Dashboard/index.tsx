import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
// Pacote utilizado para navegação das rotas
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles'

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
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        // Se conter objetos salvos no atoragedRepositories
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            // Se não encontrar nada retorna um array vazio
            return [];
        }
    });

    // Tratando erros
    const [inputError, setInputEerror] = useState('');

    // Salvando objetos cadastrados no local Storage
    // Para que quando atualize a página não tenha que cadastra-los tudo novamente
    // Sempre que tiver uma mudança nos repositories ira salvar no local storage
    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

        // Adição de um novo repositorio
        // Consumir api do github
        // Salvar novo repositorio no estado
        event.preventDefault();

        // Verificando se não tem nada digitado
        if (!newRepo) {
            setInputEerror('Digite o autor/nome do repositório');
            return;
        }

        // Verificando se caso não existir repositorio com o autor/nome informado
        try {
            // Chamando a API
            const response = await api.get(`repos/${newRepo}`);

            const repository = response.data;

            // Adicionando no final da lista
            setRepositories([...repositories, repository]);

            // Limpando o input após fazer a pesquisa
            setNewRepo('');

            // Limpando erro caso de certo
            setInputEerror('');
        } catch (err) {
            setInputEerror("Erro na busca por esse repositório.")
        }

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Mostrando os erros */}
            {/* Se a variavel erro estiver preenchida utiliza esse erro */}
            {inputError && <Error>{inputError}</Error>}

            {/* Lista de repositorios */}
            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}

            </Repositories>
        </>
    );
}

export default Dashboard;
