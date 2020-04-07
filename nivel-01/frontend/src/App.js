import React, { useState, useEffect } from 'react';
import './App.css';
//import backgroundImage from './assets/background.jpg';
import api from './services/api';

import Header from './components/Header';

function App() {
    //useState: retorna um array com 2 posições
    //1. Variavel com o seu valor inicial
    //2. Função para atualizarmos esse valor
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    //funcao para adicionar um novo projeto
    async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`)

        //Imutabilidade
        //copiando tudo que ja tem dentro do array projects e adicionando o novo projeto no final
        //setProjects([...projects, `Novo projeto ${Date.now()}`])

        //console.log(projects);

        const response = await api.post('/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Leonardo May"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />

            {/*<img width={300} src={backgroundImage}/>*/}

            <ul>
                {/*percorrer os projects retornando algo */}
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )    
}

export default App;