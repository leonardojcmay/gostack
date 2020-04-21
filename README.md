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

**<h2>Mobile com React Native</h2>**

09/04/2020

**React Native:**
<br>- Versão do React para desenvolvimento mobile
<br>- Multiplataforma
<br>- Podemos manipular cada plataforma de forma diferente
<br>- Código não é transpilado
<br>**Expo:** 
SDK com um conjunto funcionalidades prontas para usar(camera, video, integrações). Não é necessário configurar emulador. Desvantagens: Limitação sobre o controle do código nativo, várias biblioteca não tem suporte para o Expo, o expo liberou seu conjunto de ferramentas prontas para serem utilizadas com projetos que não utilizam Expo. Não vamos utilizar o Expo nesta aplicação.

<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/05%20-%20Arquitetura%20React%20Native.JPG?raw=true">**Arquitetura**</a>

**Configurando SDK:** fazer todo o processo de instalação que esta nesta página
<br>https://react-native.rocketseat.dev/android/windows
<br>https://react-native.rocketseat.dev/android/emulador

Criando pasta com arquivos do react-native
```
react-native init mobile

adb devices

react-native run-android
```

10/04/2020

**Executando mobile:**
<br>Abrir android studio e executar o emulador criado, rodar na pasta mobile:
```
react-native run-android
```

Criar arquivo src/index.js

**Diferenças** para o ReactJS:
<br>Não possuem valor semantico(significado)
<br>Não possuem estilização própria
<br>Todos componentes possuem por padrao "display: flex"

View: div, footer, header, main, aside, section
<br>Text: p, span, strong, h1, h2, h3
<br>Styles: não pode conter hifens, tem que ser camelCase

<a href="https://github.com/leonardojcmay/gostack/blob/master/imagens/nivel%2001/06%20-%20mobile%20Hello%20World.JPG?raw=true">**Hello World mobile**</a>

**Integrando react-native com o back-end:**

Iniciar back-end: 
```
yarn dev
```

Instalar no mobile:
```
yarn add axios
```

Criado arquivo src/services/api.js

**Conexao opções:**
<br>- ios com emulador: localhost
<br>- ios com fisico: IP da maquina
<br>- android com emulador: localhost(terá que rodar o comando: adb reverse tcp:3333 tcp:3333)
<br>- android com emulador: 10.0.2.2(Android Studio)
<br>- android com emulador: 10.0.3.2(Genymotion)
<br>- android com fisico: IP da maquina

---

**<h2>TypeScript</h2>**

10/04/2020

Adiciona inteligencia no editor para ver mais informações
<br>O typescript é baseado no JavaScript: adiciona funcionalidades a mais no JS

Configurando projeto: criar pasta typescript
```
yarn init -y

yarn add typescript -D
```

Criar arquivo src/index.ts

```
yarn add express

yarn add -D @types/express
```

Convertendo arquivo typescript para javascript para que seja possivel executá-lo:
```
yarn tsc src/index.ts

yarn tsc --init

yarn tsc
```

Executando projeto:
```
node src/index.js
```

Descomentar função no arquivo tsconfig.json:
```
"outDir": "./dist", 
```

Executando projeto:
```
node dist/index.js
```

---

## **Nível 02**

13/04/2020

**<h2>Primeiro projeto com Node.JS</h2>**

Iniciando projeto:
```
yarn init -y

yarn add express

yarn add typescript -D

yarn tsc --init
```

Arquivo tsconfig.json: descomentar linhas:
```
"outDir": "./dist",
"rootDir": "./src",  
```

Executar comando abaixo:
```
yarn tsc

yarn add @types/express -D
```

Executando servidor:
```
yarn tsc

node dist/server.js
```

Excluir a pasta /dist e instalar ts-node-dev para atualizar após alguma alteração de forma automatica o código:
```
yarn add ts-node-dev -D
```

package.json:
```
"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
},
```

Executando servidor:
```
yarn dev:server
```

**EditorConfig** baixar no visual code: botão direito na pasta do projeto e clicar em 'Generate .editorconfig'. Serve para que se caso estiver trabalhando em um grupo que usem diferentes editores de texto, todos sigam na mesma identação, assim diminuindo os erros.

**ESLint:** serve para automatizar os padrões de codigo do projeto.
```
yarn add eslint -D

yarn eslint --init
```

**Perguntas / Respostas:**
<br>To check syntax, find problems, and enforce code style
<br>JavaScript modules (import/export)> JavaScript modules (import/export)
<br>None of these
<br>Yes
<br>Node
<br>Use a popular style gui> Use a popular style guide
<br>Airbnb: https://github.com/airbnb/jav
<br>No

```
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest
```

Instalar tambem ESLint no visual code.

**settings.json:** adicionar dados abaixo.
```
"[javascript]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.esllint": true,
  }
},
"[javascriptreact]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.esllint": true,
  }
},
"[typescript]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.esllint": true,
  }
},
"[typescriptreact]": {
  "editor.codeActionsOnSave": {
    "source.fixAll.esllint": true,
  }
},
```

Importando arquivos Typescript:
```
yarn add -D eslint-import-resolver-typescript
```

Arquivo **.eslintrc.json:**
```
"rules": {
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ]
},
"settings": {
    "import/resolver": {
        "typescript": {}
    }
}
```

**Prettier:** deixar o codigo melhor descrito.
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Arquivo **.eslintrc.json:**
```
"extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
],

"plugins": [
    "@typescript-eslint",
    "prettier"
],

"rules": {
    "prettier/prettier": "error",
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ]
},
```

Criado arquivos prettier.config.js e .eslintignore, colocado informações necessárias nos arquivos.

Debugando NodeJS:
<br>Acessa o Debug no visual code, faz as configurações no arquivo launch.json. E para testar execute o sistema e depois execute o debug, podendo utilizar debugs caso necessário.

---

**<h2>Construindo Aplicação: Go Barber</h2>**

**Cadastro de agendamento:**
<br>Instalando pacote para o id e date-fns para lidar com datas e horarios
```
yarn add uuidv4

yarn add date-fns
```

**Model:** representação de como um dado é salvo dentro da aplicação, como o dado é composto, quais os campos dele...

**Repository:** responsavel por fazer as operações do banco de dados, funções(criar, ler, listar, buscar, alterar, deletar...)

**Route:** receber a requisição, chamar outro arquivos, devolver uma resposta.

**SoC:** Separation of Concerns(Separação de preocupações)

**DTO** (Data Transfer Object): transferindo dados de um objeto para outro.

**Função Omit:** recebe dois parametros e serve para excuir uma propriedade dentro de um tipo.

**Services & SOLID:** armazena as regras de negócio da aplicação
<br>- **Services:** sempre contém um unico método, é onde fica a regra de negócio.
<br>- Dependency Inversion(SOLID)

---

Iniciando Back-end do app:

Banco de Dados:

Estratégias de abstração:
- node-postgres: driver nativo
- knex.js: query builder
- ORM(Object Relational Mapping): sequelize(javascript), TypeORM(typescript)

Docker:
Ajuda a controlar os serviços da aplicação

Funcionamento:
Criação de ambientes isolados(container)
Containers expõe portas para comunicação

Principais conceitos:
Imagem
Container
Docker Registry(Docker Hub)
Dockerfile: receita de uma imagem

Instalando Docker:
https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2
https://docs.docker.com/toolbox/toolbox_install_windows/


Instalando docker postgres:
https://hub.docker.com/_/postgres

Verificando se a porta 5432 não esta sendo utilizada:
```
netstat -o -n –a
```

Rodar no Docker Quickstart Terminal:
```
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Comando para ver se o container esta rodando:
```
docker ps

docker logs 526c717be274
```

Iniciar docker:
```
docker start 526c717be274
```

Instalar Dbeacer: gerencia banco de dados:
https://dbeaver.io/download/

TypeORM:
https://typeorm.io/#/using-ormconfig

```
yarn add typeorm pg
```

Criar tabela de agendamentos:
package.json:
```
"scripts": {
        "build": "tsc",
        "dev:server": "ts-node-dev --inspect --transpileOnly --ignore-watch node_modules src/server.ts",
        "start": "ts-node src/index.ts",
        "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
    },
```

Rodar comando:
```
yarn typeorm

yarn typeorm migration:create -n CreateAppointments
```

migrations: controlam a versão do banco de dados e as alteracoes simultaneas dentro do banco de dados. A migration evita que quando mais devs estiverem trabalhando dentro de um mesmo projeto, evita que os banco de dados estejam em versões diferentes

Após criado migration de appointments:
```
yarn typeorm migration:run
```

So pode alterar uma migration se ela não foi enviado ainda pra o sistema de controle de versao
Desfazendo a migration
```
yarn typeorm migration:revert
```

Mostrando as migrations que ja executaram:
```
yarn typeorm migration:show
```

arquivo tsconfig.json: descomentar campos
"experimentalDecorators": true, 
"emitDecoratorMetadata": true,  
"strictPropertyInitialization": false,

instalar:
```
yarn add reflect-metadata
```

---

Cadastro de usuarios:
```
yarn typeorm migration:create -n CreateUsers
```

Alterando nome de uma tabela no banco utilizando migration:
```
yarn typeorm migration:create -n AlterProviderFieldToProviderId
```

O metodo down tem que sempre fazer ao contrario do metodo up

Relacionamentos:
Um para Um (OneToOne)
Um para Muitos (OneToMany)
Muitos para Muitos (ManyToMany)

KISS - Keep It Simple & Stupid

