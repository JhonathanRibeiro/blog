---
layout: post
author: Jhonathan Ribeiro
title: Listar e matar processos no Windows pelo cmd
description: Como listar o processo de uma porta em uso no windows pelo cmd e
  matar o processo usando taskkill.
date: 2021-05-09
tags: windows
img: /assets/img/fechar-programa-do-windows-via-cmd.png
link_font: "   "
font_title: " "
ogtitle: Listar e matar processos no Windows pelo cmd
ogtype: article
ogdescription: Como listar o processo de uma porta em uso no windows pelo cmd e
  matar o processo usando taskkill.
ogimage: /assets/img/fechar-programa-do-windows-via-cmd.png
twitter-creator: jhonathanrjb
twitter-card: summary
twitter-site: jhonathanrjb
---
O windows permite listar os processos de servidores que estão utilizando uma determinada porta usando um comando no cmd.

O comando para isso é o `netstat`;

Para usar o comando abra o `cmd` e digite:

`netstat -a -n`

A lista de parâmetros do comando é esta:

* \-a : exibe todas as conexões e as portas TCP e UDP.
* \-e : exibe estatísticas básicas de conexões
* \-n : exibe os números das portas ao invés do nome.
* \-o : exibe o PID (Process ID) que
* \-p protocolo: Mostra as conexões por protocolo.
* \-s : exibe estatísticas por protocolo.
* \-r : exibe a tabela de roteamento interna.
* \-b : exibe o programa associado com a porta (precisa elevar privilégios).

Para localizar o processo de uma determinada porta use o comando:

`netstat -a -n -o | findstr <porta>`

> Altere o `<porta>` para a porta que deseja localizar.

Por exemplo para listar o processo da porta 8080, digite:

`netstat -a -n -o | findstr 8080`

### Matar o processo do serviço

Para matar o processo do serviço pode ser utilizado o comando `Taskkill`.

Seguindo o exemplo acima, digite:

`Taskkill /PID <pid> /F`

> Alterar o `<pid>` pelo número do PID que foi encontrado na listagem do comando do `netstat`.

Pronto, esta é a forma mais simples de matar o processo de um serviço que roda em determinada porta.

Não esqueca de deixar suas dúvidas nos comentários e compartilhar este post.