import React from 'react';
// ajuda na transição de quando o toast entra na tela e quando sai da tela
import { useTransition } from 'react-spring'; // animação do toast

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    // animação do toast
    const messagesWithTransitions = useTransition(
        messages, // todas mensagens
        message => message.id, // função que vai obter a chave da mensagem
        {
            // objeto contendo as animações
            // posição inicial da mensagem
            from: { right: '-120%', opacity: 0 },
            // posição quando entrar em tela
            enter: { right: '0%', opacity: 1 },
            // posição quando sair de tela
            leave: { right: '-120%', opacity: 0 },
        },
    );

    return (
        <Container>
            {messagesWithTransitions.map(({ item, key, props }) => (
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;
