---
layout: post
author: Jhonathan Ribeiro
title: "Cypress: Introdução aos testes End2End #01"
description: Teste de ponta a ponta , ou teste de interface do usuário, é uma
  das muitas abordagens para testar um aplicativo da web.
date: 2020-11-23
tags: SoftwareTesting
img: /assets/img/cypressio.png
link_font: " "
font_title: " "
ogtitle: "Cypress: Introdução aos testes End2End #01"
ogtype: article
ogdescription: Teste de ponta a ponta , ou teste de interface do usuário, é uma
  das muitas abordagens para testar um aplicativo da web.
ogimage: /assets/img/cypressio.png
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
## O que é Cypress? O que é teste de ponta a ponta?

O **Cypress** é um framework de testes automatizados end-to-end usando **JavaScript**, usa o Selenium para poder fazer a comunicação com os elementos do DOM enviando comandos de forma remota e isso tudo envelopado (wrapper) pelo Protractor ou Webdriver, etc.

**Teste de ponta a ponta** , ou teste de interface do usuário, é uma das muitas abordagens para testar um aplicativo da web.

Um teste de ponta a ponta verifica se um aplicativo da web funciona conforme o esperado ou não, testando o chamado **fluxo do usuário** .

O teste de ponta a ponta é importante? Sim, ele é. Mas ninguém gosta de testes E2E. Eles podem ser lentos, complicados e caros de escrever.

Por outro lado, o **teste lhe dá confiança** . Você enviaria um produto quebrado para seus usuários propositalmente?

## Requisitos para esse tutorial

Para acompanhar este tutorial, você precisa de uma instalação funcional do **[Node.js](https://jhonathanribeiro.netlify.app/instalando-o-nodejs-usando-o-gerenciador-de-vers%C3%B5es-do-node/)** em seu sistema. Além disso, um entendimento básico de JavaScript é uma vantagem. Certifique-se que as seguintes ferramentas estão instaladas em seu sistema:

\- [Git](https://git-scm.com/);

\- [Nodejs](https://jhonathanribeiro.netlify.app/instalando-o-nodejs-usando-o-gerenciador-de-vers%C3%B5es-do-node/);

\- Editor de Código(Estou utilizando o [VSCode](https://code.visualstudio.com/));

Para começarmos, crie uma nova pasta em um local de sua preferência, chamei o meu de **end2end:**

```bash
mkdir end2end && cd end2end
```

Dentro desta pasta, crie dois novos arquivos. Um documento HTML em `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Cypress: Introdução aos testes End2End</title>
  </head>
  <body>
    <main>
      <form>
        <div>
          <label for="name">Nome</label>
          <input type="name" required name="name" id="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" required name="email" id="email" />
        </div>
        <div>
          <label for="message">Mensagem</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </main>
  </body>
  <script src="form.js"></script>
</html>
```

É um formulário **HTML** com vários inputs e uma área de texto.

Em seguida, crie um arquivo JavaScript `form.js`com uma lógica mínima para lidar com o envio do formulário:

```javascript
const form = document.forms[0];

form.addEventListener("submit", event => {
  event.preventDefault();
});
```

Observe que não adicionarei estilos para manter as coisas simples. Com este projeto simples implementado, estamos prontos para **instalar o Cypress**.

## Instalando Cypress

Para instalar o [Cypress](https://www.cypress.io/), ainda na pasta do projeto, execute:

```bash
npm install cypress
```

Aguarde um minuto (é necessário fazer o download do binário) e execute:

```bash
npx cypress open
```

O **[Cypress](https://www.cypress.io/)** será iniciado pela primeira vez e várias novas pastas aparecerão em seu projeto. Você pode remover com segurança a pasta de exemplo.

![Bdfvd52v o](https://images2.imgbox.com/55/f9/bDfvD52V_o.png)

Feche a janela por enquanto e vá para a próxima seção.

## Iniciando o projeto

Para veicular o projeto na máquina local, certifique-se de ter uma versão mais recente do [Node.js](https://jhonathanribeiro.netlify.app/instalando-o-nodejs-usando-o-gerenciador-de-vers%C3%B5es-do-node/) instalada e execute:

```bash
npx serve
```

Isso irá iniciar um servidor de desenvolvimento em <http://localhost:5000/>.Acesse o link e você deverá ver o nosso formulário:

![Formulário de exemplo](https://images2.imgbox.com/70/94/llbzaifR_o.png)

## Escrevendo seu primeiro teste

Crie um novo arquivo `cypress/integration/form.spec.js` e escreva seu primeiro bloco:

```javascript
describe("Testando formulário", () => {
  //content
});
```

`describe` é um método do **Cypress** (emprestado do Mocha) para conter um ou mais **testes relacionados**.Cada vez que você começa a escrever um novo conjunto de testes para uma funcionalidade, envolva-o em um bloco `describe`.

Como você pode ver, ele requer dois argumentos: uma string para descrever o conjunto de testes e uma **função de retorno de chamada para envolver o teste real** .

A seguir, vamos conhecer outra função chamada `it` que é o bloco de teste real:

```javascript
describe("Testando formulário", () => {
  it("Preenchendo o formulário", () => {
    //
  });
});
```

Se você já conhece **Jest**, deve se lembrar que ele utiliza `it` ou `test` indiferentemente. Esse não é o caso do **Cypress**. `it` é o único bloco reconhecido.

Agora é hora de testarmos! No bloco \`it\` escreva:

```javascript
describe("Testando formulário", () => {
  it("Preenchendo o formulário", () => {
    //Acessando a URL base 
    cy.visit("/");
    //Selecionando o FORM
    cy.get("form");
  });
});
```

Aqui `cy` representa o próprio Cypress. \`visit\`  é um método para navegar até um determinado caminho.

`get`  em vez disso, é um método para **selecionar elementos na página** . Com esse código, dizemos ao **Cypress**  "Vá até a página especificada e selecione o formulário".

Em um minuto veremos o **Cypress**  em ação, mas primeiro, um pouco de configuração!

## Configurando o Cypress

Para agilizar um pouco as coisas, vamos configurar o **Cypress**. Para começar, abra `package.json` e crie um script chamado **e2e** apontando para o binário **Cypress**:

```json
"scripts": {
    "e2e": "cypress open"
  },
```

Em seguida, abra `cypress.json` e configure o URL base:

```json
{
  "baseUrl": "http://localhost:5000"
}
```

Com esta opção, dizemos ao **Cypress** para visitar a nossa URL de desenvolvimento.(5000 é a porta padrão para o package **service**).

Agora estamos prontos para executar nosso primeiro teste! Hehe

## Executando o teste

Pronto? Com o servidor de desenvolvimento ainda em execução em um terminal:

```bash
npx serve
```

**abra outro terminal** e execute:

```bash
npm run e2e
```

Você deverá ver o **Cypress abrindo um navegador** e percorrendo a página:

![Cypress abrindo um navegador](https://images2.imgbox.com/26/22/998IYfm6_o.png)

Essa é a sua primeira aprovação no teste! Ambos **visit** e **get** são comandos do **Cypress** que atuam também como **asserções implícitas**,ou seja, se o elemento estiver na página o **Cypress** considerará o teste aprovado.

Agora, vamos continuar estendendo seu teste para ver se o usuário pode preencher o formulário:

```javascript
describe("Testando formulário", () => {
  it("Preenchendo o formulário", () => {
    cy.visit("/");
    cy.get("form");
    
    cy.get('input[name="name"]').type("Isabella");
  });
});
```

Aqui está outro comando **Cypress** `type`: que sem surpresa digita em nosso primeiro input \[name]. Além disso, observe que foi utilizado um seletor CSS para obter o elemento de entrada. Você pode utilizar seletores css para obter os dados necessários(id,tags,classes etc), mas o Cypress recomenda que você utilize data-* attributes para fornecer contexto aos seus seletores e isolá-los das alterações de CSS ou JS. 

Vamos também adicionar um outro comando: `should`. Este comando cria uma asserção e é usado, por exemplo, para verificar se uma entrada está atualizando seu estado conforme o esperado:

```javascript
describe("Testando formulário", () => {
  it("Preenchendo o formulário", () => {
    cy.visit("/");
    cy.get("form");
    
    cy.get('input[name="name"]')
      .type("Isabella")
      .should("have.value", "Isabella");
  });
});
```

\
Observe `have.value`. Se você é novo neste conceito, pode [aprender mais sobre asserções aqui](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Assertions).

Com um teste mínimo implementado, daremos continuidade no[ próximo capítulo desse tutorial](https://jhonathanribeiro.netlify.app/cypress-introdu%C3%A7%C3%A3o-aos-testes-end2end-02/).