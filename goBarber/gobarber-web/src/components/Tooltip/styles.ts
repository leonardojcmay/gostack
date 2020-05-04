import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        width: 160px;
        background: #ff9000;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden; /* esconde o elemente da DOM enquanto não tiver disponivel para ser visto */

        position: absolute;
        bottom: calc(
            100% + 12px
        ); /* um pouco mais para cima do icone de erro */
        left: 50%; /* este componente e o transform faz com que a mensagem centralize em cima do icone de erro */
        transform: translateX(-50%);

        color: #312e38;

        /* adicionando flexa */
        &::before {
            content: ''; /* para que faça mostrar na tela */
            border-style: solid;
            border-color: #ff9000 transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%; /* este componente e o transform faz com que a mensagem centralize em cima do icone de erro */
            transform: translateX(-50%);
        }
    }

    /* Quando passar o mouse em cima do icone, aparecer mensagem */
    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;
