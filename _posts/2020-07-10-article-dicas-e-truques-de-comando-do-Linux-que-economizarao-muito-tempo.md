---
layout: post
title: 20 dicas e truques de comando do Linux que economizarão muito seu tempo
date: 2020-07-10
description: 
img: /assets/img/i-rest.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [tools, plugins]
---
Você já encontrou um momento em que viu seu colega usando alguns comandos simples do Linux para tarefas que exigiram várias teclas? E quando você viu que estava tipo, “Uau! Não sabia que poderia ter sido feito tão facilmente ”.

Neste artigo, mostrarei alguns truques profissionais de comando do Linux que economizarão muito tempo e, em alguns casos, muita frustração. Não apenas seus amigos ou colegas vão se impressionar com você, mas também o ajudarão a aumentar sua produtividade, pois você precisará de menos pressionamentos de tecla e menos cliques no mouse.

Não é que estas sejam dicas do Linux apenas para iniciantes. As chances são de que mesmo usuários experientes do Linux encontrarão algumas jóias escondidas que eles não estavam cientes, apesar de usar o Linux por todos esses anos.

De qualquer forma, você aprende Linux por experiência, seja sua ou de outra pessoa :)

### Truques de terminal Linux legal para economizar tempo e aumentar a produtividade

[![image](https://d33wubrfki0l68.cloudfront.net/be46d358565f0c141b5a311085d1392750e75705/b696b/assets/images/posts/linuxb.jpg)](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

Credit image: Jhonathan Ribeiro[](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

Você já deve conhecer algumas dessas dicas de comando do Linux ou talvez todas. Em ambos os casos, você pode compartilhar seus truques favoritos na seção de comentários.

Algumas dessas dicas também dependem de como o shell está configurado. Vamos começar!

### 0. Usando a guia para preenchimento automático

Vou começar com algo realmente óbvio e ainda muito importante:

Quando você está começando a digitar algo no terminal Linux, pode pressionar a tecla tab e ela sugere todas as opções possíveis que começam com a string digitada até o momento.

Por exemplo, se você estiver tentando copiar um arquivo chamado my_best_file_1.txt, basta digitar 'cp m' e clicar em tab para ver as opções possíveis.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/2e1015d82873d3beca1191756d5ee1752a3d0bfe/736e7/assets/images/blog/linux-command.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

### 1. Volte para o último diretório de trabalho

Suponha que você termine em um caminho de diretório longo e depois mude para outro diretório em um caminho totalmente diferente. E então você percebe que precisa voltar ao diretório anterior em que estava. Nesse caso, tudo o que você precisa fazer é digitar este comando:

cd

Isso o colocará de volta no último diretório de trabalho. Você não precisa digitar o caminho longo do diretório ou copiar e colar mais.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/b1443575c5d70756d63ac468c8899fdcb5f08115/6d638/assets/images/posts/linux-command-tricks.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

### 2. Volte ao diretório inicial

Isso é óbvio demais. Você pode usar o comando abaixo para ir para o diretório inicial de qualquer lugar da linha de comando do Linux:

cd ~

No entanto, você também pode usar apenas cd para voltar ao diretório inicial:

cd

A maioria das distribuições modernas de Linux tem o shell pré-configurado para este comando. Economiza pelo menos duas teclas aqui.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/359b45ba856f14ff3cf6567becafb65e2df2410f/9e9c0/assets/images/posts/linux-terminal-pwd-wallpapers.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

### 3. Liste o conteúdo de um diretório

Você deve estar adivinhando qual é o truque no comando para listar o conteúdo de um diretório. Todo mundo sabe usar o ls -l para esse fim.

E é isso mesmo. A maioria das pessoas usa ls -l para listar o conteúdo do diretório, enquanto o mesmo pode ser feito com o seguinte comando:

ll

Novamente, isso depende das distribuições Linux e da configuração do shell, mas é provável que você possa usá-lo na maioria das distribuições Linux.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/a76e2629db7b9d9c42ff0494a524037d95a7efc8/3a9f7/assets/images/posts/linux-terminal-ll.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

### 4. Executando vários comandos em um único comando

Suponha que você precise executar vários comandos, um após o outro. Você espera o primeiro comando concluir a execução e depois executa o próximo?

Você pode usar o ';' separador para esse fim. Dessa forma, você pode executar vários comandos em uma linha. Não há necessidade de esperar pelos comandos anteriores para concluir seus negócios.

command_1; command_2; command_3

### 5. Executando vários comandos em um único comando apenas se o comando anterior tiver sido bem-sucedido

No comando anterior, você viu como executar vários comandos em um único comando para economizar tempo. Mas e se você tiver que garantir que os comandos não falhem?

Imagine uma situação em que você deseja criar um código e, se a compilação foi bem-sucedida, execute o make?

Você pode usar o separador && para este caso. && garante que o próximo comando seja executado apenas quando o comando anterior for bem-sucedido.

command_1 && command_2

Um bom exemplo deste comando é quando você usa o sudo apt update && sudo apt upgrade para atualizar seu sistema.

### 6. Pesquise e use facilmente os comandos que você usou no passado

Imagine uma situação em que você usou um longo comando alguns minutos / horas atrás e precise usá-lo novamente. O problema é que você não consegue mais se lembrar do comando exato.

A pesquisa reversa é o seu salvador aqui. Você pode procurar o comando no histórico usando um termo de pesquisa.

Basta usar as teclas ctrl + r para iniciar a pesquisa reversa e digite alguma parte do comando. Ele pesquisará o histórico e mostrará os comandos que correspondem ao termo de pesquisa.

ctrl+r search_term

Por padrão, ele mostrará apenas um resultado. Para ver mais resultados correspondentes ao seu termo de pesquisa, você precisará usar ctrl + r novamente. Para sair da pesquisa reversa, basta usar Ctrl + C.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/b91a8eb9e9d073b3a2a3c16c4e413ccc583f2455/a8fcc/assets/images/posts/linux-terminal-clear.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

Observe que em alguns shells do Bash, você também pode usar as teclas Page Up e Down com seu termo de pesquisa e ele completará automaticamente o comando.

### 7. Descongele seu terminal Linux do Ctrl + S acidental

Você provavelmente costuma usar Ctrl + S para salvar. Mas se você usar isso no terminal Linux, terá um terminal congelado.

Não se preocupe, você não precisa fechar o terminal, não mais. Basta usar Ctrl + Q e você pode usar o terminal novamente.

ctrl+Q

### 8. Mover para o início ou o fim da linha

Suponha que você esteja digitando um comando longo e, no meio do caminho, perceba que tinha que mudar alguma coisa no início. Você usaria várias teclas de seta para a esquerda para ir para o início da linha. E da mesma forma por ir até o fim da linha.

Você pode usar as teclas Início e Fim aqui, é claro, mas, alternativamente, pode usar Ctrl + A para ir para o início da linha e Ctrl + E para ir para o final.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/910503833091932a281b48a185d27778245059c0/12e11/assets/images/posts/linux-terminal-find.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

Acho mais conveniente do que usar as teclas inicial e final, especialmente no meu laptop.

### 9. Lendo um arquivo de log em tempo real

Nas situações em que você precisa analisar os logs enquanto o aplicativo está em execução, é possível usar o comando tail com a opção -f.

tail -f path_to_Log

Você também pode usar as opções regulares de grep para exibir apenas as linhas que são significativas para você:

tail -f path_to_log | grep search_term

Você também pode usar a opção F aqui. Isso manterá a cauda em execução, mesmo que o arquivo de log seja excluído. Portanto, se o arquivo de log for criado novamente, a cauda continuará registrando.

### 10. Lendo logs compactados sem extrair

Os logs do servidor geralmente são compactados com gzip para economizar espaço em disco. Isso cria um problema para o desenvolvedor ou administrador de sistemas que analisa os logs. Pode ser necessário scp- lo para o seu local e depois extraí-lo para acessar os arquivos porque, às vezes, você não tem permissão de gravação para extrair os logs.

Felizmente, os comandos z salvam você em tais situações. Os comandos z fornecem alternativas aos comandos regulares que você usa para lidar com arquivos de log como less, cat, grep etc.

Então você obtém o zless, o zcat, o zgrep etc e nem precisa extrair explicitamente os arquivos compactados. Consulte o meu artigo anterior sobre o uso de comandos z em logs compactados reais em detalhes.

Essa foi uma das descobertas secretas que me renderam um café do meu colega.

### 11. Use menos para ler arquivos

Para ver o conteúdo de um arquivo, cat não é a melhor opção, especialmente se for um arquivo grande. O comando cat exibirá o arquivo inteiro na sua tela.

Você pode usar o Vi, Vim ou outros editores de texto baseados em terminal, mas se você quiser apenas ler um arquivo, menos comando é uma escolha muito melhor.

less path_to_file

Você pode procurar termos dentro de menos, mover por página, exibir com números de linha etc.

### 12. Reutilize o último item do comando anterior com! $

O uso do argumento do comando anterior é útil em muitas situações.

Digamos que você tenha que criar um diretório e depois entrar no diretório recém-criado. Lá você pode usar as opções! $.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/1c76801c9f83c71465f417b35538e942adcca732/e7b1e/assets/images/posts/linux-terminal-ls-toos-ls.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

Uma maneira melhor de fazer o mesmo é usar alt +. . Você pode usar . várias vezes para alternar entre as opções dos últimos comandos.

### 13. Reutilize o comando anterior no comando atual com !!

Você pode chamar o comando anterior inteiro com !!. Isso é particularmente útil quando você precisa executar um comando e perceber que ele precisa de privilégios de root.

Um sudo rápido !! economiza muitas teclas aqui.

[![Linux terminal comands image](https://d33wubrfki0l68.cloudfront.net/d883a24127be28c6156384d592eba02dc44424e1/fff0f/assets/images/posts/linux-terminal-apt-install.png)](https://jhonathanribeiro.netlify.app/loja)

[Credit Image: Jhonathan Ribeiro](https://jhonathanribeiro.netlify.app/dicas-e-truques-de-comando-do-Linux-que-economizarao-muito-tempo/)

### 14. Usando alias para corrigir erros de digitação

Você provavelmente já sabe o que é um comando de alias no Linux. O que você pode fazer é usá-los para corrigir erros de digitação.

Por exemplo, você pode digitar errado grep como gerp. Se você colocar um alias no seu bashrc desta maneira:

alias gerp=grep

Dessa forma, você não precisará digitar novamente o comando novamente.

### 15. Copie e cole no terminal Linux

Este é um pouco ambíguo porque depende das distribuições Linux e aplicativos de terminal. Mas, em geral, você deve poder copiar comandos de colar com estes atalhos:

* Selecione o texto para copiar e clique com o botão direito do mouse para colar (funciona em Putty e outros clientes SSH do Windows)
* Selecione o texto para copiar e clique no meio (botão de rolagem do mouse) para colar Ctrl + Shift + C para copiar e Ctrl + Shift + V para colar

### 16. Mate um comando / processo em execução

Este talvez seja muito óbvio. Se houver um comando em execução em primeiro plano e você quiser sair dele, pressione Ctrl + C para interromper o comando em execução.

### 17. Usando o comando yes para comandos ou scripts que precisam de resposta interativa

Se houver alguns comandos ou scripts que precisem de interação do usuário e você souber que precisa digitar Y cada vez que isso exigir uma entrada, você poderá usar o comando Sim.

Basta usá-lo da maneira abaixo:

yes | command_or_script

### 18. Esvazie um arquivo sem excluí-lo

Se você quiser apenas esvaziar o conteúdo de um arquivo de texto sem excluir o próprio arquivo, poderá usar um comando semelhante a este:

\> filename

### 19. Descubra se existem arquivos que contêm um texto específico

Existem várias maneiras de pesquisar e encontrar na linha de comando do Linux. Mas no caso em que você deseja apenas ver se há arquivos que contêm um texto específico, você pode usar este comando:

grep -Pri Search_Term path_to_directory

Eu recomendo muito o domínio do comando find.

### 20. Usando ajuda com qualquer comando

Concluirei este artigo com mais um 'truque' óbvio e ainda muito importante, usando a ajuda de um comando ou uma ferramenta de linha de comando.

Quase todas as ferramentas de linha de comando e comando vêm com uma página de ajuda que mostra como usar o comando. Geralmente, o uso da ajuda informa o uso básico da ferramenta / comando.

Basta usá-lo desta maneira:

command_tool --help

### Seus truques de linha de comando favoritos do Linux?

Eu deliberadamente não incluí comandos como [fuck](https://github.com/nvbn/thefuck), porque esses não são comandos padrão que você encontrará em todos os lugares. Os truques discutidos aqui devem ser utilizáveis ​​quase em todas as distribuições e shell do Linux, sem a necessidade de instalar uma nova ferramenta.

Eu também sugeriria usar o comando alias no Linux para substituir comandos complicados por um simples. Economiza muito tempo.

Eu sei que existem mais truques de comando do Linux para economizar tempo no terminal. Por que não compartilhar algumas de suas experiências com o Linux e compartilhar seu melhor truque com o resto da comunidade aqui? A seção de comentários abaixo está à sua disposição.


### Precisando de um site?

[Clique aqui e conheça nossos pacotes de webdesign](https://cleandesign.netlify.app/)

## Ganhe dinheiro encurtando links!

E se você pudesse receber dinheiro pelos links que você compartilha nas redes sociais? Isso é possível graças a essas gigantes abaixo, para saber mais, clica no banner abaixo, cadastre-se agora mesmo e comece a faturar encurtando os seus links. ;)

[![](https://img.cut-urls.com/r2.gif)](https://exe.io/ref/JhonathanRb)