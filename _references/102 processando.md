---
title: 102 PROCESSANDO
ariaLabelId: http102
dataTargetId: idhttp102
---
Uma resposta provisória usada para informar ao cliente que o servidor aceitou a solicitação completa, mas ainda não a concluiu.

Este código de status DEVE ser enviado apenas quando o servidor tiver uma expectativa razoável de que a solicitação levará um tempo significativo para ser concluída. Como orientação, se um método está levando mais de 20 segundos (um valor razoável, mas arbitrário) para processar, o servidor DEVE retornar uma resposta 102 (Processamento). O servidor DEVE enviar uma resposta final após a conclusão da solicitação.

Os métodos podem levar potencialmente um longo período de tempo para serem processados, especialmente os métodos que suportam o cabeçalho Depth. Nesses casos, o cliente pode atingir o tempo limite da conexão enquanto espera por uma resposta. Para evitar isso, o servidor pode retornar um código de status 102 Processing para indicar ao cliente que o servidor ainda está processando o método.

- - -

* Fonte: [RFC2518 Seção 10.1](https://tools.ietf.org/html/rfc2518#section-10.1)

#### REFERÊNCIAS DE CÓDIGO

Símbolo de status HTTP do Rails `:processing`

Constante de status HTTP do Symfony `Response::HTTP_PROCESSING`