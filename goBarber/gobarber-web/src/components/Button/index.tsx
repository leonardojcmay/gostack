import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// utilizando type, pois não irá sobrescrever nada que esta dentro do buttonHTML e nem criar novas propriedades
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    // variavel children, pegando o valor do sigin entrar
    // ...rest pegando todo o restante das props
    // o type do button não pode ser vazio
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;
