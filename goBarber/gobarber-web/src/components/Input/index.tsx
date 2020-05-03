import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
// importando as propriedades que um icone pode ter
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string; // fazendo o name ser obrigatório
    icon?: React.ComponentType<IconBaseProps>; // cada icone sera diferente para cada input, e o icone é opcional
}

// utilizando o InputProps, passando como parametro, assim tera todas as propriedades que um input pode receber disponiveis para poder acessar
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

    // com o inputRef consegue fazer uma manipulação direta em algum elemento
    const inputRef = useRef(null);
    // recebe o nome como parametro
    const { fieldName, defaultValue, error, registerField } = useField(name);

    // assim que for exibido em tela, chamar a função registereField
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current, // dentro do current que estara os dados do input
            path: 'value', // de onde que o unform vai buscar o valor do input

        });
    }, [fieldName, registerField]);

    return (
        <Container>
            {/* verificando se existir um icone */}
            {Icon && <Icon size={20} />}
            <input defaultValue={defaultValue} ref={inputRef} {...rest} />
        </Container>
    )
};

export default Input;
