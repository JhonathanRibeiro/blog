---
layout: post
author: Jhonathan Ribeiro
title: Como criar um novo projeto Laravel 8
description: Olá pessoal, Hoje vamos criar um projeto laravel do zero. Antes
  disso, você deve instalar o gerenciador de pacotes Composer para trabalhar com
  o laravel. Caso você não tenha o Composer instalado em sua máquina, não se
  preocupe, leia os posts nos links a seguir, conforme o seu sistema operacional
  e em seguida você poderá retornar e dar continuidade no seu aprendizado.
date: 2021-03-31
tags: Laravel
img: /assets/img/laravel8.jpg
link_font: " "
font_title: " "
ogtitle: Como criar um novo projeto Laravel 8
ogtype: article
ogdescription: Olá pessoal, Hoje vamos criar um projeto laravel do zero. Antes
  disso, você deve instalar o gerenciador de pacotes Composer para trabalhar com
  o laravel. Caso você não tenha o Composer instalado em sua máquina, não se
  preocupe, leia os posts nos links a seguir, conforme o seu sistema operacional
  e em seguida você poderá retornar e dar continuidade no seu aprendizado.
ogimage: /assets/img/laravel8.jpg
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
Olá pessoal, Hoje vamos criar um projeto laravel do zero. Antes disso, você deve instalar o gerenciador de pacotes Composer para trabalhar com o laravel. Caso você não tenha o Composer instalado em sua máquina, não se preocupe, leia os posts nos links a seguir, conforme o seu sistema operacional e em seguida você poderá retornar e dar continuidade no seu aprendizado.

#### Instalando o Composer:

1. [Como instalar o Composer no Windows;](https://jhonathanribeiro.netlify.app/como-instalar-o-composer-no-windows/)
2. [Como instalar o Composer no Linux;](https://jhonathanribeiro.netlify.app/como-instalar-o-composer-no-linux/)
3. [Como instalar o Composer no MacOS.](https://jhonathanribeiro.netlify.app/como-instalar-o-composer-no-macos/)

#### **Então, como criar um projeto Laravel.**

Bom, existem duas maneiras de criar um projeto em laravel.

1. Via Laravel Installer 
2. Via Laravel Composer

Vamos criar o nosso projeto Laravel de ambas as maneiras, mas antes, certifique-se de ter o composer instalado em sua máquina. Para verificar se existe ou não, abra o terminal de sua preferência e execute os comandos abaixo:

`composer --version`

Instale o instalador do Laravel executando

`composer global require laravel/installer`

Verifique se o instalador do Laravel está instalado ou não

`laravel --version`

## A saída deve se parecer com isso:![](https://lh4.googleusercontent.com/1j48nFm5lrknJzpwWsFnq3YivLXqvzjgKsJfCbJKy-wSbz46_ZUR7YpeACACQPT6KXVPp9jCQa2Qdg9ZRYXm-jixC7bsZVOb-JF6ZK3esjsGyL2dV8UjyuA-6P5-K_DsUN9vF_kL)

OBS: A versão que você está vendo neste momento não se refere a versão do laravel e sim do seu instalador.

Nesta etapa, iremos criar o projeto laravel em seu sistema local, para isto, digite o seguinte comando composer em seu terminal. 

 `composer create-project --prefer-dist laravel/laravel blog`

 Neste exemplo estou utilizando o nome do projeto como blog, mas você poderá alterar com o nome de sua preferência. 

Após executar o comando acima, a saída no seu terminal deve se parecer com isto:![](https://lh3.googleusercontent.com/NWf-6AXKf4B5DsoEqUZOYOcsXsaEVVFve4esrRbmG6moOQVTwcMw8aAONAD67-9Ibo-dnSaTRxPaunoYOnY9pVuwINiTtEbMI5baXsHPxyuQcxRVf5yAQCay8WJ_fQ5Jh6ohkQeW)

Dependendo da sua conexão com a internet esta etapa de criação pode demorar um pouco, e por fim seu novo projeto estará criado.

Para verificar se o seu projeto foi instalado corretamente, em seu terminal, acesse a pasta do projeto, no nosso caso blog

`  cd blog     `

Agora, estando dentro da raiz do projeto, digite o seguinte comando:

 ` php artisan serve`

Isto irá gerar um servidor local na porta 8000, agora é só acessar o seu navegador com a url, <http://localhost:8000/>

A saída deverá se parecer com isto:![](https://lh4.googleusercontent.com/VPmGkTdSLLJxd5EAsyrRWh986aMb9KzTwuyNGeLQkKli1CyIYQhtH1RgQSN_czb9MQl4WZbEKjy5-OIbLNtRMFV6MomwzUfvHotc_u5RgJOZ91bA8FeNIpcWWkKPfAdW_FvwouAW)

 

Obrigado por ler até aqui, até a próxima! :)