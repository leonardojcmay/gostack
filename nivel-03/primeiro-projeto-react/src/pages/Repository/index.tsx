import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
// Montando a página de detalhes do repository
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    // Não precisa colocar todas as informações que contem no repository
    // Colocar somente as informações que serão utilizadas da interface
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {

    // Salvando informações dentro do componente
    const [repository, setRepository] = useState<Repository | null>(null);
    // Informando ao useState que ele é um array de issue
    const [issues, setIssues] = useState<Issue[]>([]);

    // Parametros da rota
    const { params } = useRouteMatch<RepositoryParams>();

    // Conectando com a API
    useEffect(() => {
        // Pegando dados do repositorio
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data)
        })

        // Pegando dados das issues
        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data)
        })
    }, [params.repository]);

    // Modo diferente de fazer os comandos acima
    // Fazendo com que as requisições executem juntas
    // useEffect(() => {
    //     async function loadData(): Promise<void> {
    //         const [repository, issues] = await Promise.all([
    //             api.get(`repos/${params.repository}`),
    //             api.get(`repos/${params.repository}/issues`),
    //         ])

    //         console.log(repository);
    //         console.log(issues);
    //     }
    // }, [params.repository]);

    return (
        <>
            {/* Cabeçalho */}
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            {/* Dados do usuario */}
            {repository ? (
                < RepositoryInfo >
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}/unform</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>

                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>

                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            ) : (
                    <p>Carregando...</p>
                )}

            {/* Listagem de repositorios */}
            <Issues>
                {issues.map(issue => (
                    <a
                        key="issue.id"
                        href={issue.html_url}
                    >

                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
}

export default Repository;
