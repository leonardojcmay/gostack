const express = require('express');
//Pacote que ira criar um id unico universal
const { uuid, isUuid } = require('uuidv4');

const app = express();

//Adicionando função para conseguir indentificar os dados dos arquivos json
app.use(express.json());

//Array vazio, armazenando a variavel na memoria
const projects = [];

//middleware
function logRequests(request, response, next) {
    //saber qual a  url e o método que esta sendo chamado
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.time(logLabel);

    next(); // proximo middleware

    //tempo que cada requisição esta levando
    console.timeEnd(logLabel);
}

//middleware de validação de id, para ver se o id é valido
function validateProjectId (request, response, next) {
    const { id } = request.params;
    
    if(!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid project ID.' });
    }

    return next();
}

app.use(logRequests);
//utilizando somente na url desejada
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
    // const { title, owner } = request.query;

    // console.log(title);
    // console.log(owner);

    const { title } = request.query;

    //encontrando todos os projetos com um title especifico
    const results = title
        ? projects.filter(project => project.title.includes(title))//verifica se o texto includes(title) esta contido dentro do texto(project.title)
        : projects;
    
    return response.json(results);//[] retornar um array , {} retornar um objeto
});

app.post('/projects', (request, response) => {
    //obter os dados do corpo da requisição json
    const { title, owner } = request.body;

    //Criando um unico projeto
    const project = { id: uuid(), title, owner };

    //Adicionando o objeto no final do array projects
    projects.push(project);

    //exibindo o projeto recem criado
    return response.json(project);
});

//Atualizar um projeto
app.put('/projects/:id', (request, response) => {
    //obtendo o id do objeto que deseja atualizar
    const { id } = request.params;
    const { title, owner } = request.body;

    //buscar o projeto dentro do array. Percorrer o array procurando pelo id
    const projectIndex = projects.findIndex(project => project.id === id);

    //validação
    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found' })
    }

    //criando novo project
    const project = {
        id,
        title,
        owner,
    };

    //substituindo o projectIndex encontrado pelo projeto que foi acabo de criar
    projects[projectIndex] = project;

    //retornando o projeto atualizado
    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    //obtendo o id do objeto
    const { id } = request.params;
    
    //buscar o projeto dentro do array. Percorrer o array procurando pelo id
    const projectIndex = projects.findIndex(project => project.id === id);

    //validação
    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found' })
    }

    //retirando informação que deseja do array
    projects.splice(projectIndex, 1);
    
    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('Back-end started!')
});