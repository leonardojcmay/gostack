import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

//Não possuem valor semantico(significado)
//Não possuem estilização própria
//Todos componentes possuem por padrao "display: flex"

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App() {

    //Conexao com o back-end
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    },[]);

    //Adicionar project
    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: `Leonardo May`
        });

        const project = response.data;

        setProjects([...projects, project]);
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>

            <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item: project }) => (
                    <Text style={styles.project}>{project.title}</Text>
                )}
            />

            {/*Botão de adicionar project*/}
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
            </SafeAreaView>

            {/* Exemplo 1:
            <View style={styles.container}>
                Listagem de projetos
                {projects.map(project => (
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                ))}
            </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,//Ocupando a tela toda
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#FFF',
        fontSize: 30,
    },
    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});