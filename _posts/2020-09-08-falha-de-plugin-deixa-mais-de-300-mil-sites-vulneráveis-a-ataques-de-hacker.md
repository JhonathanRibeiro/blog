---
layout: post
author: Jhonathan Ribeiro
title: Falha de plugin deixa mais de 300 mil sites vulneráveis a ataques de hacker
description: Bugs de desvio de autenticação em plug-ins do WordPress InfiniteWP
  Client e WP Time Capsule deixam centenas de milhares de sites abertos a
  ataques.
date: 2020-09-08
tags: Vulnerabilidade Hacker Bugs
img: /assets/img/falha-de-plugin-deixa-sites-vulneráveis-a-ataques-de-hacker.png
link_font: https://www.webarxsecurity.com/vulnerability-infinitewp-client-wp-time-capsule/
font_title: WebARX Security
ogtitle: Falha de plugin deixa mais de 300 mil sites vulneráveis a ataques de hacker
ogtype: article
ogdescription: Bugs de desvio de autenticação em plug-ins do WordPress
  InfiniteWP Client e WP Time Capsule deixam centenas de milhares de sites
  abertos a ataques.
ogimage: /assets/img/falha-de-plugin-deixa-sites-vulneráveis-a-ataques-de-hacker.png
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
Bugs de desvio de autenticação em plug-ins do WordPress **InfiniteWP** Client e **WP Time Capsule** deixam centenas de milhares de sites abertos a ataques.

Dois plug-ins do WordPress, InfiniteWP Client e WP Time Capsule, sofrem do mesmo bug crítico de desvio de autorização que permite que adversários acessem o back-end de um site sem senha.

Tudo o que um invasor precisa é o nome de usuário de administrador para os plug-ins do WordPress e eles estão dentro, de acordo com pesquisadores da WebArx que criaram ataques de prova de conceito para explorar a vulnerabilidade.

“\[Ambos] contêm problemas lógicos no código que permitem que você faça o login em uma conta de administrador sem uma senha”, escreveu [WebArx em um post de blog que](https://www.webarxsecurity.com/vulnerability-infinitewp-client-wp-time-capsule/) descreve a descoberta na quarta-feira.

De acordo com a biblioteca de plug-ins do WordPress, 300.000 sites estão executando uma versão do plug-in InfiniteWP Client vulnerável. O plugin WP Time Capsule está ativo em 20.000 sites, de acordo com as contagens da biblioteca.

Ambos os plug-ins são projetados para permitir que os usuários se autentiquem em várias instalações do WordPress a partir de um servidor central. Isso permite que os proprietários de sites “realizem manutenção, como atualizações de um clique para o núcleo, plug-ins e temas em todos os sites, backup e restauração de sites, e ativação / desativação de plug-ins e temas em vários sites simultaneamente”, de acordo [com uma descrição do WordFence](https://www.wordfence.com/blog/2020/01/critical-authentication-bypass-vulnerability-in-infinitewp-client-plugin/) .

As vulnerabilidades foram relatadas pela primeira vez em 7 de janeiro de 2020. No dia seguinte, os desenvolvedores lançaram novas versões dos plug-ins. Na terça-feira, a WebArx divulgou publicamente os bugs.

## O bug do cliente InfiniteWP

As versões do plugin InfiniteWP Client abaixo de 1.9.4.5 são afetadas especificamente, disse o WebArx. A prova de conceito é simples, dando ao bug uma classificação do Common Vulnerability Scoring System ( [CVSS](https://nvd.nist.gov/vuln-metrics/cvss) ) de 9,8, ou crítica.

O ataque de prova de conceito requer primeiro uma carga codificada com JSON e, em seguida, Base64. Em seguida, ele é enviado bruto para o site de destino em uma solicitação POST.

“O problema reside na função iwp_mmb_set_request que está localizada no arquivo init.php. Esta função verifica se a variável request_params da classe IWP_MMB_Core não está vazia, que só é preenchida quando a carga útil atende a certas condições ”, explica WebArx.

“Nesse caso, a condição é que o parâmetro iwp_action da carga útil seja igual a readd_site ou add_site, pois são as únicas ações que não possuem uma verificação de autorização em vigor. A falta de verificação de autorização é a razão pela qual esse problema existe ”, escreveram os pesquisadores.

Em seguida, WebArx disse, o nome de usuário fornecido pelo invasor será usado para fazer o login como o usuário, sem realizar qualquer autenticação adicional. Sem senha, sem problema.

## Bug WP Time Capsule

Quanto ao WP Time Capsule, os pesquisadores identificaram as versões abaixo de 1.21.16 como vulneráveis.

Quanto ao plug-in WP Time Capsule, sua carga pode ser mais simples e só precisa conter uma determinada string no corpo da solicitação POST bruta, disse o pesquisador.

“O problema está localizado na linha 12 wptc-cron-functions.php, onde ele analisa a solicitação. A função parse_request chama a função decode_server_request_wptc que verifica se a carga útil POST bruta contém a string 'IWP_JSON_PREFIX' ”, escreveram os pesquisadores.

A versão curta do exploit é; “Se \[a solicitação] contiver essa string, ela chamará wptc_login_as_admin (que obtém todas as contas de administrador disponíveis e usa a primeira conta da lista) e você será conectado como administrador.”

## Mitigação

O WebArx também alerta que os firewalls podem dar aos usuários uma falsa sensação de segurança no que diz respeito a esta vulnerabilidade.

“Como as vulnerabilidades de desvio de autenticação costumam ser erros lógicos no código e não envolvem realmente uma carga útil de aparência suspeita, pode ser difícil encontrar e determinar de onde vêm esses problemas”, disseram eles.

Eles adicionaram porque a carga útil é codificada pode ser difícil distingui-la de uma carga útil legítima.

“Devido à natureza da vulnerabilidade, os firewalls baseados em nuvem podem não ser capazes de fazer a diferença entre o tráfego malicioso ou legítimo e, portanto, podem falhar em fornecer proteção eficaz contra essa vulnerabilidade”, escreveram eles.

Como alternativa, corrigir o problema simplesmente requer a atualização de ambas as versões de software dos plug-ins ( [Cliente InfiniteWP](https://wordpress.org/plugins/iwp-client/) e [WP Time Capsule](https://wordpress.org/plugins/wp-time-capsule/) ).