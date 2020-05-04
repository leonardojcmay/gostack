import React, { useCallback, useRef } from 'react';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core'; // interface que tem todas as tipagens para utilização do formRef
import { Form } from '@unform/web';
import * as Yup from 'yup'; // pegando todos os tipos de validação da biblioteca yup
import getValidationErros from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
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
                name: Yup.string().required('Nome obrigatório'), // string obrigatório
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'), // string obrigatório no formato e-mail
                password: Yup.string().min(6, 'No minimo 6 digitos'), // string obrigatório no minimo 6 letras
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
            <Background />

            <Content>
                {/* logo */}
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="login">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
