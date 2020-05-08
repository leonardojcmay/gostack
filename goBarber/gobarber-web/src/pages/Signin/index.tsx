import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErros from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

// Dados que vão ser recebidos atraves do formulario
interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    // para ter acesso direto ao formulario
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const history = useHistory();

    // função de cadastrar
    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            // console.log(data);
            // Validando formulário
            try {
                // Zerando os erros
                formRef.current?.setErrors({});

                // validando um objeto inteiro
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'), // string obrigatório no formato e-mail
                    password: Yup.string().required('Senha obrigatória'), // string obrigatório no minimo 6 letras
                });

                // retornando os dados feitos no input
                await schema.validate(data, {
                    // retornando todos os erros de uma vez só
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });

                // redirecionando para pagina dashboard
                history.push('./dashboard');
            } catch (err) {
                // Verificando erro se é uma instancia do Yup.ValidationError
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErros(err);
                    formRef.current?.setErrors(errors);

                    return;
                }

                // disparar um toast
                addToast({
                    type: 'error',
                    title: 'Erro na autenticação',
                    description:
                        'Ocorreu um erro ao fazer login, cheque as credenciais',
                });
            }
        },
        [signIn, addToast, history],
    );

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    {/* logo */}
                    <img src={logoImg} alt="GoBarber" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu logon</h1>

                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />
                        <Input
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Entrar</Button>

                        <a href="forgot">Esqueci minha senha</a>
                    </Form>

                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
