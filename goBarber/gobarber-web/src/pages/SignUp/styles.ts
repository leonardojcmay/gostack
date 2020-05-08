import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh; /* forçando que container tenha 100% da tela do usuario */

    display: flex;
    align-items: stretch; /* stretch estica o maximo que puder ou seja tera o mesmo 100vh do height */
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* alinhando itens no centro */
    justify-content: center;

    /*place-content: center;*/ /* jogando todo o conteudo para o centro */

    width: 100%;
    max-width: 700px; /* não aumenta a mais que 700px. Mas ocupa todo espaço com o width: 100% */
`;

/* animação de aparecer da direita */
const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* alinhando itens no centro */
    justify-content: center;

    /*executando animação*/
    animation: ${appearFromRight} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
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
    background: url(${signUpBackgroundImg}) no-repeat center; /* colocando a imagem na tela */
    background-size: cover; /* garantindo que a imagem cubra o conteudo inteiro */
`;
