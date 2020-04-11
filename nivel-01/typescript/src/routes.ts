import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//Tipagem: string, number, boolean, object, Array
//interfaces: formas de definir tipagens de conjuntos de dados

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'leo@rocketseat.com.br',
        password: '123456',
        techs: [
            'Node.js', 
            'ReactJS', 
            'React-native', 
            {title: 'Javascript', experience: 100},
        ],
    });
  
    //console.log(user.email);

    return response.json({message: 'Hello World'});
};