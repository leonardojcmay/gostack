import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    name: string;
    signIn(credencials: SignInCredentials): Promise<void>;
}

// Context de autenticação
// Inicializando o context com o objeto vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// tudo que o componente receber como filho, ira repassar para dentro do AuthContext.Provider
const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        console.log(response.data);
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'Leonardo', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
