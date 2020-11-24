---
layout: post
author: "Jhonathan Ribeiro "
title: "Cypress: Introdução aos testes End2End #02"
description: "Na parte #01 configuramos nosso projeto e rodamos nosso primeiro
  teste, vamos dar continuidade de onde paramos e explorar ainda mais as
  possibilidades de testes para o nosso formulário de exemplo..."
date: 2020-11-22
tags: SoftwareTesting
img: /assets/img/cypressio02.png
link_font: " "
font_title: " "
ogtitle: "Cypress: Introdução aos testes End2End #02"
ogtype: article
ogdescription: "Na parte #0a1 configuramos nosso projeto e rodamos nosso
  primeiro teste, vamos dar continuidade de onde paramos e explorar ainda mais
  as possibilidades de testes para o nosso formulário de exemplo..."
ogimage: /assets/img/cypressio02.png
twitter-creator: " "
twitter-card: " "
twitter-site: " "
---
Na parte #01 configuramos nosso projeto e rodamos nosso primeiro teste, vamos dar continuidade de onde paramos e explorar ainda mais as possibilidades de testes para o nosso formulário de exemplo...

## Continuando...

Para continuar nosso teste, podemos verificar a entrada de e-mail:

```javascript
describe("Testando Formulario", () => {
  it("Preenchendo formulario", () => {
    //acessando a URL Base
    cy.visit("/");
    //selecionando o formulário
    cy.get("form");
    //selecionando o input name e inserindo 
    //um texto
    cy.get('input[name="name"]')
      .type("Isabella")
      .should("have.value", "Isabella");
    
    cy.get('input[name="email"]')
      .type("isa@dev.com")
      .should("have.value", "isa@dev.com");
  });
});
```

Além disso, podemos digitar na área de texto:

```javascript
describe("Testando Formulario", () => {
  it("Preenchendo formulario", () => {
    cy.visit("/");
    cy.get("form");

    cy.get('input[name="name"]')
      .type("Isabella")
      .should("have.value", "Isabella");

    cy.get('input[name="email"]')
      .type("isa@dev.com")
      .should("have.value", "isa@dev.com");
    
    cy.get("textarea")
      .type("Esta é a mensagem a ser enviada!")
      .should("have.value", "Esta é a mensagem a ser enviada!");
  });
});
```

**Se você deixou o Cypress aberto,** suas alterações serão atualizadas automaticamente:

![V6c4anel o](https://images2.imgbox.com/f1/6c/V6C4aNEl_o.png)Delicinha! Agora vem a cereja do bolo, vamos testar o envio do formulário com o **.submit()**:

```javascript
describe("Testando Formulario", () => {
  it("Preenchendo formulario", () => {
    cy.visit("/");
    cy.get("form");

    cy.get('input[name="name"]')
      .type("Isabella")
      .should("have.value", "Isabella");

    cy.get('input[name="email"]')
      .type("isa@dev.com")
      .should("have.value", "isa@dev.com");
    
    cy.get("textarea")
      .type("Esta é a mensagem a ser enviada!")
      .should("have.value", "Esta é a mensagem a ser enviada!");
    
    cy.get("form").submit();
  });
});
```

O teste deve continuar passando sem nenhum problema. **Uma coisa que você pode notar são estes comandos auto descritivos** : `type`, `submit`. É um inglês simples, oque torna o **cypress** ainda mais interessante. :D

Agora vamos nos aprofundar um pouco mais na próxima seção com o **teste de solicitação XHR**.

## Solicitações Stubbing XHR com Cypress

Entre todas as coisas, o **Cypress também é capaz de interceptar solicitações AJAX** e fornecer respostas falsas. Essa abordagem é conhecida como **stub**.

Para demonstrar esse recurso, vamos adicionar um novo trecho de código dentro de nosso teste:

```javascript
describe("Testando Formulario", () => {
  it("Preenchendo formulario", () => {
    cy.visit("/");
    cy.get("form");
    //conteúdo anterior omitido
    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 }
    });
    cy.get("form").submit();
  });
});
```

Aqui, `cy.server()` roda um servidor "virtual" enquanto `cy.route()` configura o endpoint da nossa Fake API.

Agora vamos adicionar outro teste para verificar: **depois que o usuário enviar o formulário, queremos testar se a Fake API está respondendo**.

**O stub é útil porque podemos ignorar a API real completamente no desenvolvimento**. Vamos estender o teste com `cy.contains()`:

```javascript
describe("Testando Formulario", () => {
  it("Preenchendo formulario", () => {
    cy.visit("/");
    cy.get("form");
    //conteúdo anterior omitido
    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 }
    });
    cy.get("form").submit();
    cy.contains("Enviado com sucesso!");
  });
});
```

**Espera-se** que esse teste **falhe** porque ainda não implementamos a lógica para enviar os dados do formulário a nossa Fake API. Mas não se preocupe, faremos o teste passar na próxima seção.

## Enviando os dados do formulário para a Fake API

O **Cypress** implementou suporte para a **Fetch stub** a partir da **versão 4.9.0**, portanto, para habilitá-lo, configure `experimentalFetchPolyfill` em `cypress.json`:

```json
{
  "baseUrl": "http://localhost:5000",
  "experimentalFetchPolyfill": true
}
```

Neste exemplo,vamos usar `XMLHttpRequest`. Abra o arquivo `form.js` e implemente o seguinte script:

```json
const form = document.forms[0];

form.addEventListener("submit", event => {
  event.preventDefault();
  new FormData(form);
});

document.addEventListener("formdata", event => {
  const body = Object.fromEntries(event.formData.entries());
  const jsonBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/users/");
  request.send(jsonBody);
});
```

Neste trecho, estou usando o evento **[formdata](https://jhonathanribeiro.netlify.app/formdata-o-mais-novo-evento-em-formul%C3%A1rios-html/)**,despachado quando chamamos **new FormData**.

No ouvinte(listener) do evento, construímos um objeto com `fromEntries`(ECMAScript 2019). Em **seguida, enviamos os dados para a Fake API**. 

Para fazer o teste passar, também precisamos **obter a resposta da Fake API** e salvá-la no documento. Para fazer isso, podemos ouvir o evento **onload** de **XMLHttpRequest**:

```json
// conteúdo anterior omitido
document.addEventListener("formdata", event => {
  const body = Object.fromEntries(event.formData.entries());
  const jsonBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/users/");
  request.send(jsonBody);
  // Obtendo a resposta JSON
  request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
  };
});
```

Finalmente, podemos **(apenas para manter as coisas simples) salvar a resposta na página** (por favor, não repitam isso em casa...rsrsrs em uma aplicação séria você vai arrumar aquela dor de cabeça básica, lembrando que utilizei esse método apenas para simplificar as coisas):

```javascript
// conteúdo anterior omitido
  request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    document.body.innerHTML += `Resposta vinda do servidor: ${jsonResponse.status}`;
  };
```

É agora ou nunca, chegou a hora de ver aquele checked tão esperado! Vou deixar abaixo o código que foi desenvolvido até aqui.

## Solicitações Stubbing XHR com Cypress: teste aprovado

Para recapitular, aqui está o teste completo em `cypress/integration/form.spec.js`:

```javascript
describe("Testando Formulario", () => {
    it("Preenchendo formulario", () => {
      cy.visit("/");
      cy.get("form");
  
      cy.get('input[name="name"]')
        .type("Isabella")
        .should("have.value", "Isabella");
  
      cy.get('input[name="email"]')
        .type("isa@dev.com")
        .should("have.value", "isa@dev.com");
      
      cy.get("textarea")
        .type("Esta é a mensagem a ser enviada!")
        .should("have.value", "Esta é a mensagem a ser enviada!");
        
        cy.server();
        cy.route({
          url: "/users/**",
          method: "POST",
          response: { status: "Saved", code: 201 }
        });
        cy.get("form").submit();
      });
    });
```

Aqui está o código completo para `form.js`:

```javascript
const form = document.forms[0];

form.addEventListener("submit", event => {
  event.preventDefault();
  new FormData(form);
});

document.addEventListener("formdata", event => {
  const body = Object.fromEntries(event.formData.entries());
  const jsonBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/users/");
  request.send(jsonBody);
  // Obtendo a resposta JSON
  request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    document.body.innerHTML += `Resposta vinda do servidor: ${jsonResponse.status}`;
  };
});
```

Uma coisa que devemos ter em mente é que a **API real provavelmente não retornaria da mesma forma do nosso stub falso**. Ao desenvolver uma aplicação real, você precisa adaptar seus testes ao sistema real.

Por enquanto, estamos bem, e se você manteve o **Cypress** aberto, já deve ter visto o teste passando:

![Teste sendo executado pelo Cypress.io](https://images2.imgbox.com/64/07/pQsGsUeQ_o.png "Teste sendo executado pelo Cypress.io")

[](https://www.valentinog.com/blog/static/83d570e66daa28b0dfd089ab2dc03056/47aef/cypress-stub-pass.png)Você pode ver a seção de rotas no canto superior esquerdo e o **stub XHR** na saída do teste, **sinal de que Cypress interceptou a solicitação POST corretamente**.

Essa é uma das melhores características do **Cypress**, sem contar as dezenas de comandos e asserções prontas para usar.

Com o **stub**, podemos concluir o tutorial. Good job!

## Conclusões

Espero que você tenha aprendido algo novo com este tutorial e que aplique esses conceitos em seu próximo projeto! Lembre-se, o teste é muito importante!

O teste de ponta a ponta(**End2End**) não deve ser difícil: o **Cypress** torna-o agradável e divertido. A equipe da **Cypress** acertou em cheio. 

Além disso, a documentação é molesinha: **[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)** está repleto de práticas recomendadas e exemplos.

Obrigado pela leitura e fique ligado para saber mais!