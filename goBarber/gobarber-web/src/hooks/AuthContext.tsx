import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn(credencials: SignInCredentials): Promise<void>;
    signOut(): void; // nao recebe nada, assim é vazio
}

// Context de autenticação
// Inicializando o context com o objeto vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// tudo que o componente receber como filho, ira repassar para dentro do AuthContext.Provider
const AuthProvider: React.FC = ({ children }) => {
    // utilizando estado para armazenar informações do user logado
    // Isso irá executar quando der F5 na pagina ou quando o usuario fechar o navegador e acessar novamente a aplicação
    const [data, setData] = useState<AuthState>(() => {
        // buscar o valor desta variavel data baseado nos dados que contem dentro do localStorage
        // se ja estiver preenchido o token e user com algum usuario , ja preencher com estas informações. Se não, inicializa com o valor vazio

        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user'); // utlizado JSON.stringify pois o user é um objeto para fazer converter em uma string

        // se existir valor em token e user
        if (token && user) {
            // retornando a informação do token e user
            return { token, user: JSON.parse(user) };
        }

        // se não encontrar, retorna um objeto vazio
        return {} as AuthState;
    });

    // login da aplicação
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user)); // utlizado JSON.stringify pois o user é um objeto para fazer converter em uma string

        // preenchendo o token e user do State data
        setData({ token, user });
    }, []);

    // logout da aplicação
    const signOut = useCallback(() => {
        localStorage.removeItem('@GoBarber:token');
        localStorage.removeItem('@GoBarber:user');

        // setando state do localStorage como vazio
        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    // verificando se o contexto ainda não foi criado
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    // se encontrar retorna o contexto
    return context;
}

export { AuthProvider, useAuth };
