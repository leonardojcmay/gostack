import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    // para ter acesso direto ao formulario
    const formRef = useRef<FormHandles>(null);
    // console.log(formRef);

    // função de cadastrar
    const handleSubmit = useCallback(async (data: object) => {
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
        } catch (err) {
            console.log(err);

            const errors = getValidationErros(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                {/* logo */}
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
