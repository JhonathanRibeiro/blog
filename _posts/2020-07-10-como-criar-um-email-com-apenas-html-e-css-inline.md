---
layout: post
author: Jhonathan Ribeiro
title: Como criar um email com apenas HTML
date: 2020-07-10
description: A melhor forma de entender qualquer processo é realizá-lo desde o começo, hoje faremos isso com o design de e-mails,construindo um modelo de e-mail em HTML, do zero.
img: /assets/img/software.jpg # Add image post (optional)
tags: [Productivity,Html, Template] # add tag
---
A melhor forma de entender qualquer processo é realizá-lo desde o começo,hoje faremos isso com o design de e-mails,construindo um modelo de e-mail em HTML, do zero.

## O Pontapé Inicial

Para começar, gostaria de mencionar de onde eu consegui meus recursos.

* Os belos ícones 2D são do [Pierre Borodin](https://dribbble.com/pierreborodin) lá no Dribbble
* As fontes usadas foram a [Oil Can](https://losttype.com/), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) e [Mission Script](http://www.losttype.com/font/?name=mission_script)
* Os ícones de mídia social são da [Metrize Icons](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/alessioatzeni.com/metrize-icons/)

## Mão na massa

Para começar, você precisará iniciar o documento HTML do seu e-mail com a estrutura padrão do HTML:

[![image](https://d33wubrfki0l68.cloudfront.net/1b5c3586b350f91e7bd9fbb529b0cc7d0572fbf9/a483a/assets/images/posts/emailhtml/estruturahtml.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

Com isso, podemos começar a construir o resto da nossa estrutura.

## Criando o Corpo e a Tabela Principal

Primeiro, adicionaremos a estrutura básica do nosso e-mail, começando pela tag `<body>` Atribuiremos o valor zero (0) para as margens e espaçamentos internos (padding), para evitar qualquer espaço inesperado.

Também adicionaremos uma tabela de largura 100%. Ela se comportará como a verdadeira tag `<body>` do nosso e-mail,porque a estilização dela (tag `<body>` ) não é totalmente suportada. Se você quiser adicionar alguma cor de fundo ao "corpo" do seu e-mail, você terá de aplicar a essa tabela.

Configure os atributos `cellpadding` e `cellspacing` para zero, de modo que, mais uma vez, não obtenha qualquer espaço inesperado.

**Nota:** Manteremos o atributo `border="1"` em todas as nossas tabelas, assim, poderemos ver o esqueleto do nosso layout enquanto o construímos. Nós removeremos esse atributo, logo ao final, usando os comandos Pesquisar & Substituir.

[![image](https://d33wubrfki0l68.cloudfront.net/7d0de7d17af4b4140bee2d55e54e15e0c4714c3f/18b1e/assets/images/posts/emailhtml/estruturatable.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

Agora, posicione e centralize uma tabela de 600px de largura dentro da tabela envoltória. 600px é a largura máxima segura para que seus e-mails possam ser visualizados corretamente, na maioria dos clientes de e-mail web e desktop, e na maioria das resoluções.

Configure essa largura usando HTML ao invés do CSS, usando o atributo width. A regra de ouro no desenvolvimento de e-mails em HTML é: Se um atributo ou elemento existir no HTML, use-o ao invés da propriedade CSS.

Nós substituiremos nossa saudação ‘Olá!’ por essa tabela:

[![image](https://d33wubrfki0l68.cloudfront.net/7acbf491c60c01aad036712e49f6c03307e19af5/bd2f9/assets/images/posts/emailhtml/newestructuretable.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)


Também adicionamos uma propriedade de estilo em linha, que configura a propriedade border-collapse para collapse. Se não fizermos isso, as novas versões do Outlook adicionarão um pequeno espaço entre nossa tabela e nossa borda.

## Criando a Estrutura e o Cabeçalho

Em nosso design, podemos ver que o e-mail é dividio em três seções lógicas, assim, criaremos uma linha para cada uma delas.

Dupliquemos a linha solitária que já criamos, para que tenhamos um total de três linhas. Alterei o texto dentro delas para facilitar a identificação de cada uma.

[![image](https://d33wubrfki0l68.cloudfront.net/06afc2fcb3068ce617fbb57fad30bb25b138a285/690f4/assets/images/posts/emailhtml/newtablestructure02.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Agora, coloriremos cada uma, igual ao design. Como `bgcolor` é um atributo HTML válido, nós o usuaremos para configurar a cor de fundo ao invés de fazê-lo através do CSS. Sempre lembre de usar todos os seis caracteres da representação hexadecimal, uma vez que o atalho dos três caracteres nem sempre funcionará.

[![image](https://d33wubrfki0l68.cloudfront.net/3ada959cb71148d6b6d4148eb08486ef2717546c/42aa4/assets/images/posts/emailhtml/newstructuretable03.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

Certo, agora, focaremos na Linha 1. Ajustaremos o espaçamento interno para, então, adicionar nossa imagem.

**Usando Espaçamento Interno**

Quando usarmos espaçamento interno em e-mails, sempre devemos especificar cada um dos valores (top, right, bottom e left), caso contrário, poderemos acabar com problemas inesperados (ex: `padding: 10px 10px 8px 5px;` ), mas, se ainda estiver tendo problemas, talvez queira escrever a forma completa ( `padding-top: 10px; padding-right: 10px; padding-bottom: 8px; padding-left: 5px;` ).

Se estiver com problemas piores que não foram resolvidos da forma anterior (por exemplo, sua plataforma de envio remove seu CSS), simplesmente, não o use. Prefira usar células vazias para criar espaço. Não há necessidade de se usar GIFs espaçadores, apenas tenha certeza de adicionar `style="line-height: 0; font-size: 0;"` à célula, insira um dentro dela e especifique as altura e largura. Eis um exemplo:

[![image](https://d33wubrfki0l68.cloudfront.net/499a77b4bba645bbbc86134b846c3c891f471aaa/cdae4/assets/images/posts/emailhtml/newstructuretable04.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Também perceba que é seguro usar espaçamento interno em tags td , mas não em divs ou ps. Eles se comportam de forma bem imprevisíveis.

Assim, adicionaremos um pouco de CSS em linha para gerar espaçamento interno na célula. Depois, adicionaremos nossa imagem, configuraremos o texto alternativo e colocaremos o atributo `style="display:block;"`, que é uma forma comum de resolver o problema de espaços abaixo de imagens, que alguns clientes de e-mails adicionam. Centralizaremos nossa imagem adicionando `align="center"` à nossa tag `td`. Também adicionaremos um atributo alt, que é muito importante, uma vez que, na maioria das vezes, as imagens em nossos e-mails não serão carregadas automaticamente.

**Nota:** Se o conteúdo do seu cabeçalho for, realmente, importante para sua mensagem, não use um cabeçalho feito totalmente com imagem. Lembre-se, imagens são bloqueadas por padrão pela maioria dos clientes de e-mails, assim, se há algum aspecto do seu conteúdo que seja crucial, nunca o inclua em uma imagem. Nesse exemplo, porém, o meu cabeçalho é bem supérfluo.

[![image](https://d33wubrfki0l68.cloudfront.net/0ccdbae00c9e9480bf818ba452c539f687762748/302cf/assets/images/posts/emailhtml/new05.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



## Criando a Área do Conteúdo

Primeiramente, adicionaremos espaçamento interno na célula central para que a tabela interna tenha algum espaço ao redor, como em nosso design.

[![image](https://d33wubrfki0l68.cloudfront.net/d966f4574459cd9dcf4302f9330450e684304e26/4417b/assets/images/posts/emailhtml/design01.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Agora, adicionaremos uma tabela com três linhas para nosso conteúdo principal - um para a chamada principal, uma para o texto introdutório e uma para a linha com duas colunas. Configuraremos essa tabela com largura igual a 100% ao invés de usar um valor fixo em pixels, uma vez que isso nos ajudará mais à frente, quando tivermos de tornar nosso e-mail em responsivo. Se você sempre configurar as larguras em pixels, você terá inúmeros valores que terá de sobrescrever nas media queries. Se suas tabelas internas usam percentuais, então, quando ajustar a largura do elemento pai, tudo irá ajustar automaticamente.

[![image](https://d33wubrfki0l68.cloudfront.net/25080b08667948aedbf74248c329e5390c3d6c9f/136be/assets/images/posts/emailhtml/newtable06.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)





[![image](https://d33wubrfki0l68.cloudfront.net/26d8e3b1f8287fa1d4f804d2441e8a1ee040c103/fc965/assets/images/posts/emailhtml/design02.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Agora, adicionaremos nosso conteúdo e também adicionaremos o espaçamento interno para a célula central.

[![image](https://d33wubrfki0l68.cloudfront.net/c090acc58ec12b425fd5de5c6d6106aa0ed5bc83/9f834/assets/images/posts/emailhtml/newtable04.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



[![image](https://d33wubrfki0l68.cloudfront.net/4e8385ca3602df87f588c4afdb09ae7f580832ac/51552/assets/images/posts/emailhtml/design05.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Adicionaremos, agora, nossas duas colunas de conteúdo em nossa Linha 3. Já que queremos uma "margem" entre essas duas células, porém, margin não é suportado, criaremos uma tabela com três colunas, deixando a célula central em branco entre as outras duas colunas.

Embora eu seja adepto dos percentuais, quando temos conteúdo com um tamanho específico, pode ser bem complicado converter esse valor para percentual (nesse caso, as colunas teria 48.1% de largura, o que seria bem confuso). Por isso, e já que nossas duas imagens tem 260px de largura, com uma célula de 20px de largura no meio (Esses valores totalizarão 540px, que são os 600px de largura de nossa tabela, menos os 30px de espaçamento interno de cada lado). Tenha certeza de configurar suas font-size e line-height e adicione um na célula margem.

Também configuraremos o atributo valign para "top" para ambas as células, assim, elas alinharão verticalmente, mesmo que uma coluna tenha mais texto que a outra. O valor padrão do alinhamento vertical é "middle".

[![image](https://d33wubrfki0l68.cloudfront.net/098697bd7d61c144437f77db40a7f1cfd576a664/765e8/assets/images/posts/emailhtml/middletable.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



[![image](https://d33wubrfki0l68.cloudfront.net/ae2579df896e6761997ed687d397da41ccdbbb85/21646/assets/images/posts/emailhtml/design045.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Adicionemos, agora, nossas imagens e conteúdo nas colunas. Como precisamos de muitas linhas, vamos inserir mais outra tabela porque não podemos usar os atributos colspan ou rowspan. Também adicionaremos um pouco de espaçamento interno entre a imagem e o texto em cada coluna.

[![image](https://d33wubrfki0l68.cloudfront.net/543f723ef4b10690ca1f08e57bd5164bb31f662d/4b95a/assets/images/posts/emailhtml/table001.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Nós configuramos a largura das imagens, usando HTML, como sendo 100% da largura da coluna. Isso serve para quando formos ajustar a parte responsiva do e-mail, onde só precisaremos alterar a largura do elemento pai. Teremos de sobrescrever a altura em pixels, porque usar style="height: auto"não funcionará em todos os clientes (leia-se, Outlook). Então, configuraremos em pixels mesmo. Isso significa que teremos de usar a propriedade height: auto!important nas imagens que usarmos nas media queries, para sobrescrever o valor em pixels. Poderíamos fazer isso com uma única classe, mas como não podemos usar, teremos de fazer assim. Quanto menos coisas tivermos de sobrescrever, melhor.

[![image](https://cdn.tutsplus.com/webdesign/uploads/2013/06/13.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



## O Rodapé

Agora, adicionaremos o espaçamento interno ao nosso rodapé.

[![image](https://d33wubrfki0l68.cloudfront.net/c57af34945feb0f7352a006ff5da669604194a18/2b29d/assets/images/posts/emailhtml/rodapetable.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



[![image](https://cdn.tutsplus.com/webdesign/uploads/2013/06/14.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Dentro dessa célula, colocaremos mais outra tabela para obtermos nossas duas colunas.

[![image](https://d33wubrfki0l68.cloudfront.net/e754efc67666e695941dda074f12f69116096906/f3f53/assets/images/posts/emailhtml/tablerodape02.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



Criaremos mais outra tabela para nossos ícones de redes sociais. Configuraremos a célula pai para align="right". Tenha certeza de configurar border="0" nos links dessas imagens (para evitar a borda azul de âncoras) e não esqueça de aplicar o display:block.

[![image](https://d33wubrfki0l68.cloudfront.net/c21d15287b1febea221912cc69810433c3206f13/fa635/assets/images/posts/emailhtml/tableblockrodape.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)



[![image](https://cdn.tutsplus.com/webdesign/uploads/2013/06/17.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

entre elas. Configuraremos essa célula com 75% de largura e a outra com 25%.



[![image](https://d33wubrfki0l68.cloudfront.net/37f4490f328359b72bf10285f6d6f3ef76d2a844/696a8/assets/images/posts/emailhtml/widthtablerodape.png)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

Agora é só substituir o border="1" por border="0" para desabilitar as bordas e ver como ficou.E acabamos! Está tudo pronto!

## O resultado final:

[![image](https://cdn.tutsplus.com/webdesign/uploads/2013/06/23.jpg)](https://jhonathanribeiro.netlify.app/construa-um-modelo-de-email-com-apenas-HTML/)

## Ganhe dinheiro encurtando links!

E se você pudesse receber dinheiro pelos links que você compartilha nas redes sociais? Isso é possível graças a essas gigantes abaixo, para saber mais, clica no banner abaixo, cadastre-se agora mesmo e comece a faturar encurtando os seus links. ;)



[![](https://d33wubrfki0l68.cloudfront.net/2cdca305fd6b178639f6c91f896e465fdd494615/51033/assets/images/banners/adfly.gif)](https://join-adf.ly/23571397)
