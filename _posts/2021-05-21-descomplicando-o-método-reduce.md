---
layout: post
author: Jhonathan Ribeiro
title: Descomplicando o método Reduce()
description: O método reduce() é usado para fazer uma redução no array por meio
  de uma função buscando elementos retornando um único valor.
date: 2021-05-21
tags: javascript
img: /assets/img/dsdudo2gneti55onf0ac.jpg
link_font: " "
font_title: " "
ogtitle: Descomplicando o método Reduce()
ogtype: article
ogdescription: O método reduce() é usado para fazer uma redução no array por
  meio de uma função buscando elementos retornando um único valor.
ogimage: /assets/img/dsdudo2gneti55onf0ac.jpg
twitter-creator: "@jhonathanrjb"
twitter-card: summary
twitter-site: "@jhonathanrjb"
---
## **O que é o reduce()**

O método reduce() é usado para fazer uma redução no array por meio de uma função buscando elementos retornando um único valor. 

Vamos ver como é esse método:![](https://miro.medium.com/max/1364/1*oHVvOzqxP2TJP8WYHatmmg.png)Elementos do **reduce()**

## Vamos para alguns exemplos

Poderíamos criar um for para iterar em cada elemento e fazer a soma de todos os valores, ficaria assim:![](https://miro.medium.com/max/992/1*S8x1-gu1KVL2MpratgLgcg.png)for() para somar itens do **array**

Mas para isso, observe, eu criei uma nova variável chamado total para receber o resultado da operação, agora vamos ver como é fácil trazer esse mesmo resultado.

> Vamos reescrever esse mesmo código usando o **reduce()** e vamos ver a mágica acontecer

![](https://miro.medium.com/max/1344/1*N0kvdJlc2WZM3eXx9rK5OA.png)Implementação do **reducer()**

Com o uso do **reduce()** podemos armazenar cada valor iterado no acumulador e somar com o próximo valor atual.

# Ultimo exemplo:

Se eu precisar remover os repetidos e somar somente os valores desse **array**, como você faria?

![](https://miro.medium.com/max/471/1*8uK6iGoEZt5QvA-QQ79ozg.png)

Lembra do valor inicia que havia mencionado? Então ele pode ser um número ou um tipo de dado que queremos retornar, bora ver!

![](https://miro.medium.com/max/1329/1*PeQpgbhX06KufNDWaa4Fuw.png)

Podemos usar a combinação com outros métodos para trabalhar nosso resultado. Aqui usamos um find() para achar o valor e verificar se ele existe no acumulador, existindo soma o valor se não existir ele encerra populando o novo array.

## Considerações finais:

O método **reduce()** não altera o **array** original, ele cria um novo **array** com resultado da operação solicitada.

O nome nos parâmetros pode ser qualquer um a sua escolha, mas lembre-se a ordem deles não podem ser alteradas e deixe sempre claro qual a sua função, sendo sempre:\
Primeiro: acumulador,\
Segundo: valor,\
Terceiro: index,\
Quarto: array original



Valeu pela leitura, até a próxima! =)