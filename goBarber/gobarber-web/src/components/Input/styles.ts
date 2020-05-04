import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #232129;
    color: #666360;

    /* alinhando no centro */
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px; /* colocando margem entre os inputs */
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    /* acessando as propriedades do componente e quando a propriedade isFocused estiver true alterar a cor */
    ${props =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #ff9000; /*Somente permanecendo o icone caso tenha informações ja preenchidas no input*/
        `}

    input {
        flex: 1; /*ocupando todo espaço possivel*/
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    /* Forçando para que a cor da mensagem fique em vermelho */
    span {
        background: #c53030;
        color: #fff;

        /* colocando a flexa em vermelho tambem */
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
