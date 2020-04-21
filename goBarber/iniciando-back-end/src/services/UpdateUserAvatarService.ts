// se o usuario ja tiver uma imagem antiga, deletar a imagem antiga para que nao fique ocupando espaço na aplicação
// validar se o usuario realmente existe

import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import AppError from '../errors/AppError';

import uploadConfig from '../config/upload';
import User from '../models/User';

interface Request {
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: Request): Promise<User> {
        // atualizando um usuario
        const usersRepository = getRepository(User);

        // verificando se o id é um id de um usuario valido
        const user = await usersRepository.findOne(user_id);
        // se nao encontrar o usuario
        if (!user) {
            throw new AppError(
                'Only autheticated users can change avatar.',
                401,
            );
        }

        // se ele for encontrado e ja tiver um avatar. Deletar o avatar antigo
        if (user.avatar) {
            // Deletar avatar anterior
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );

            // verificando se o arquivo realmente existe
            const userAvatarFileExists = await fs.promises.stat(
                userAvatarFilePath,
            );
            // se o arquivo existir, deletando o arquivo
            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }
        // buscando usuario que ja esta cadastrado no banco de dados
        user.avatar = avatarFilename;
        // salvando avatar no banco de dados
        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;
