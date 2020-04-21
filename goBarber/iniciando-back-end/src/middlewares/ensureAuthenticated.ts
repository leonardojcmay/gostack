// vai verificar se o usuario esta realmente autenticado na aplicação
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

// informando o retorno que o token contem
interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    // validação do token JWT

    const authHeader = request.headers.authorization;
    // se o token nao existir no header
    if (!authHeader) {
        throw new Error('JWT token is missing');
    }

    // Dividindo as partes: Bearer {token}
    const [, token] = authHeader.split(' '); // informando que somente quer o valor do segundo elemento

    try {
        // verify: ira retornar o metodo decodificado caso esteja com o token correto
        const decoded = verify(token, authConfig.jwt.secret);

        // direcionando o formato para variavel decoded. Forçando que o token é do tipo TokenPayload
        const { sub } = decoded as TokenPayload;

        // utilizando o arquivo @types/express.d.ts
        // Com isso poderá utiliza-lo nas rotas, pois ja sabera qual usuario esta logado na aplicação
        request.user = {
            id: sub,
        };

        // se retornar um usuario valido
        return next();
    } catch {
        throw new Error('Invalid JWT token');
    }
}
