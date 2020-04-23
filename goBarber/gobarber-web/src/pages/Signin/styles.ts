import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh; /* forçando que container tenha 100% da tela do usuario */

    display: flex;
    align-items: stretch; /* stretch estica o maximo que puder ou seja tera o mesmo 100vh do height */
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* alinhando itens no centro */

    place-content: center; /* jogando todo o conteudo para o centro */

    width: 100%;
    max-width: 700px; /* não aumenta a mais que 700px. Mas ocupa todo espaço com o width: 100% */

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #f4ede8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px; /* colocando margem entre os inputs */
            }
        }

        button {
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#ff9000')};
            }
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.32, '#f4ede8')};
            }
        }
    }

    /* pegando somente o a que esta dentro do content, não entrando em niveis superiores, para que assim nao altere os dados do form a */
    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1; /* vai fazer ocupar todo o espaço menos o 700px do content */
    background: url(${signInBackgroundImg}) no-repeat center; /* colocando a imagem na tela */
    background-size: cover; /* garantindo que a imagem cubra o conteudo inteiro */
`;
