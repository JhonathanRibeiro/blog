---
layout: post
author: Jhonathan Ribeiro
title: O que é um SGBD?
description: Em muitos sistemas informatizados é necessário armazenar
  informações em bancos de dados, podemos constatar isso observando que nas
  últimas décadas o banco de dados se tornou o coração de muitos sistemas.
date: 2021-05-04
tags: SGBD
img: /assets/img/sgbd.jpg
link_font: " "
font_title: " "
ogtitle: O que é um SGBD?
ogtype: article
ogdescription: Em muitos sistemas informatizados é necessário armazenar
  informações em bancos de dados, podemos constatar isso observando que nas
  últimas décadas o banco de dados se tornou o coração de muitos sistemas.
ogimage: /assets/img/sgbd.jpg
twitter-creator: jhonathanjbr
twitter-card: summary
twitter-site: jhonathanjbr
---
Em muitos sistemas informatizados é necessário armazenar informações em [bancos de dados](http://www.dicasdeprogramacao.com.br/o-que-e-um-banco-de-dados/), podemos constatar isso observando que nas últimas décadas o banco de dados se tornou o coração de muitos sistemas.

A informação é muitas vezes a coisa mais valiosa das empresas, mantê-las e poder acessá-las sempre que necessário é primordial para tomar decisões importantes. Mas controlar o acesso a essas informações também é importantíssimo. Já pensou se elas caíssem em mãos erradas? E a perda de informações? Já imaginou se estragasse o HD do servidor onde está o banco de dados? Backup é uma forma de garantir que informações não serão perdidas.

Enfim, já deu para perceber que a gerência de um banco de dados não é uma coisa a se deixar de lado, pois uma empresa pode depender dele, ou seja, pode ajudar a empresa a ter sucesso, mas também pode levá-la ao fracasso. Para garantir a consistência dos dados, controlar o acesso, manter os dados seguros, fornecer meios de acesso aos dados, ... foram criados os Sistemas de Gerenciamento de Bancos de Dados, ou **SGBD** (DBMS em inglês DataBase Management System).

## A DEFINIÇÃO DE SGBD

> “Um Sistema de Gerenciamento de Banco de Dados (SGBD) – do inglês Data Base Management System (DBMS) – é o conjunto de programas de computador (softwares) responsáveis pelo gerenciamento de uma base de dados. Seu principal objetivo é retirar da aplicação cliente a responsabilidade de gerenciar o acesso, a manipulação e a organização dos dados. O SGBD disponibiliza uma interface para que seus clientes possam incluir, alterar ou consultar dados previamente armazenados. Em bancos de dados relacionais a interface é constituída pelas APIs (Application Programming Interface) ou drivers do SGBD, que executam comandos na linguagem SQL (Structured Query Language).”

![database-organograma](https://dicasdeprogramacao.com.br/images/o-que-e-um-sgbd/database-organograma.jpg)

Tudo que fazemos em um banco de dados passa pelo SGBD! O SGBD é responsável por tudo, salvar os dados no HD, manter em memória os dados mais acessados, ligar dados e metadados, disponibilizar uma interface para programas e usuários externos acessem o banco de dados (para banco de dados relacionais, é utilizada a linguagem SQL), encriptar dados, controlar o acesso a informações, manter cópias dos dados para recuperação de uma possível falha, garantir transações no banco de dados, enfim, sem o SGBD o banco de dados não funciona!

É comum as pessoas chamarem um SGBD de banco de dados, por exemplo: banco de dados Oracle, banco de dados MySQL, banco de dados SQL Server, etc. Na verdade esses são os SGBDs, banco de dados é o que eles oferecem, o correto é chamá-los de: SGBD Oracle, SGBD MySQL, SGBD SQL Server, etc. Cada um implementa um banco de dados (ou vários) de uma maneira diferente, mas para o usuário isso é quase transparente, pois a linguagem de acesso aos dados é a mesma, o SQL.

Agora você já sabe, pra acessar um banco de dados você precisa usar um SGBD.



Espero que este post tenha te ajudado.

Se ficou com alguma dúvida, fique à vontade para comentar aqui abaixo.