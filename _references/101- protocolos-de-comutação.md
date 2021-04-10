---
title: 101 - PROTOCOLOS DE COMUTAÇÃO
ariaLabelId: http101
dataTargetId: idhttp101
---
O servidor compreende e está disposto a cumprir o pedido do cliente, através do campo [1 do](https://httpstatuses.com/101#ref-1) cabeçalho do Upgrade , de alteração do protocolo de aplicação utilizado nesta ligação.

O servidor DEVE gerar um campo de cabeçalho de atualização na resposta que indica qual (is) protocolo (s) será (ão) alterado (s) imediatamente após a linha vazia que encerra a 101 resposta.

Presume-se que o servidor somente concordará em alternar protocolos quando for vantajoso fazê-lo. Por exemplo, mudar para uma versão mais recente de HTTP pode ser vantajoso em relação a versões mais antigas, e mudar para um protocolo síncrono em tempo real pode ser vantajoso ao fornecer recursos que usam esses recursos.

- - -

* 1 Atualizar [RFC7230 Seção 6.7](https://tools.ietf.org/html/rfc7230#section-6.7)
* Fonte: [RFC7231 Seção 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)

#### REFERÊNCIAS DE CÓDIGO

Símbolo de status HTTP do Rails `:switching_protocols`

Constante de status Go HTTP `http.StatusSwitchingProtocols`

Constante de status HTTP do Symfony `Response::HTTP_SWITCHING_PROTOCOLS`

Constante de status HTTP Python2 `httplib.SWITCHING_PROTOCOLS`

Constante de status Python3 + HTTP `http.client.SWITCHING_PROTOCOLS`

Python3.5 + Constante de status HTTP `http.HTTPStatus.SWITCHING_PROTOCOLS`

<!--EndFragment-->