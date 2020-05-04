import { ValidationError } from 'yup';

interface Errors {
    // Informando que a chave do erro pode ser qualquer coisa desde que seja uma string
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};

    // percorrer o array utilizando o forEach
    // para cada um deste vai validar se contém algum erro
    err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });

    return validationErrors;
}
