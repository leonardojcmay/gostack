import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// Cadastrando usuario
usersRouter.post('/', async (request, response) => {
    try {
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
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
