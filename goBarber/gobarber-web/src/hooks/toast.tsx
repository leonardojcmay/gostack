import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

// utilizado export para utilizar esta propriedade no Toast Container tambem
export interface ToastMessage {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    // armazenando estado da aplicação com array, pois poderá ter várias mensagens de toasts exibidas ao mesmo tempo
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    // Omit : todas as propriedades do ToastMessage menos o id
    const addToast = useCallback(
        ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
            // criando id
            const id = uuid();

            // criando toast
            const toast = {
                id,
                type,
                title,
                description,
            };

            // adicionando um novo toast sem perder os toasts que ja contém na tela
            setMessages(oldMessages => [...oldMessages, toast]);
        },
        [],
    );
    // função envie o id do toast que é para ser removido
    const removeToast = useCallback((id: string) => {
        // retornando as mensagens que o id for diferente deste que foi recebido, todos os ids diferentes do id que voce quer remover
        setMessages(state => state.filter(message => message.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    // se o context não existir
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    // se deu tudo certo, retorna o contexto
    return context;
}

export { ToastProvider, useToast };
