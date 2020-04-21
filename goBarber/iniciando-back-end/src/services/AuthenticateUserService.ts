import { getRepository } from 'typeorm';
// importando criptografia
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        // verificando se o e-mail é valido e se ja não contem um e-mail igual ja cadastrado na base de dados
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { email } });
        // verificando se o usuario nao for encontrado
        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }

        // Se o usuario ja foi encontrado, usa o compare para ver se as senhas batem
        // user.password - senha criptografada
        // password - senha não-criptografada
        const passwordMatched = await compare(password, user.password);
        // se a senha for errada retorna este erro abaixo
        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.');
        }

        // gerando token de autenticação
        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id, // id do usuario que gerou este token
            expiresIn, // quando tempo o token ira durar
        });

        // Se chegar ate aqui o usuario autenticou
        return {
            user,
            token,
        };
    }
}

export default AuthenticateUserService;
