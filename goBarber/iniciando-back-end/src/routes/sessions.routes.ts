// Autenticação do usuario
import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// Cadastrando session
sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticatUser = new AuthenticateUserService();

        const { user, token } = await authenticatUser.execute({
            email,
            password,
        });

        // fazendo para que nao retorne o password na rota, questao de segurança
        delete user.password;

        return response.json({ user, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;
