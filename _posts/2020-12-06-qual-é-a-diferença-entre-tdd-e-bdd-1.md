---
layout: post
author: Jhonathan Ribeiro
title: Qual é a diferença entre TDD e BDD?
description: Este artigo faz uma análise detalhada do TDD e do BDD para ver como
  eles correspondem ou diferem em suas características principais.
date: 2020-12-06
tags: Testes
img: /assets/img/qual-a-diferença-entre-bdd-e-tdd-saiba-mais-sobre-esse-assunto-em-jhonathanribeiro.netlify.app.png
link_font: " "
font_title: " "
ogtitle: Qual é a diferença entre TDD e BDD?
ogtype: article
ogdescription: Este artigo faz uma análise detalhada do TDD e do BDD para ver
  como eles correspondem ou diferem em suas características principais.
ogimage: /assets/img/qual-a-diferença-entre-bdd-e-tdd-saiba-mais-sobre-esse-assunto-em-jhonathanribeiro.netlify.app.png
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
No TDD (Test Driven Development), o teste é escrito para verificar a implementação da funcionalidade, mas conforme o código evolui, os testes podem fornecer resultados falsos. BDD (Behavior Driven Development) também é uma abordagem de teste inicial, mas difere ao testar o comportamento real do sistema da perspectiva do usuário final.

## Design de Teste

Em ambas as abordagens TDD e BDD, os testes são escritos antecipadamente, antes que o código real seja escrito. Escrever testes primeiro ajuda a prever o curso do desenvolvimento, o que acabará por evitar que quaisquer casos sejam perdidos no código ou na funcionalidade. A prevenção de bugs será o principal objetivo dessas abordagens, e esses testes também funcionarão como documentação concreta do que está planejado para ser alcançado em termos de cobertura de teste.

## Método de teste

Dentro dessas abordagens, os testes são 'programados'. Para escrever esses testes, são necessárias fortes habilidades de codificação. Portanto, ao programar esses testes, eles podem ser 'automatizados' para uso posterior.

## Fluxo de Trabalho

O fluxo de trabalho se torna mais simples. Você pensa, discute e tem ideias. Essas ideias serão convertidas em testes, e espera-se que o primeiro teste falhe. O código é escrito posteriormente, o que permitirá a aprovação do teste. Depois que o teste for aprovado, o código será refatorado posteriormente para chegar ao melhor design. Esse código recém-refatorado continuará sendo testado até que alcance o resultado esperado.

 

## Comportamento vs Teste

“O que você está testando?” é uma ótima pergunta a se fazer. Você está testando para descobrir o comportamento do aplicativo? Ou você está testando a implementação real? Este é o maior ponto de discussão quando você fala sobre BDD e TDD. No BDD, você está procurando o comportamento, por exemplo, o que acontecerá com este sistema sob uma determinada condição. Mas no TDD você tem um teste para um método que afirma algumas condições, mas conforme o sistema evolui, esses testes podem fornecer resultados falsos.

Para simplificar ainda mais, pode-se dizer que:

Em TDD, não me importo muito com a saída. Só é preciso realizar o teste de uma maneira particular.

Mas no BDD, não me importo como você chega com a saída, apenas que a saída deve estar correta na condição proposta.

## Comunicação e feedback

O BDD tem vantagem sobre o TDD nesta área. Como o comportamento no BDD é escrito em uma linguagem simples e descritiva, seus clientes serão capazes de entender os testes e enviar feedback mais rapidamente. Essas linhas de comunicação mais abertas permitem que você incorpore melhor seus comentários para melhorar ainda mais os testes e o design do software. No TDD, apenas programadores habilidosos podem entender o teste, o que, claro, limita a comunicação com um público mais amplo, mas este método fornecerá um código de maior qualidade.

Novamente, mas em palavras mais simples:

No BDD você encontrará uma especificação melhor, já que a comunicação entre o desenvolvedor do software e o proprietário do produto é rápida e fácil.

O TDD pode não ter a capacidade de especificar o comportamento exato, mas você obtém qualidade com o código do software.

##  

## Testes com falha vs Testes de recursos com falha

Conforme discutido, ambas as abordagens começam escrevendo um teste reprovado e, em seguida, partem daí. No BDD, é escrito um teste que pode satisfazer tanto o desenvolvedor quanto o cliente, mas no TDD você escreve um teste que só satisfaz o desenvolvedor e o código que ele escreve. Como pode ser visto abaixo, o BDD funciona sobre o TDD, o que tornará a implementação do TDD uma abordagem melhor. Portanto, você nunca pode dizer que BDD e TDD são duas coisas totalmente diferentes.

## Conclusão

Embora digamos que o BDD é uma abordagem melhor, não devemos esquecer que o BDD na verdade evoluiu do TDD, como uma forma de eliminar as deficiências do TDD. Portanto, não há absolutamente nenhum dano em implementar as duas abordagens - uma para oferecer suporte à qualidade do código que o desenvolvedor escreve e a outra para oferecer suporte ao comportamento do sistema definido pelo proprietário do produto.