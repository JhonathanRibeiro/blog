---
layout: post
author: Jhonathan Ribeiro
title: "Arrow functions - JavaScript "
description: Apesar de ser uma feature bastante usada hoje em dia, algumas
  pessoas ainda não conhecem alguns segredos dessa nova sintaxe de funções em
  JavaScript.
date: 2021-05-20
tags: javascript
img: /assets/img/apesar-de-ser-uma-feature-bastante-usada-hoje-em-dia-algumas-pessoas-ainda-não-conhecem-alguns-segredos-dessa-nova-sintaxe-de-funções-em-javascript..png
link_font: " "
font_title: " "
ogtitle: Arrow functions - Javascript
ogtype: article
ogdescription: Apesar de ser uma feature bastante usada hoje em dia, algumas
  pessoas ainda não conhecem alguns segredos dessa nova sintaxe de funções em
  JavaScript.
ogimage: /assets/img/apesar-de-ser-uma-feature-bastante-usada-hoje-em-dia-algumas-pessoas-ainda-não-conhecem-alguns-segredos-dessa-nova-sintaxe-de-funções-em-javascript..png
twitter-creator: "@jhonathanrjb"
twitter-card: summary
twitter-site: "@jhonathanrjb"
---
Apesar de ser uma *feature* bastante usada hoje em dia, algumas pessoas ainda não conhecem alguns segredos dessa nova sintaxe de funções em JavaScript.\
Quer saber tudo o que as *arrow functions* são capazes de fazer? Vem comigo que eu te mostro =)

## Nova sintaxe

Pra quem ainda não teve contato com as ***arrow functions***, Vamos começar entendendo a nova sintaxe.

```
const sum = (a, b) => {\
return a + b\
}
```

À primeira vista pode parecer estranho, mas usando `function` tradicional, podemos obter o mesmo resultado assim:

```
const sum = function (a, b) {
return a + b
}
```

A criação de uma ***arrow function*** consistem em 3 “passos”:

* Os parênteses, que é por onde a função recebe os argumentos (assim como na `function` tradicional);
* A “seta” `=>` – responsável pelo nome “arrow” function;
* E as chaves: o bloco de código que representa o corpo da função.

Perceba que a ideia é bastante similar à forma padrão de usar funções em JS, com a diferença que não usamos a palavra chave `function`, e sim uma seta (`=>`) entre os parênteses (argumentos) e as chaves (bloco que gera o corpo da função).

**Variações da sintaxe**

**1. Função que não tem nada no seu corpo além do retorno**

Se a função vai apenas retornar algum valor, nós podemos omitir as chaves (corpo da função) e a palavra chave `return`.

Ao invés de escrever:

```
const sum = (a, b) => {
return a + b
}
```

Podemos apenas escrever:

```
const sum = (a, b) => a + b
```

Para esse exemplo, o retorno da função fica implícito. Tudo o que está sendo colocado logo após a “seta” será considerado o retorno da função.

**ATENÇÃO**

No exemplo acima, nós estamos retornando apenas a soma de dois números. Essa sintaxe é válida para qualquer tipo de dado sendo retornado **exceto para objetos**.

*Por que objetos são uma exceção?*

Para criarmos objetos literais, nós usamos as chaves. Logo, ao retornar um objeto, a criação da função teria um sentido ambíguo: *as chaves são para abrir o bloco do corpo da função, ou é um retorno de objeto literal?*

Para esse caso específico, sempre que quisermos retornar um objeto de forma implítica usando uma *arrow function*, nós precisamos envolver esse objeto em parênteses.

Vamos ver alguns exemplos.

Para retornar um objeto de forma **explícita** (com o corpo da função, e o `return`), nós faríamos assim:

```
const person = () => {
return {
name: ‘Jhonathan’,
surname: ‘Ribeiro’,
age: 25
}
}
```

Agora, se retornar de forma **implícita**, teríamos que fazer da seguinte forma:

```
const person = () => ({
name: ‘Jhonathan’,
surname: ‘Ribeiro’,
age: 25
})
```

Veja que a diferença foi apenas envolver o objeto em **parênteses**.

Em JS, os parênteses servem apenas para dar prioridade na execução de alguma expressão, então basicamente o que acontece é que toda a expressão dentro dos parênteses é que será retornada pela função `person`, assim que ela for executada.

**2) Funções com apenas um argumento**

Quando a função recebe apenas um argumento, podemos omitir os parênteses.

Então essa função:

```
const meuNumero = (value) => {
return value + 5
}
```

Poderia ser escrita com retorno implícito:

```
const meuNumero = (value) => value + 5
```

E como só um argumento é esperado pela função, podemos omitir os parênteses:

```
const meuNumero = value => value + 5
```

**Importante:** Não é obrigatório omitir os parênteses. Eu, particularmente, prefiro deixar, pois acho que torna a leitura mais fácil.

![](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)