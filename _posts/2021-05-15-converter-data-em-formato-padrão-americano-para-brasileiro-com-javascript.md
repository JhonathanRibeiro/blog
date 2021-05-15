---
layout: post
author: Jhonathan Ribeiro
title: Converter data em formato/padrão americano para brasileiro com Javascript
description: Fala pessoal, neste post rápido e direto eu vou ensinar vocês como
  transformar uma data que está no padrão americano (ano-mês-dia) para o padrão
  brasileiro (dia/mês/ano) da forma mais simples que eu conheço, usando
  Javascript (frontend ou Node.js).
date: 2021-05-15
tags: javascript
img: /assets/img/jhonathanribeiro-javascript-formatardata-data-em-javascript-como-formatar-data-com-javascript-para-padrão-brasileiro-converter-data-com-javascript-jhonathan-ribeiro.png
link_font: " "
font_title: " "
ogtitle: Converter data em formato/padrão americano para brasileiro com Javascript
ogtype: article
ogdescription: Fala pessoal, neste post rápido e direto eu vou ensinar vocês
  como transformar uma data que está no padrão americano (ano-mês-dia) para o
  padrão brasileiro (dia/mês/ano) da forma mais simples que eu conheço, usando
  Javascript (frontend ou Node.js).
ogimage: /assets/img/jhonathanribeiro-javascript-formatardata-data-em-javascript-como-formatar-data-com-javascript-para-padrão-brasileiro-converter-data-com-javascript-jhonathan-ribeiro.png
twitter-creator: "@jhonathanrjb"
twitter-card: summary
twitter-site: "@jhonathanrjb"
---
Fala pessoal, neste post rápido e direto eu vou ensinar vocês **como transformar uma data que está no padrão americano (ano-mês-dia) para o padrão brasileiro (dia/mês/ano)** da forma mais simples que eu conheço, usando **Javascript.**

Já vi desenvolvedores em vários sites ensinando outras soluções não tão eficientes como essa, como usar a biblioteca **moment** ou o objeto **Date** do Javascript para fazer algo que poderia ser feito com apenas uma linha de código. Sem mais delongas, para você **converter uma data do padrão americano para o brasileiro usando Javascript** é só fazer o seguinte:

```javascript
let data_americana = "2021-05-15";
let data_brasileira = data_americana.split('-').reverse().join('/');

//Pronto! A data foi convertida.
console.log(data_brasileira); // retorna: 15/05/2021
```

Explicando: Temos a variável **data_americana**, usamos a função nativa **split** para “explodir” a string em 3 pedaços, dividindo-a por meio do símbolo – (traço). Depois disso, teremos um **array** com 3 strings:

\`\`\`\[“2021”, “05”, “15”]\`\`\`

Depois, usamos neste **array** a função **reverse** para inverter a ordem dos itens do array, resultando no array:

\`\`\`\[“15”, “05”, “2021”]\`\`\`

Depois, usamos a função **join** para "juntar" todos os itens da **array** pelo separador definido (no caso, / (barra)), resultando em uma string com a data inicial formatada no padrão brasileiro (dia/mês/ano).

Por hoje é só, espero que vocês tenham gostado!