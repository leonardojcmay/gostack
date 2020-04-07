import React from 'react';

//Função do cabeçalho
//children: é utilizado quando se quer acessar o conteudo que esta dentro do componente
export default function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}