import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    /* Ajustando style global, informando para todos os componentes */
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        /* imagem e cor de fundo da aplicação */
        background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
        /* deixando a fonte da letra mais detalhada: somente funciona para o navegador Chrome */
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    /* Fazendo layout ficar centralizado */
    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
