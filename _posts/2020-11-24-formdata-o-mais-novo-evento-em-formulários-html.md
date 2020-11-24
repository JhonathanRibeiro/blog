---
layout: post
author: Jhonathan Ribeiro
title: FormData, o mais novo evento em formulários HTML
description: Você já ouviu falar sobre o novo evento formdata? É apenas um novo
  evento DOM, mas cada nova adição à plataforma da web me deixa sempre animado.
date: 2020-11-24
tags: Novidades
img: /assets/img/novo-evento-formdata.png
link_font: " "
font_title: " "
ogtitle: FormData, o mais novo evento em formulários HTML
ogtype: article
ogdescription: Você já ouviu falar sobre o novo evento formdata? É apenas um
  novo evento DOM, mas cada nova adição à plataforma da web me deixa sempre
  animado.
ogimage: /assets/img/novo-evento-formdata.png
twitter-creator: " "
twitter-card: " "
twitter-site: " "
---
Você já ouviu falar sobre o novo evento **formdata**? É apenas um novo evento DOM, mas cada nova adição à plataforma da web me deixa sempre animado.

## O que é FormData?

Vamos esclarecer o que é **FormData** antes de entrar em mais detalhes. Para aqueles que são novos no desenvolvimento web, os formulários **HTML** são capazes de emitir eventos. Este é um recurso de quase todos os elementos **HTML**.

Considere o seguinte formulário:

```json
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"/>
    <title>Formulários HTML em JavaScript</title>
</head>
<body>
<form>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" required>
    <label for="description">Descrição Curta</label>
    <input type="text" id="description" name="description" required>
    <label for="task">Tarefa</label>
    <textarea id="task" name="task" required></textarea>
    <button type="submit">ENVIAR</button>
</form>
</body>
<script src="form.js"></script>
</html>
```

Para acompanhar, você pode criar um arquivo **HTML**, copie meu exemplo. Quando o formulário é submetido,ou seja,quando o usuário preenche os campos e clica no botão “Enviar”, é despachado um evento denominado submit .

Isso significa que podemos ouvir o evento submit com um ouvinte(listener) de evento:

```json
// form.js
const form = document.forms\[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
});
```

Chamar **preventDefault()** impede a atualização da página, conveniente quando você não deseja enviar os campos do formulário no backend.

Agora, existem algumas maneiras de obter os dados reais do formulário. Você pode inspecionar **event.target.elements** o qual, neste caso, produz todos os elementos do formulário ou,melhor ainda, pode usar **FormData**,uma interface **DOM**, como um construtor. Precisa do formulário como argumento:

```json
const form = document.forms\[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(form);
});
```

De agora em diante, você pode fazer todo o tipo de coisas no objeto **FormData**. Falaremos sobre isso mais tarde. Agora vamos explorar o evento formdata.

## Conhecendo o evento formdata

O evento **formdata** é uma adição mais recente e agradável à plataforma da web. Como um impulso para **FormData**, o evento é disparado sempre que você chama \`\`\`new FormData()\`\`\`. Agora considere o seguinte exemplo:

```json
const form = document.forms\[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {
  // event.formData
  console.log(event.formData);
});
```

No primeiro ouvinte de evento , construímos um novo **FormData** a partir do formulário. Desta vez, não há necessidade de salvar o resultado em uma variável.

Em resposta a essa chamada, o novo objeto dispara o evento formdata , no qual registramos outro ouvinte. Neste segundo ouvinte, podemos obter os dados reais de **event.formData**.

Esse padrão ajuda a desacoplar os primeiros ouvintes de evento de qualquer outro retorno de chamada que deveria manipular os dados reais do formulário (fazendo chamadas de API e outras coisas).

Na próxima seção, veremos como obter dados de um objeto FormData .

## Pegando dados de um objeto FormData

Se você quiser entrar em um objeto **FormData**, acesse o formulário HTML de exemplo em um navegador e coloque um ponto de interrupção nele console.log(event.formData).

Preencha e envie o formulário com o console do navegador aberto e salve o objeto como uma variável global. Você deve conseguir acessar o objeto (temp1) no Chrome:

```json
console.log(temp1)
// FormData {append: ƒ, delete: ƒ, get: ƒ, getAll: ƒ, has: ƒ, …}
```

Como você pode ver, ele possui vários métodos. Para extrair uma matriz de valores, execute:

```json
const values = \[...temp1.values()]
// sample output
// \["Liz", "Trip to London", "Trip to London"]
```

Para extrair uma série de entradas, execute:

```json
const entries = \[...temp1.entries()]
```

Em nosso exemplo, podemos obter todos os dados em várias formas do objeto FormData:

```json
const form = document.forms\[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {
  const data = event.formData;
  // get the data
  const entries = \[...data.entries()];
  console.log(entries);
  const values = \[...data.values()];
  console.log(values);
});
```

**AVISO**: **FormData depende de atributos de nome(name="") de campos de formulário para construir o mapeamento entre campos e valores. Isso significa que os seguintes elementos não produzirão nada:**

```json
<!-- ERRADO -->
<input type="text" id="name" required>
<input type="text" id="description" required>
//Sempre forneça um nome(name="") para seus campos:

<!-- CERTO -->
<input type="text" id="name" name="name" required>
<input type="text" id="description" name="description" required>
```

Obrigado pela leitura e fique ligado para saber mais!