---
layout: post
author: Jhonathan Ribeiro
title: Entendendo funções callback em JavaScript
description: De forma simples, callback é uma função passada como parâmetro para
  outra função. Na programação assíncrona, callbacks são passadas como funções
  para serem executadas após um certo evento. Por exemplo, um programa calcula o
  salário líquido a partir do bruto e faz algo com esse valor calculado.
date: 2021-05-21
tags: javascript
img: /assets/img/dsdudo2gneti55onf0ac.jpg
link_font: " "
font_title: " "
ogtitle: Entendendo funções callback em JavaScript
ogtype: article
ogdescription: De forma simples, callback é uma função passada como parâmetro
  para outra função. Na programação assíncrona, callbacks são passadas como
  funções para serem executadas após um certo evento. Por exemplo, um programa
  calcula o salário líquido a partir do bruto e faz algo com esse valor
  calculado.
ogimage: /assets/img/dsdudo2gneti55onf0ac.jpg
twitter-creator: "@jhonathanrjb"
twitter-card: summary
twitter-site: "@jhonathanrjb"
---
De forma simples, callback é uma função passada como parâmetro para outra função. Na programação assíncrona, callbacks são passadas como funções para serem executadas após um certo evento. Por exemplo, um programa calcula o salário líquido a partir do bruto e faz algo com esse valor calculado.

No [MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function) temos a seguinte definição:

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Vamos imaginar um cenário onde temos uma function que vai retornar um objeto com um nome de usuário e um id, essa function vai simular como se estivéssemos fazendo uma requisição de uma API, certo?

**Teremos algo neste formato:**

```
function obterUser(){
/*Chamamos o setTimeout somente para trazer o nosso 
objeto e podermos manipular o tempo dessa execução
*/
setTimeout(() => {
     return  {
       id: 1,
       nome: 'Jhonathan Ribeiro',
     }
   }, 1000);
 }
```

Se a gente quiser executar essa function ela vai trazer um resultado *undefined* devido ao escopo que esta sendo executado essa function.

Ai que usamos as famosas chamadas *callbacks* e vamos seguir a sua convenção.

Vamos entender o como o callback se comporta:

Na função de callback passamos 2 parâmetros, primeiro passamos o **Error** e logo em seguida nosso **Success**, dentro dessa função teremos nosso *console.log().*

```
function obterUser(){
setTimeout(() => {
     return  {
       id: 1,
       nome: 'Jhonathan Ribeiro',
     }
   }, 1000);
}

function meuCallback (resultado){
    console.log('Meu Usuário', resultado)
}
```

Mas se executarmos ele não vai acontecer nada, porque precisamos passar a chamada desse callback na *function obterUser()*, nosso código ficará assim:

```
function obterUser(callback){
  setTimeout(() => {
       return callback(null, {
         id: 1,
         nome: 'Jhonathan Ribeiro',
       })
     }, 1000);
  }


function meuCallback (error, resultado){
  console.log('Meu Usuário', resultado)
}
```

Legal! E assim meu código vai compilar e trazer meu resultado? A resposta é não, porque precisamos de mais uma function para chamar a função e trazer nosso resultado:

```
// Nosso parâmetro de callback (que pode ser outro nome da sua preferência)
function obterUser(callback){
    setTimeout(() => {
      // Passamos null como erro e o return é nosso success 
         return callback(null, {
           id: 1,
           nome: 'Jhonathan Ribeiro',
         })
       }, 1000);
 }

// Nossa função de callback com os parametros "error e sucesso"
function meuCallback (error, resultado){
  // log do nosso resultado
    console.log('Meu Usuário', resultado)
}

/* Essa function vai fazer a chamada inicial e fazer com 
 que nosso callback funcione e o console.log mostre nosso resultado
*/
obterUser(meuCallback)
```

O que acontece aqui é o chamado Hoisting que faz com que nossa função “*obterUser(meuCallback)”* seja executada primeiro pela engine do JavaScript.

Para nossa tratativa de erro podemos fazer o seguinte na nossa função de** *obterUser()***:

```
obterUser(function meuCallback(error, reusltado){
// Se nosso retorno for igual a:
// null || " " || 0 === false
    if(error){
        console.log('Deu Ruim', error)
        return;
    }
    console.log('Meu Usuário', reusltado)
});
```

Ao rodarmos esse código teremos como resultado:

```
Meu Usuário { id: 1, nome: ‘Jhonathan Ribeiro’ }
```

Regras do Callback:

* Por padrão o parâmetro de callback sempre será passado por ultimo
* Sempre passamos primeiro o *Erro* e logo em seguida o *Sucesso*

Você pode aprender mais sobre JavaScript nos cursos gratuitos da **[Rocketseat](https://rocketseat.com.br/).**