# **Semana de Preparação**

## **Preparando os Estudos**

01/04/2020

**Técnicas de Aprendizado:**
<br>- Não pular etapas/aulas
<br>- Foco em praticar
<br>- Controlar ansiedade
<br>- Nunca se comparar com outras pessoas
<br>- "Não compare os seus bastidores, com o palco de alguém"
<br>- Técnica de pomodoro. 25 min trabalho / 5 min descanço

**Fixando o Conhecimento:**
<br>- Fazer anotações
<br>- Ajudar/Ensinar outras pessoas
<br>- Construir projetos pessoais

**Obtendo resultados na carreira:**
<br>- Colocar projetos no GitHub, detalhar o README.md
<br>- Posts semanais no Linkedin, destacando o que aprendeu
<br>- Ver mentorias do CEO Rocketseat

**Projetos Pessoais:**
<br>- Analisar pessoas próximas
<br>- Tentar copiar outras aplicações
<br>- Ideias de projetos: https://github.com/florinpop17/app-ideas
<br>- Ferramenta para auxiliar na criação dos layouts da aplicação: Figma(https://www.figma.com/)

**Cronograma:**
<br>- Notion: https://www.notion.so/onboarding

---

## **Ambiente de Desenvolvimento**

01/04/2020

*Node*
<br>*yarn*
<br>*Visual Studio Code*
<br>*Git/Github*
<br>*Extensões Chrome:* JSON Viewer, React Dev Tools, Octotree
<br>*Ferramentas:*
<br>- Notion: anotações...
<br>- Whimsical: fluxos, diagramas...
<br>- DevDocs: documentação offline
<br>- Insomnia: GET, POST, PUT, DELETE...

---

## **Live de Boas Vindas**

06/04/2020

**Desafios:** irá testar um novo sistema de correção automatizada dos desafios

**Recompensa:** podem ser fisicas ou digitais. O prazo é de 16 semanas para finalizar o bootcamp, terá acesso vitalicio aos arquivos. Se finalizar o bootcamp dentro do periodo ira receber a recompensa.

**Discord:** duvidas não tecnicas é mais para bate-papo
<br>**Forum:** duvidas tecnicas

Dia 09/04/2020 (quinta-feira) 20 hrs : live onde Diego vai codar os 3 desafios inteiros desta primeira semana

--- 

## **Nível 01**

06/04/2020

**<h2>Back-end com Node.js</h2>**

**Node.js:** é uma plataforma para desenvolvimento back-end, não é uma linguagem, utiliza a linguagem javascript no back-end, rotas e integrações. Construido em cima da V8(Chrome).
<br>**Arquitetura Event-loop:** baseada em eventos(rotas na maioria das vezes), call stack - pilha de eventos e o node processa através de um loop eterno.
<br>- ***Single-thread:*** somente utiliza um core do processamento.
<br>- ***Non-blocking I/O:*** input e output não bloqueante. Permite aplicações em tempo real, exemplo: chat.

**NPM / yarn:** permite instalar bibliotecas de terceiros, fornecer bibliotecas. yarn é mais rápido e mais completo que o NPM.

**Frameworks:**
<br>**ExpressJS:** framework sem opnião, otimo para iniciar, micro-serviços.

**Frameworks:**
<br>AdonisJS
<br>NestJS

---

**API REST:**
<br>- GET
<br>- POST
<br>- PUT
<br>- DELETE

<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/01%20-%20Conteudo%20da%20requisicao.JPG?raw=true">**Acesse  conteúdo de requisição**</a>

Multiplos clientes(front-end), utilizando o mesmo back-end.

**JSON:** estrutura do objeto dentro do javaScript. Comunicação entre front-end e back-end

<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/02%20-%20HTTP%20codes.JPG?raw=true">**Acesse HTTP codes**</a>

---

**Criando projeto Node:**

Criado pasta backend

Inciando projeto JS:
```
yarn init -y
```

Sempre criar a pasta src e index.js

Instalar express:
```
yarn add express
```

Executando back-end:
```
node src/index.js
```

<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/03%20-%20node%20Hello%20World.JPG?raw=true">**Acesse Hello World**</a>

---

**Configurando Nodemon:**

Instalando nodemon:
```
yarn add nodemon -D
```

Configurando package.json:
<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/04%20-%20Config%20nodemon.JPG?raw=true">**acesse a imagem**</a>

Executando back-end:
```
yarn dev
```

---

**Métodos HTTP:**
<br>**GET:** Buscar/listar uma informação do back-end.
<br>**POST:** Criar uma informação do back-end.
<br>**PUT/PATCH:** Alterar uma informação do back-end.
<br>**DELETE:** Deletar uma informação do back-end.

---

**Instalar Insomnia**

---

07/04/2020

**Tipos de parametros:**
<br>**Query Params:** Parametros nomeados enviados na rota após "?", servem para filtros, paginação.
<br>Exemplo: GET http://localhost:3333/users?page=2&nome=Leonardo&idade=22

<a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/01%20-%20Query%20Params%20Exemplo%201.png?raw=true">**Imagem 01:** Query Params Exemplo 1</a>
<br><a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/02%20-%20Query%20Params%20Exemplo%202.png?raw=true">**Imagem 02:** Query Params Exemplo 2</a>

**Route Params:** Parametros utilizados para identificar recursos.
<br>Exemplo buscar pelo id: GET http://localhost:3333/users/1

<a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/03%20-%20Route%20Params%20Exemplo%201.png?raw=true">**Imagem 03:** Route Params Exemplo 1</a>
<br><a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/04%20-%20Route%20Params%20Exemplo%202.png?raw=true">**Imagem 04:** Route Params Exemplo 2</a>

**Request Body:** Corpo da requisição, utilizado para criar ou alterar recursos. (JSON)
<br>Exemplo: POST http://localhost:3333/users

<a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/05%20-%20Request%20Body%201.png?raw=true">**Imagem 05:** Request Body 1</a>
<br><a href="https://github.com/leonardojcmay/semanaomnistack11.0/blob/master/imagens/Aula%202%20-%2024-03-2020/06%20-%20Request%20Body%202.png?raw=true">**Imagem 06:** Request Body 2</a>

---

**Aplicação Funcional:**

Instalar biblioteca: serve para criação de id
```
yarn add uuidv4
```

---

**Middlewares:**

Interceptador de requisições, pode interromper totalmente a requisição ou alterar dados da requisição.

---

**<h2>Front-end com ReactJS</h2>**

07/04/2020

**React:** biblioteca para construção de interfaces, utilizado para construção de Single-Page Applications, tudo fica dentro do Javascript.
<br>**React / ReactJS / React Native**
<br>**Vantagens:**
<br>- Organização do código: componentização
<br>- Divisão de responsabilidades: Back-end: regra de negócio / Front-end: interface
<br>- Uma API, múltiplos clientes
<br>- Programação declarativa
<br>**JSX:** permite escrever HTML dentro do JavaScript
<br>**Babel / Webpack:**
<br>O browser não entende todo esse código, o **babel** converte o códigoJS de uma forma que browser entenda.
<br>O **webpack** possui várias funções:
<br>- Criação do bundle, arquivo com todo código da aplicação
<br>- Ensinar ao JS como importar arquivos CSS, imagens e etc
<br>- Live reload com Webpack Dev Server

Configurando projeto React:
```
yarn init -y
```

Criado pastas src e public

Instalando React e React dom:
```
yarn add react react-dom
```

**Babel:** converter o código do React para o código que o browser entenda.
<br>**Webpack:** Para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.
<br>Webpack utiliza estes **loaders** abaixo:
<br>**Loaders:* babel-loader, css-loader, image-loader

Instalando babel e webpack:
```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

yarn add @babel/cli
```

Finalizado configuração babel, testando para ver se ira converter:
```
yarn babel src/index.js --out-file public/bundle.js
```

Feito commit com as alterações que foram feitas

Configurando webpack:
```
yarn add babel-loader
```

Após feito ajustes no webpack.config.js:
```
yarn webpack --mode development
```

Instalando este pacote, servidor de desenvolvimento do webpack, serve para recarregar automaticamente caso tenha feito alterações no código:
```
yarn add webpack-dev-server -D
```

Apos ajustar dados no arquivo webpack.config.js:
<br>Executando aplicação:
```
yarn webpack-dev-server --mode development
```

**Componentização:** dividir pedaços da aplicação em componentes.
<br>**Propriedade:** passando informação de pai para filho.
<br>**Estado:** useState: retorna um array com 2 posições/ 1. Variavel com o seu valor inicial/ 2. Função para atualizarmos esse valor.
<br>**Imutabilidade:** é algo que não pode ser alterado, você tem que criar uma nova informação sem alterar.

Utilizando CSS:
```
yarn add style-loader css-loader
```

Arquivo webpack.config.js:
```
test: /\.css$/,
exclude: /node_modules/,
use: [
    { loader: 'style-loader' },//vai pegar o css que foi interpretado no css-loader e jogar dentro do HTML
    { loader: 'css-loader' },//ira ler o arquivo css e interpretar as importações que tem no arquivo css
]
```

Package.json:
```
"scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
},
```

Instalar para ser possivel carregar arquivos dentro da aplicação:
```
yarn add file-loader
```

Arquivo webpack.config.js:
```
test: /.*\.(gif|png|jpe?g)$/i,
use: [
    { loader: 'file-loader' },
]
```

---

**Conectando o front-end com o back-end:**

Instalar no backend:
```
yarn add cors
```

Instalar axios no front-end:
```
yarn add axios
```

Instalar no front-end:
```
yarn add @babel/plugin-transform-runtime -D
```

arquivo babel.config.js:
```
plugins: [
    '@babel/plugin-transform-runtime'
]
```

---
