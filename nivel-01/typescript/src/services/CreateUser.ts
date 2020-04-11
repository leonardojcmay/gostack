//Para criar o usuario: name, email, password

interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;//nome opcional
    email: string;
    password: string;
    techs: Array<string | TechObject>;
    //techs: string[];//Caso fosse um Array so de strings
}

export default function createUser({name, email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}