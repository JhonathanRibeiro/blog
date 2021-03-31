---
layout: post
author: Jhonathan Ribeiro
title: Como instalar o composer no MacOS
description: Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador
  de pacotes para PHP Composer no MacOS.   Para instalar o gerenciador de
  pacotes Composer, você precisa executar um console (terminal) do macOS e estar
  com a versão PHP 5.3 ou superior instalada no sistema.
date: 2021-03-31
tags: Composer
img: /assets/img/composer.gif
link_font: " "
font_title: " "
ogtitle: Como instalar o composer no MacOS
ogtype: article
ogdescription: Olá pessoal, hoje irei mostrar como baixar e instalar o
  gerenciador de pacotes para PHP Composer no MacOS.   Para instalar o
  gerenciador de pacotes Composer, você precisa executar um console (terminal)
  do macOS e estar com a versão PHP 5.3 ou superior instalada no sistema.
ogimage: /assets/img/composer.gif
twitter-creator: " "
twitter-card: " "
twitter-site: " "
---
Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador de pacotes para PHP Composer no MacOS. 

Para instalar o gerenciador de pacotes Composer, você precisa executar um console (terminal) do macOS e estar com a versão PHP 5.3 ou superior instalada no sistema.

Depois, faça o seguinte:

Passo 1. Faça o download do arquivo binário do Composer no site getcomposer.org, executando o seguinte comando (ele criará um arquivo composer.phar na pasta atual);

`curl -sS https://getcomposer.org/installer | php`

Passo 2. Agora, copie esse arquivo composer.phar na pasta bin para disponibilizar em qualquer lugar do sistema. Além disso, defina a permissão de execução no arquivo. Alterei o nome do arquivo de compositer.phar para compositor para facilitar o uso;

`mv composer.phar /usr/local/bin/composer`

`chmod +x /usr/local/bin/composer`

Passo 3. Execute o comando compositor no prompt de comando. Isso fornecerá detalhes da versão do compositor, além de opções disponíveis com o comando compositer;

`composer`

 

```ags
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 1.9.0 2019-08-02 20:55:32

Usage:
  command [options] [arguments]

Options:
  -h, --help                     Display this help message
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi                     Force ANSI output
      --no-ansi                  Disable ANSI output

```

Passo 4. O compositor PHP fornece uma opção de linha de comando (atualização automática) para atualizar-se. Assim, você pode simplesmente executar o comando abaixo no terminal para atualizar a composição no seu macOS;

`sudo composer self-update`

Pronto! Você já pode usar o Composer e simplificar o gerenciamento de pacotes PHP.

Espero ter ajudado, até a próxima! :)