---
layout: post
author: Jhonathan Ribeiro
title: Instalando o Nodejs usando o gerenciador de versões do Node
description: "Uma forma particularmente flexível de instalar o Node.js é por
  meio do nvm, o gerenciador de versões do Node. "
date: 2020-11-21
tags: nodejs
img: /assets/img/imagem-instalando-nodejs-via-nvm-no-linux-ubuntu.jpeg
link_font: " "
font_title: " "
ogtitle: Instalando o Nodejs usando o gerenciador de versões do Node
ogtype: article
ogdescription: "Uma forma particularmente flexível de instalar o Node.js é por
  meio do nvm, o gerenciador de versões do Node. "
ogimage: /assets/img/imagem-instalando-nodejs-via-nvm-no-linux-ubuntu.jpeg
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
Uma forma particularmente flexível de instalar o Node.js é por meio do nvm, o gerenciador de versões do Node. Este software permite que você instale e mantenha várias versões diferentes e independentes do Node.js, além dos pacotes Node associados a eles. Neste artigo irei mostrar como instalar o gerenciador de versões do Node no linux Ubuntu 20.04.

Para instalar o NVM em sua máquina Ubuntu, visite [a página do GitHub do projeto](https://github.com/nvm-sh/nvm). Copie o comando `curl` do arquivo README, mostrado na página principal. Isso dará a você a versão mais recente do script de instalação.

Antes de passar o comando para o `bash`, sempre é uma boa ideia verificar o script, para garantir que ele não fará nada que você não concorde. Faça isso removendo o segmento  `| bash`  no final do comando  `curl`:

```gitattributes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
```

Dê uma olhada e certifique-se de que esteja confortável com as alterações que ele está fazendo. Quando estiver satisfeito, execute o comando novamente com o `| bash` anexado no final. A URL que usar mudará dependendo da versão mais recente do NVM, mas, agora, o script pode ser baixado e executado digitando:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Isso instalará o script  `nvm`  em sua conta de usuário. Para usá-lo, você deve antes gerar seu arquivo `.bashrc`:

```
source ~/.bashrc
```

Agora, pergunte ao NVM quais versões do Node estão disponíveis:

```
nvm list-remote
Output
. . .
       v12.13.0   (LTS: Erbium)
       v12.13.1   (LTS: Erbium)
       v12.14.0   (LTS: Erbium)
       v12.14.1   (LTS: Erbium)
       v12.15.0   (LTS: Erbium)
       v12.16.0   (LTS: Erbium)
       v12.16.1   (LTS: Erbium)
       v12.16.2   (LTS: Erbium)
       v12.16.3   (Latest LTS: Erbium)
        v13.0.0
        v13.0.1
        v13.1.0
        v13.2.0
        v13.3.0
        v13.4.0
        v13.5.0
        v13.6.0
        v13.7.0
        v13.8.0
        v13.9.0
       v13.10.0
       v13.10.1
       v13.11.0
       v13.12.0
       v13.13.0
       v13.14.0
        v14.0.0
        v14.1.0
        v14.2.0
```

É uma lista muito longa! Instale uma versão do Node digitando qualquer uma das versões que estiver vendo. Por exemplo, para obter a versão v13.6.0, digite:

```
nvm install v13.6.0
```

Veja as diferentes versões que instalou digitando:

```
nvm list
Output
->      v13.6.0
default -> v13.6.0
node -> stable (-> v13.6.0) (default)
stable -> 13.6 (-> v13.6.0) (default)
. . .
```

Isso mostra a versão atualmente ativa na primeira linha (`-> v13.6.0`), seguida por alguns aliases denominados e as versões para as quais esses aliases apontam.

**Nota:** se você também tiver uma versão do Node.js instalada pelo `apt`, você pode ver uma entrada de `system` (sistema) aqui. Sempre que quiser, você pode ativar a versão instalada de sistema do Node usando `nvm use system`.

Além disso, você verá aliases para os vários [lançamentos de suporte a longo prazo (ou LTS) do Node](https://nodejs.org/en/about/releases/):

```
Output
. . .
lts/* -> lts/erbium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.20.1 (-> N/A)
lts/erbium -> v12.16.3 (-> N/A)
```

Também podemos instalar uma versão baseada nestes aliases. Por exemplo, para instalar a `erbium`, a versão de suporte de longo prazo mais recente, execute o seguinte:

```
nvm install lts/erbium
Output
Downloading and installing node v12.16.3...
. . .
Now using node v12.16.3 (npm v6.14.4)
```

Você pode alternar as versões instaladas com o `nvm use`:

```
nvm use v13.6.0
Now using node v13.6.0 (npm v6.13.4)
```

Verifique se a instalação foi bem-sucedida usando a mesma técnica das outras seções, digitando:

```
node -v
Output
v13.6.0
```

A versão correta do Node está instalada em sua máquina, como esperávamos. Uma versão compatível do  `npm`  também está disponível.

## [](<>)Conclusão

Há várias maneiras de instalar e executar o Node.js em seu servidor Ubuntu 20.04. Suas circunstâncias irão ditar qual dos métodos acima são melhores para suas necessidades. Ao mesmo tempo que usar a versão de pacotes no repositório do Ubuntu é o método mais fácil, utilizar o  `nvm`  ou um NodeSource PPA oferece uma flexibilidade adicional.