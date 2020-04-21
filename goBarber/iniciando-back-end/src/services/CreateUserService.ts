import { getRepository } from 'typeorm';
// importando criptografia
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        // Não criar usuario duplicado
        const checkUserExists = await usersRepository.findOne({
            where: { email }, // verificando se contem algum usuario com o mesmo e-mail que esta se recebendo
        });

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        // criptografia
        const hashedPassword = await hash(password, 8);

        // criando instancia do usuario
        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        // salvando usuario na base de dados
        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
