---
title: Resposta HTTP 100
ariaLabelId: http100
dataTargetId: idhttp100
---
A parte inicial de uma solicitação foi recebida e ainda não foi rejeitada pelo servidor. O servidor pretende enviar uma resposta final depois que a solicitação for totalmente recebida e posta em prática.

Quando a solicitação contém um campo de cabeçalho Expect que inclui uma expectativa de 100 continuações, a resposta 100 indica que o servidor deseja receber o corpo [1 da](https://httpstatuses.com/100#ref-1) carga útil da solicitação . O cliente deve continuar enviando a solicitação e descartar a resposta 100.

Se a solicitação não continha um campo de cabeçalho Expect contendo a expectativa de continuação de 100, o cliente pode simplesmente descartar essa resposta provisória.

- - -

* Espere [RFC7231 Seção 5.1.1](https://tools.ietf.org/html/rfc7231#section-5.1.1)
* Fonte: [RFC7231 Seção 6.1.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)

#### REFERÊNCIAS DE CÓDIGO

Símbolo de status HTTP do Rails `:continue`

Constante de status Go HTTP `http.StatusContinue`

Constante de status HTTP do Symfony `Response::HTTP_CONTINUE`

Constante de status HTTP Python2 `httplib.CONTINUE`

Constante de status Python3 + HTTP `http.client.CONTINUE`

Python3.5 + Constante de status HTTP `http.HTTPStatus.CONTINUE`