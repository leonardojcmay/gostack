import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
// importando as propriedades que um icone pode ter
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import Tooltip from '../Tooltip';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string; // fazendo o name ser obrigatório
    icon?: React.ComponentType<IconBaseProps>; // cada icone sera diferente para cada input, e o icone é opcional
}

// utilizando o InputProps, passando como parametro, assim tera todas as propriedades que um input pode receber disponiveis para poder acessar
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    // com o inputRef consegue fazer uma manipulação direta em algum elemento
    const inputRef = useRef<HTMLInputElement>(null);

    // criando um estado para saber quando o input esta com foco
    const [isFocused, setIsFocused] = useState(false);
    // criando estado para saber se esta preenchido o input
    const [isFilled, setIsFilled] = useState(false);

    // recebe o nome como parametro
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    // fazendo o icone ficar laranja caso ja contenha informação no input
    // useCallback vai criar uma função, e ele só vai criar a função novamente caso os elementos do segundo parametro alterarem
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        // se o isFilled = true quer dizer que o input esta preenchido
        // if (inputRef.current?.value) { // se o inputRed tem alguma informação(value) dentro dele, faz a verificação
        //     setIsFilled(true);
        // } else {
        //     setIsFilled(false);
        // }

        setIsFilled(!!inputRef.current?.value); // !! Se o inputRef tiver algum valor retorna true, caso contraria retorna false
    }, []); // somente executa novamente a função, caso os os elementos do segundo parametro alterarem a informação

    // assim que for exibido em tela, chamar a função registereField
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current, // dentro do current que estara os dados do input
            path: 'value', // de onde que o unform vai buscar o valor do input
        });
    }, [fieldName, registerField]);

    return (
        // !! serve para transformar a variavel em boolean(true ou false)
        <Container
            isErrored={!!error}
            isFilled={isFilled}
            isFocused={isFocused}
        >
            {/* verificando se existir um icone */}
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus} // saber quando tem o foco no input
                onBlur={handleInputBlur} // saber quando o input perdeu o foco
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
            {error && (
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </Container>
    );
};

export default Input;
