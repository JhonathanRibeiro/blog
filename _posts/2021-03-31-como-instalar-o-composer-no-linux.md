---
layout: post
author: Jhonathan Ribeiro
title: Como instalar o composer no linux
description: Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador
  de pacotes para PHP Composer no Linux Ubuntu 20.04. O Composer é uma
  ferramenta que facilita o trabalho de gerenciar as dependências em projetos
  PHP. Ele fornece uma maneira confiável de descobrir, instalar e atualizar
  pacotes PHP dos quais um projeto depende.
date: 2021-03-31
tags: Composer
img: /assets/img/composer.gif
link_font: " "
font_title: " "
ogtitle: Como instalar o composer no linux
ogtype: article
ogdescription: Olá pessoal, hoje irei mostrar como baixar e instalar o
  gerenciador de pacotes para PHP Composer no Linux Ubuntu 20.04. O Composer é
  uma ferramenta que facilita o trabalho de gerenciar as dependências em
  projetos PHP. Ele fornece uma maneira confiável de descobrir, instalar e
  atualizar pacotes PHP dos quais um projeto depende.
ogimage: /assets/img/composer.gif
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
Olá pessoal, hoje irei mostrar como baixar e instalar o gerenciador de pacotes para PHP Composer no Linux Ubuntu 20.04. O Composer é uma ferramenta que facilita o trabalho de gerenciar as dependências em projetos PHP. Ele fornece uma maneira confiável de descobrir, instalar e atualizar pacotes PHP dos quais um projeto depende.

#### **Instalando o PHP e as Dependências Adicionais**

Além das dependências que já devem estar incluídas em seu sistema Ubuntu 20.04, como o `git` e o `curl`, o Composer exige o `php-cli` para executar scripts PHP na linha de comando e o `unzip` para extrair arquivos zipados. Vamos instalar essas dependências agora.

Primeiro, atualize o cache do gerenciador de pacotes executando:

`sudo apt update`

Em seguida, execute o seguinte comando para instalar os pacotes necessários:

`sudo apt install php-cli unzip`

Você será solicitado a confirmar a instalação digitando `Y` e, depois, `ENTER`.

Assim que os pré-requisitos estiverem instalados, você pode seguir para a instalação do Composer.

#### **Baixando e Instalando o Composer**

O Composer fornece um script **installer** escrito em PHP. Vamos baixá-lo, verificar se ele não está corrompido e, em seguida, o usaremos para instalar o Composer.

Certifique-se de estar em seu diretório home. Em seguida, baixe o instalador usando o `curl`:

`cd ~`
`curl -sS https://getcomposer.org/installer -o composer-setup.php`

Em seguida, vamos verificar se o instalador baixado corresponde ao hash SHA-384 para o instalador mais recente encontrado na página [Composer Public Keys / Signatures](https://composer.github.io/pubkeys.html). Para facilitar o passo de verificação, você pode utilizar o seguinte comando para obter programaticamente o hash mais recente da página do Composer e armazená-lo em uma variável de shell:

`HASH=curl -sS https://composer.github.io/installer.sig`

 Se você quiser verificar o valor obtido, execute:

`echo $HASH`

> Output
> e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a

Agora, execute o código PHP a seguir, conforme fornecido na [página de download](https://getcomposer.org/download/) do Composer, para verificar se o script de instalação está seguro para ser executado:

`php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"`

Você verá o seguinte resultado:

> Output Installer verified

Se a saída diz `Installer corrupt`, você precisará baixar o script de instalação novamente e verificar se você está usando o hash correto. Em seguida, repita o processo de verificação. Quando você tiver um instalador verificado, você pode continuar.

Para instalar o `composer` globalmente, use o seguinte comando que baixará e instalará o Composer como um comando disponível em todo o sistema chamado `composer`, sob `/usr/local/bin`:

`sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer`

Você verá um resultado parecido com este:

> Output
> All settings correct for using Composer
> Downloading...
>
> Composer (version 1.10.5) successfully installed to: /usr/local/bin/composer
> Use it: php /usr/local/bin/composer

Para testar a sua instalação, execute:

` composer`

```
Output
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 1.10.5 2020-04-10 11:44:22

Usage:
  command [options] [arguments]

Options:
  -h, --help                     Display this help message
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi                     Force ANSI output
      --no-ansi                  Disable ANSI output
  -n, --no-interaction           Do not ask any interactive question
      --profile                  Display timing and memory usage information
      --no-plugins               Whether to disable plugins.
  -d, --working-dir=WORKING-DIR  If specified, use the given directory as working directory.
      --no-cache                 Prevent use of the cache
  -v|vv|vvv, --verbose           Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
...
```

Isso verifica que o Composer foi instalado com sucesso e está disponível em todo o sistema.



Espero ter ajudado, até a próxima! :)