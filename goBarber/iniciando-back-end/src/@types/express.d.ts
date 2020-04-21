// Sobrescrevendo uma tipagem de dentro do express
declare namespace Express {
    export interface Request {
        // vai anexar este request junto com o request que ja contem no metodo da aplicação
        user: {
            id: string;
        };
    }
}
