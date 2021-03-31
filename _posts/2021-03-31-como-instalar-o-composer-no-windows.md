---
layout: post
author: Jhonathan Ribeiro
title: Como Instalar o Composer no Windows
description: Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador
  de pacotes para PHP Composer no Windows. Este processo é muito fácil, não é
  necessário usar nenhuma instrução de linha de comando para baixar e instalar o
  software.
date: 2021-03-31
tags: Composer
img: /assets/img/composer.gif
link_font: " "
font_title: " "
ogtitle: Como Instalar o Composer no Windows
ogtype: article
ogdescription: Olá pessoal, hoje irei mostrar como baixar e instalar o
  gerenciador de pacotes para PHP Composer no Windows. Este processo é muito
  fácil, não é necessário usar nenhuma instrução de linha de comando para baixar
  e instalar o software.
ogimage: /assets/img/composer.gif
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador de pacotes para PHP Composer no Windows. Este processo é muito fácil, não é necessário usar nenhuma instrução de linha de comando para baixar e instalar o software.

Simplesmente siga esses passos:

* Instale o PHP no seu computador. Recomendo usar o [XAMPP](https://www.apachefriends.org/) para este propósito, já que o processo é simples e direto, e você pode executá-lo em alguns minutos.
* Assim que o XAMPP estiver instalado, faça o download da [versão mais recente do Composer](https://getcomposer.org/Composer-Setup.exe).
* Rode o instalador do Composer. Quando ele pedir para você ativar o modo desenvolvedor, ignore e continue com o processo de instalação

  \
  ![instalador do composer](https://lh4.googleusercontent.com/dDOD78-FmogIxzW3Yis03vFEkD99n94ukb6LHR-3Avh9Y-bNrhXAWbTIwVnvHPUo0O9YHkIEA8Sb7w28e7uBHue9CLo9IS8Z7iNCRrJj7db2XYOHO-9xEcJbmTVnKCePRdza96Zj)


* Outra janela vai aparecer e pedir para você localizar a linha de comando PHP. Por padrão, ela pode ser encontrada em C:/xampp/php/php.exe. Depois de especificar a localização, clique em Next (Próximo).
* Então serão requisitadas as Configurações de Proxy (Proxy Settings). Deixe a caixa desmarcada e pule esta parte ao clicar em Next. Depois, na última janela, escolha Install (Instalar).
* Depois de concluir a instalação, abra o prompt de comando. Para abri-lo, pressione CTRL + R, digite cmd e pressione o botão OK.

  \
  ![windows run](https://lh3.googleusercontent.com/YeVB5bESJ7N_kNbObv0HOL3-QLnaHFr4jZA4EoCwfnJr6k3sgWOzT5tSxD5T_cmBZJ865h-_zSMhrmNIqRogq4r7bWoyq5hSqjXvQs5-55rV9bQqiWvGCefVkE_CCHeUHKjpgBK_)


* No prompt de comando, digite o seguinte comando:

  `composer --version`

Ótimo trabalho! Você instalou o Composer em seu computador com Windows. O instalador automaticamente se encarrega de adicionar o Composer na sua variável PATH. A partir deste momento você pode abrir o prompt de comando e executar o Composer de qualquer lugar.

Espero ter ajudado, até a próxima! :)