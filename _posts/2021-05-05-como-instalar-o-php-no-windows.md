---
layout: post
author: Jhonathan Ribeiro
title: "Como instalar o PHP no Windows "
description: "Muitas vezes procuramos ferramentas que vão facilitar a
  configuração do ambiente de desenvolvimento, mas temos que tomar o devido
  cuidado para que não fiquemos presos nestas ferramentas de modo que não
  saibamos a trabalhar em outro ambiente. "
date: 2021-05-05
tags: PHP
img: /assets/img/php.jpg
link_font: " "
font_title: " "
ogtitle: "Como instalar o PHP no Windows "
ogtype: article
ogdescription: "Muitas vezes procuramos ferramentas que vão facilitar a
  configuração do ambiente de desenvolvimento, mas temos que tomar o devido
  cuidado para que não fiquemos presos nestas ferramentas de modo que não
  saibamos a trabalhar em outro ambiente. "
ogimage: /assets/img/php.jpg
twitter-creator: jhonathanjbr
twitter-card: summary
twitter-site: jhonathanjbr
---
Muitas vezes procuramos ferramentas que vão facilitar a configuração do ambiente de desenvolvimento, mas temos que tomar o devido cuidado para que não fiquemos presos nestas ferramentas de modo que não saibamos a trabalhar em outro ambiente. 

No Windows, há uma série ambientações prontas, programas que já configuram tudo pra gente em muitos assuntos. Os usuários menos avançados sofrem uma coerção a ficarem preguiçosos nas tarefas que fazem. Nada contra o Windows e estes ambientadores de desenvolvimento PHP, mas, o desenvolvedor tem que desapegar e ser mais flexível.

O desenvolvedor PHP no Windows precisa no mínimo saber usar o PHP instalado do zero, até mesmo porque a partir da versão 5.4, o PHP vem com um fantástico servidor embutido que nos permite executar uma aplicação rapidamente usando o terminal.

**Qual é a ideia?**

Pegar o PHP diretamente do site [php.net](https://php.net/) e configurar manualmente no Windows e mostrar o uso do servidor embutido para executar scripts, aplicações ou qualquer coisa que seja PHP.

**O que faremos?**

1. Fazer download do PHP e configura-lo no Windows
2. Usar o servidor embutido do PHP.
3. Considerações finais.

**Passos**

1. **Fazer o download do PHP e configura-lo no Windows.**

Acesse [http://php.net/downloads.php](https://php.net/downloads.php) e faça o download do PHP para o Windows. Você pode fazer o download da versão que quiser desde que seja maior que a 5.4 (dê preferência para Thread Safety). Sugiro fazer o download da versão 7.1 ou superior, pois a versão 5 tem seu suporte finalizado em 18 de dezembro de 2018.

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/php_net-1.png)

Escolha a plataforma do PHP em relação ao seu computador, x86 ou x64. (Dica: Se no seu Windows tiver uma pasta Arquivos de Programas e Arquivos de Programas (x86), seu Windows é x64).

Outro detalhe importante é escolher entre as versões *Thread Safe(TS)* ou *Non Thread Safe(NTS)*. Isso diz respeito a questões internas do PHP, mas para desenvolvimento escolha a *Non Thread Safe(NTS)*. ![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/php_7_3-1.png)

Após o download, descompacte o arquivo *.zip* na partição principal do seu computador (normalmente C:) e renomeie a pasta para simplesmente *php*. Veja:

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/php-em-c-1024x441.jpg)

Faça a instalação do Microsoft Visual C++ (o PHP precisa dele para ser executado na máquina). Observe que em cada versão do PHP disponível para download, existe um *VC11 ou VC14 ou V15*… Isto indica qual versão do Microsoft Visual C++ deve ser instalado. O link de download está logo à esquerda.

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/visual_c_php.png)

Para o PHP funcionar corretamente, precisamos ativar suas configurações padrões. Dentro da pasta descompactada no C:, temos vários arquivos, o executável do PHP (php.exe) e dois arquivos de configurações: *php.ini-development* e *php.ini-production*. Estes dois arquivos apresentam configurações para rodar o PHP em modo de produção (mais adequado quando se hospeda uma aplicação em um servidor na internet) ou em modo desenvolvimento que é adequado para se desenvolver aplicações PHP, pois com isso ativamos o controle de erros e debug da aplicação. Portanto, renomeie o arquivo *php.ini-development* para somente *php.ini.* O executável do PHP sempre carregará as configurações do arquivo *php.ini*.

Temos que configurar o PHP para funcionar em qualquer momento no terminal.

Abra o *Painel de Controle*, vá em *Sistema*, selecione a guia *Avançado,* depois clique em *Variáveis de ambiente* no rodapé da janela. Na seção *Variáveis do sistema*, selecione *Path*, agora clique em Editar, em *Valor da variável*, vá até o final do campo de texto, agora iremos colocar o caminho onde o nosso PHP está, acrescente antes um ; (ponto e vírgula) para finalizar os caminhos anteriores e coloque *c:\php*, então, ficará assim: *….;c:\php.* Confirme tudo e o PHP está configurado.

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/variavel-de-ambiente.jpg)

Agora temos que configurar o arquivo de *hosts* para apontar o nome *localhost* para *127.0.0.1*.

Abra o menu iniciar e selecione seu editor de texto com o botão direito do mouse e clique em *Executar como administrador*. No menu *Abrir* e siga o caminho C*:\Windows\System32\drivers\etc*. Abra o arquivo *hosts*, se ele não aparecer, selecione *Todos os arquivos* para ele ser mostrado na janela.

Agora verifique se existe a linha *127.0.0.1 localhost*, se existir está pronto, senão acrescente-a ao final do arquivo, salve e feche o programa.

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/hosts.jpg)

Reinicie sua máquina.

Agora olhe para tudo isso, foi difícil?

2. **Usar o servidor embutido do PHP.**

Abra o terminal de sua preferência e digite:

```
php --version
```

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/php-version.png)

Se logo em seguida você ver uma mensagem com a versão do PHP instalada então ocorreu tudo bem.

Até a versão do PHP 5.3 tínhamos que ter um servidor web (Apache, Nginx, etc) a parte instalado para rodar aplicações no browser, mas, a partir da versão 5.4 foi introduzido um servidor embutido no PHP. Assim, podemos iniciar um servidor a qualquer momento e em qualquer pasta, e ainda ter múltiplos servidores rodando simultaneamente em portas diferentes. Isto para o desenvolvimento é uma “mão na roda”.

Para iniciar o servidor embutido, na raiz de qualquer pasta de seu projeto PHP, faça:

```
php -S localhost:8080
```

![](https://blog.schoolofnet.com/wp-content/uploads/2015/04/php_built_in_server.png)

Só isto já iniciará o servidor embutido no projeto, aí é só acessar no browser *localhost:8080/index.php* e sua aplicação será renderizada! Então, para usar o servidor embutido é só digitar no terminal: php -S localhost:(porta que esteja livre: 8080,8081,9999,etc).

**Considerações Finais**

Depois deste tutorial, espero ter sido claro sobre a importância de saber trabalhar com diferentes configurações de ambientes de desenvolvimento PHP, em diferentes sistemas operacionais, principalmente no Windows e que não é necessário ficar preso aos “amps” da vida para trabalhar com PHP. Perca o medo de “meter a mão na massa”. A configuração que fizemos foi simples, e se tornará mais simples ainda com um pouco de costume. Isto só trará maturidade profissional e mais conhecimento não só em PHP como em TI de modo geral.