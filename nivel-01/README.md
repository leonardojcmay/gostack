# **Nível 01**

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
