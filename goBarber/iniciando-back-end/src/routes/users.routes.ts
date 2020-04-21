import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAauthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

// Cadastrando usuario
usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    // instanciando usuario
    const createUser = new CreateUserService();

    // usuario criado
    const user = await createUser.execute({
        name,
        email,
        password,
    });

    // retirando a informação do password para que não seja mostrado em tela
    delete user.password;

    // retornando usuario cadastrado
    return response.json(user);
});

// Atualizando uma informação unica que seria o avatar do usuario
usersRouter.patch(
    '/avatar',
    ensureAauthenticated,
    upload.single('avatar'),
    async (request, response) => {
        // console.log(request.file);

        const updateUserAvatar = new UpdateUserAvatarService();

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFilename: request.file.filename,
        });

        // deletando password para que não apareça na resposta da chamada
        delete user.password;

        return response.json(user);
    },
);

export default usersRouter;
