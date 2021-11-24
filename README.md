<h1 align="center">
    <img alt="FlixPrime" title="FlixPrime" src=".github/devFreela.png" />
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar aplicação">Executar Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>
<br>

## 💻 Projeto

Esta aplicação chama-se devFreela, consiste em um sistema para encontrar um programador freelancer mais proximo de você. <br><br>
Cada cidade no Brasil, possui um código IBGE diferente, e para encontrar o freelancer mais próximo o sistema é integrado ao webservice do [ViaCEP](https://viacep.com.br/),
para realizar consultas de CEP e assim pelo código IBGE do CEP pesquisado, o sistema busca no banco de dados os freelancers que possuem o mesmo código IBGE e mostra ao usuário.<br>
<br>
O banckend (API) foi desenvolvido em PHP, utilizando o framework Laravel 8, também foi desenvolvido a validação no preenchimento do formulário. <br>  
O frontend foi desenvolvido em React.js e Next.js. 💜
<br><br>
O mobile foi desenvolvido em React Native e Expo, foi usado Location nativo do Expo para solicitar permissão ao usuario pegar suas coordenadas de geolocalização e realizar a busca dos freelancers de forma automatica. <br>

As pessoas nas imagens usadas no sistema não existem, foram retiradas do site!

- [This person do es not exist](https://thispersondoesnotexist.com/)

---

<br>

## O que foi desenvolvido neste projeto

### Frontend

- Criando o projeto

```
npx create-next-app devfreela
```

- Criado arquivo de configuração do TypeScript `tsconfig.json`
- Instalado TypeScript e tipagem do React

```
 npm i typescript @types/react
```

- Instalado as dependências

```
npm i @material-ui/core@next @emotion/react @emotion/styled axios react-input-mask
```

## <br>

### Backend

- Criando o projeto

```
composer create-project laravel/laravel devfreela
```

- Criado arquivo de controller DevfreelaController

```
php artisan make:controller DevfreelaController
```

- Executado as migrações no banco de dados

```
php artisan migrate
```

- Criado novas migração para a tabela devfreela no banco de dados

```
php artisan make:migration create_devfreelas_table
```

- Criado modelo Devfreela

```
php artisan make:model Devfreela
```

- Instalado a dependência para usar o Laravel HTTP Client

```
composer require guzzlehttp/guzzle
```

- Criar link simbólico para o Storage. Dentro da pasta public da aplicação execute no Windows usando prompt em modo administrador:

```
mklink /D public ..\storage\app\public`
```

- Instalado o pacote de tradução para pt_BR

```
composer require lucascudo/laravel-pt-br-localization --dev

php artisan vendor:publish --tag=laravel-pt-br-localization
```

- Instalado o pacote de mascaras no projeto

```
composer require clemdesign/php-mask
```

---

<br>

### Mobile

<br>

- Instalando o Expo Global

```
npm i -g expo-cli
```

<br>

- Criando o projeto mobile

```
expo init NomeProjeto
```

<br>

- Selecionado opção de desenvolvimento

```
blank ( TypeScript )
```

<br>

- Em caso de erro no Windows, executar:

```
set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

<br>

- Instalando dependências

```
npm i @emotion/react @emotion/native axios @react-native-navigation/native react-native-masked-text react-native-paper
```

<br>

- Instalando dependências do React Navigation

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack
```

<br>

- Instalado o pacote de localização do Expo

```
expo install expo-location
```

<br>

---

<br>

## Prévia vizualização do Front-end

Tela inicial do sistema.

<p align="center">
    <img alt="devFreela" title="devFreela" src="https://github.com/Wanderson-A-Timoteo/devfreela/blob/main/.github/devFreela-frontend.PNG?raw=true" />
</p>
<br>

---

<br>

Retornando os dados da API.

<p align="center">
    <img alt="devFreela" title="devFreela" src="https://github.com/Wanderson-A-Timoteo/devfreela/blob/main/.github/devFreela-frontend2.PNG?raw=true" />
</p>
<br>

---

<br>

## Prévia vizualização do Back-end

Tela administrativa do sistema.

<p align="center">
    <img alt="devFreela" title="devFreela" src="https://github.com/Wanderson-A-Timoteo/devfreela/blob/main/.github/devFreela-backend.PNG?raw=true" />
</p>
<br>

---

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Laravel 8](https://laravel.com/docs/8.x/installation)
- [React.js](https://reactjs.org/)
- [SQLite](https://sqlite.org/index.html)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Next.js](https://nextjs.org/docs/getting-started)
- [TypeScripts](https://www.typescriptlang.org/)
- [Material-ui](https://material-ui.com/store/)
- [Composer](https://getcomposer.org/)
- [Guzzle, PHP HTTP Client](https://docs.guzzlephp.org/en/stable/)
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Native Paper](https://reactnativepaper.com/)

<br>

---

<br>

## Executar Aplicação

## 🔥 Executando Localmente a Aplicação

Caso você deseja executar o projeto na sua máquina local, você terá que instalar o Node.js, PHP, Composer. <br>
Após instalar, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) navegue até o local onde você clonou o projeto

```
cd "C:\Users\NomeDoComputador\Documents\clonedoprojeto"
```

Depois, quando estiver na pasta do projeto devFreela, dentro dela terá três pasta uma com o frontend, outra com o backend, e por último a mobile. <br>
Você precisará executar 3 passos: <br>
1 - PASSO <br>
Acessar o projeto frontend na pasta `frontend` digitar no cmd a seguinte instrução: **(dentro da pasta `frontend` do projeto clonado)**

```
> npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

- `node_modules` - que contêm os packages do npm que precisará para o projeto.

#### 💨 Executando a Aplicação

Bom, agora **(dentro da pasta `frontend` do projeto clonado)** abra um terminal para o projeto ser executado e digite:

```
npm run dev
```

Pronto! dessa forma o projeto frontend estará rodando localmente em sua maquina, acesse:

```
http://localhost:3000
```

<br>

---

<br>

2 - PASSO <br>
Abra outro terminal e acesse o projeto backend na pasta `backend` digitar no cmd a seguinte instrução: **(dentro da pasta `backend` do projeto clonado)**

```
>
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json e em composer.json:

- `node_modules` e `vendor` - que contêm os packages do npm e composer que precisará para o projeto.

#### 💨 Executando a Aplicação

Bom, agora **(dentro da pasta `backend` do projeto clonado)** abra um terminal para o projeto ser executado e digite:

```
php artisan serve
```

Pronto! dessa forma o projeto backend estará rodando localmente em sua maquina, acesse:

```
http://127.0.0.1:8000/
```

<br>

---

<br>

3 - PASSO <br>
Abra outro terminal e acesse o projeto mobile na pasta `mobile` digitar no cmd a seguinte instrução: **(dentro da pasta `mobile` do projeto clonado)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

- `node_modules` - que contêm os packages do que precisará para o projeto.

#### 💨 Executando a Aplicação

Bom, agora **(dentro da pasta `mobile` do projeto clonado)** abra um terminal para o projeto ser executado e digite:

```
npm start
```

Pronto! dessa forma o projeto mobile estará rodando localmente em sua maquina, acesse:

```
http://localhost:19002/
```

<br>

---

<br>

## 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/devfreela/issues)**. Assim que possível, estarei respondendo a todas as dúvidas que tiverem!

<br>

---

<br>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br>

---

<br>

## Autor:

Feito com ♥ by

- [**Wanderson A. Timóteo**](https://wanderson.tk)

<br>

---

<br>

## Agradecimentos:

<h1 align="center">
    <img alt="TreinaWeb" title="TreinaWeb" src=".github/treinaweb.png" />
</h1>

- Projeto desenvolvido durante o [Workshop Multi-Stack 02](https://www.treinaweb.com.br/).

- Agradecimento a [Akira Hanashiro](https://github.com/hanashiro) por compartilhar conteúdo relevante e com qualidade de ensino.
