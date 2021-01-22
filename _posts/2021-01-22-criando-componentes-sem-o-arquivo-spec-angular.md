---
layout: post
author: Jhonathan Ribeiro
title: Criando componentes sem o arquivo spec - Angular
description: Neste post mostro alguns exemplos de como utilizar a linha de
  comando para criar componentes em subdiretórios e sem os arquivos spec.
date: 2021-01-21
tags: angular
img: /assets/img/background-imagesnagularahsuahsausauhnaxnbasxbpd´cvubdcpabncehvipbdvd-pvbsdvh.png
link_font: "
  https://raccoon.ninja/pt/dev-pt/criando-componentes-em-subdiretorios-e-sem-o-\
  arquivo-spec-angular/#:~:text=Criando%20um%20componente%20sem%20o%20arquivo%2\
  0spec&text=Existe%20uma%20forma%20mais%20f%C3%A1cil.&text=O%20comando%20acima\
  %20vai%20ter,criados)%20e%20false%20(padr%C3%A3o."
font_title: Raccoon.ninja
ogtitle: Criando componentes sem o arquivo spec - Angular
ogtype: article
ogdescription: Neste post mostro alguns exemplos de como utilizar a linha de
  comando para criar componentes em subdiretórios e sem os arquivos spec.
ogimage: /assets/img/background-imagesnagularahsuahsausauhnaxnbasxbpd´cvubdcpabncehvipbdvd-pvbsdvh.png
twitter-creator: " "
twitter-card: " "
twitter-site: " "
---
## Criando um componente

Bom, você já deve saber, mas para criar um componente usando a linha de comando, a sintaxe é a seguinte:

`ng generate component `

Ou se preferir pode utilizar a forma abreviada:

`ng g c`

Ambos os comandos acima vão criar um componente chamado **mycomponent** , dentro da pasta app. (app/mycomponent/…). O segundo é apenas um atalho bem útil.

## Criando um componente sem o arquivo *spec*

Vejo casos em que as pessoas criam os componentes e depois apagam os arquivos spec na mão. Existe uma forma mais fácil.

**`ng g `**

O comando acima vai ter o mesmo efeito dos anteriores, mas o componente **mycomponent** vai ser gerado sem os arquivos spec. A flag —**skipTests** aceita os valores true (que vai fazer com que os arquivos spec não sejam criados) e false (padrão. criar os arquivos spec). Não informar esta flag ou informar e passar o valor false (–skipTests=false) tem o mesmo efeito. (Atenção, a flag é case sensitive e o **T** de **T**ests é maiúsculo.)

## Criando um componente em um subdiretório

Até o momento, criamos um componente chamado **mycomponent** , que fica na pasta **app/mycomponent** . Agora vou mostrar como criar um componente dentro desta pasta **mycomponent** .

**`ng g c mycomponent/bar`**

Simples assim. Basta informar o caminho do componente, a partir da pasta **app**.

Existe um *pulo do gato* neste comando. A pasta app é a raiz do modulo app (app.module.ts). Se você possuir outro modulo (**toolbar**, por exemplo), este comando não vai funcionar, pois a **cli** não saberá onde colocar o novo componente.

Para resolver  o problema, você deve informar também o módulo.

	
**`ng g c mycomponent/bar --module=app.module`**

O valor informado no argumento –module deve ser o nome do arquivo do modulo sem o final **.ts**. (app.module.ts == app.module, toolbar.module.ts == toolbar.module).

Resumindo o post todo: Para criar o componente bar dentro da pasta mycomponent do modulo toolbar e não gerar os arquivos spec:

**`ng g c mycomponent/bar --module=toolbar.module --skipTests=true`**