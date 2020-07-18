---
layout: post
author: Jhonathan Ribeiro
title: " Acesso remoto em risco: a pandemia atrai mais cibercriminosos para o
  jogo da força bruta"
description: O acesso remoto mal protegido atrai principalmente grupos de
  ransomware, mas também pode fornecer acesso a mineradores de moedas e
  backdoors
date: 2020-07-17
tags: Ciberataque Segurança Hacker
img: /assets/img/remote-access-risk-pandemic-brute‑forcing.jpg
link_font: " "
font_title: " "
ogtitle: " Acesso remoto em risco: a pandemia atrai mais cibercriminosos para o
  jogo da força bruta"
ogtype: article
ogdescription: O acesso remoto mal protegido atrai principalmente grupos de
  ransomware, mas também pode fornecer acesso a mineradores de moedas e
  backdoors
ogimage: /assets/img/remote-access-risk-pandemic-brute‑forcing.jpg
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
A pandemia do COVID-19 mudou radicalmente a natureza do trabalho cotidiano, forçando os funcionários a realizar grande parte de seus trabalhos por acesso remoto. Os cibercriminosos - especialmente os operadores de ransomware - estão cientes da mudança e tentam explorar as novas oportunidades e aumentar seus ganhos ilícitos. A telemetria da ESET confirma essa tendência em um aumento no número de clientes únicos que relataram tentativas de ataque de força bruta bloqueadas pela tecnologia de detecção de ataque de rede da ESET.

Antes do bloqueio, a maioria dos funcionários trabalhava no escritório e usava a infraestrutura monitorada e controlada pelo departamento de TI. Mas a pandemia de coronavírus trouxe uma grande mudança para o status quo. Hoje, uma grande proporção do trabalho de "escritório" ocorre por meio de dispositivos domésticos com trabalhadores acessando sistemas sensíveis da empresa por meio do RDP (Remote Desktop Protocol) do Windows - uma solução proprietária criada pela Microsoft para permitir a conexão à rede corporativa a partir de computadores remotos.

Apesar da crescente importância do RDP (assim como de outros serviços de acesso remoto), as organizações geralmente negligenciam suas configurações e proteção. Os funcionários usam senhas fáceis de adivinhar e sem camadas adicionais de autenticação ou proteção, há pouco que pode impedir que os cibercriminosos comprometam os sistemas de uma organização.

Essa é provavelmente também a razão pela qual o RDP se tornou um vetor de ataque tão popular nos últimos anos, especialmente entre as gangues de ransomware. Esses cibercriminosos geralmente abrem caminho para uma rede mal protegida, elevam seus direitos ao nível de administrador, desabilitam ou desinstalam soluções de segurança e, em seguida, executam ransomware para criptografar dados cruciais da empresa.

O crescente número de clientes únicos que relataram uma tentativa de ataque RDP é visível nos dados coletados pela telemetria da ESET (consulte a Figura 1).

[![](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-1.-Remote-access-at-risk-COVID-19-brute-force-attacks-150x150.png)](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-1.-Remote-access-at-risk-COVID-19-brute-force-attacks.png)

*Figura 1. Tendência das tentativas de ataque RDP contra clientes únicos (por dia), detectados pelas tecnologias ESET*

## Proteção contra ataque de força bruta

Para lidar com os crescentes riscos decorrentes do aumento do uso de RDP, os pesquisadores da ESET criaram uma nova camada de detecção oculta sob o capô do ESET Network Attack Protection e foi projetada para bloquear ataques de força bruta de entrada de endereços IP externos, cobrindo o RDP e também Protocolos SMB.

Chamada de Proteção contra ataque de força bruta da ESET, essa nova camada detecta grupos de tentativas de login com falha de ambientes externos, que sugerem um ataque de força bruta de entrada e bloqueiam outras tentativas. Posteriormente, os maiores infratores entre esses endereços IP são adicionados a uma lista negra, que protege milhões de dispositivos de futuros ataques.

A nova tecnologia provou ser eficaz contra ataques aleatórios e direcionados. Para que funcione corretamente, a opção RDP **Network Level Authentication (NLA) no servidor deve estar ativada.**

De acordo com a telemetria da ESET, a maioria dos IPs *bloqueados de* janeiro a maio de 2020 foi observada nos Estados Unidos, China, Rússia, Alemanha e França (veja a Figura 2).

[![](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-2.-Remote-access-at-risk-COVID-19-brute-force-attacks-150x150.png)](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-2.-Remote-access-at-risk-COVID-19-brute-force-attacks.png)

*Figura 2. Países com o maior número de todos os endereços IP bloqueados (entre 1 de janeiro e 31 de maio de 2020).*

Os países que tiveram a maior proporção de PIs *direcionados* foram Rússia, Alemanha, Japão, Brasil e Hungria (ver Figura 3).

[![](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-3.-Remote-access-at-risk-COVID-19-brute-force-attacks-150x150.png)](https://www.welivesecurity.com/wp-content/uploads/2020/06/Figure-3.-Remote-access-at-risk-COVID-19-brute-force-attacks.png)

*Figura 3. Países com os ataques de força bruta mais relatados pela telemetria da ESET (entre 1º de janeiro e 31 de maio de 2020).*

## Como configurar o acesso remoto corretamente

No entanto, mesmo com medidas de proteção como a ESET Brute-Force Attack Protection, as organizações precisam manter seu acesso remoto configurado corretamente:

* Desative o RDP voltado para a Internet. Se isso não for possível, minimize o número de usuários com permissão para se conectar diretamente aos servidores da organização *pela Internet.*
* Exija senhas fortes e complexas para todas as contas que podem ser conectadas via RDP.
* Use uma camada adicional de autenticação ( [MFA / 2FA](https://www.welivesecurity.com/2020/03/19/work-home-improve-security-mfa/) ).
* Instale um gateway de rede virtual privada ( [VPN](https://www.welivesecurity.com/2020/03/18/work-home-how-set-up-vpn/) ) para intermediar todas as conexões RDP de fora da rede local.
* No firewall de perímetro, não permita conexões externas a máquinas locais na porta 3389 (TCP / UDP) ou qualquer outra porta RDP.
* Proteja seu software de segurança do nó de extremidade contra adulteração ou desinstalação protegendo suas configurações com senha.
* Isole qualquer computador inseguro ou desatualizado que precise ser acessado da Internet usando o RDP e substitua-o o mais rápido possível.
* Para uma descrição detalhada de como configurar sua conexão RDP corretamente, consulte [este artigo](https://www.welivesecurity.com/2019/12/17/bluekeep-time-disconnect-rdp-internet/) do Pesquisador Distinto da ESET, Aryeh Goretsky.
* A maioria dessas práticas recomendadas também se aplica a FTP, SMB, SSH, SQL, TeamViewer, VNC e outros serviços.

## Ransomware, mineradores de moedas e backdoors

A criptografia de dados e a extorsão subsequente não são de forma alguma o único cenário que pode seguir um compromisso de RDP. Freqüentemente, os invasores tentam instalar malware de mineração de moedas ou criar um backdoor, que pode ser usado caso o acesso não autorizado ao RDP seja identificado e fechado.

Outros cenários comuns após um compromisso de RDP podem incluir:

* limpeza de arquivos de log, removendo assim as evidências de atividades maliciosas anteriores,
* baixar e executar a escolha de ferramentas e malware do invasor no sistema comprometido,
* desativar backups agendados e cópias de sombra ou apagá-los completamente, ou
* exfiltrando dados do servidor.

Os chapéus pretos tentam explorar o RDP há anos, conforme documentado em [nosso blog de 2013](https://www.welivesecurity.com/2013/09/16/remote-desktop-rdp-hacking-101-i-can-see-your-desktop-from-here/) . Um número cada vez maior de ataques RDP ao longo dos últimos anos tornou-se objeto de vários conselhos governamentais, incluindo o [FBI](https://www.ic3.gov/media/2018/180927.aspx) , o [NCSC](https://www.ncsc.gov.uk/guidance/protecting-your-organisation-ransomware) do Reino Unido e o [ACSC](https://www.cyber.gov.au/news/patch-to-protect-your-business) da Austrália .

Isso demonstra apenas o quão crucial a segurança do acesso remoto se tornou, potencialmente criando ou prejudicando o futuro de uma empresa. E mesmo que o dano à reputação de uma organização possa ser gerenciado, há perdas financeiras, operações paralisadas e esforços de recuperação dispendiosos que precisam ser contabilizados. Isso não considera os custos adicionais de possíveis multas que podem ser emitidas pelas autoridades sob a legislação de proteção de dados, como GDPR (UE), CCPA (Califórnia) ou NDB (Austrália).

Independentemente de haver uma pandemia, as empresas devem gerenciar os riscos causados ​​pelo amplo uso de RDP ou outros serviços similares, reforçando suas senhas e adicionando outras camadas de proteção, incluindo autenticação multifatorial e uma solução de segurança que se defende contra ataques baseados em RDP e protocolos semelhantes.