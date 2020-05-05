import React, { useEffect } from 'react';
import {
    FiAlertCircle,
    FiCheckCircle,
    FiInfo,
    FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

// para cada tipo de toast que contem, colocar um icone diferente
const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    // removendo toast
    const { removeToast } = useToast();

    // fazer uma ação assim que um novo toast surgir em tela
    useEffect(() => {
        // quer que algo execute depois de um determinado tempo
        const timer = setTimeout(() => {
            // removendo toast depois de 3 segundos
            removeToast(message.id);
        }, 3000);

        // se caso o usuario remover antes dos 3 segundos, fazendo com que não execute a função do timer e limpe o timer
        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id]);
    return (
        // é o container que contém as variações de estilização
        <Container
            type={message.type}
            hasDescription={!!message.description}
            style={style}
        >
            {/* mostrar o icone baseado no toast, e deixar por padrão o icon info */}
            {icons[message.type || 'info']}

            <div>
                {/* titulo do toast */}
                <strong>{message.title}</strong>
                {/* descrição do toast */}
                {message.description && <p>{message.description}</p>}
            </div>

            {/* botão de fechar o toast */}
            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    );
};

export default Toast;
