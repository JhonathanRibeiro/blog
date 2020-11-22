bioEp.init({
    html: '<div id="bio_ep_content">' +
        '<img class="img-popup" src="/assets/img/offer.jpeg" alt="{{site.title}}" />' +
        '<span>Não vá embora ainda...👇</span>' +
        '<span>Conheça o nossa loja, são diversos produtos com</span>' +
        '<span>Ofertas imperdíveis</span>' +
        '<a href="/shop" class="bio_btn">CLIQUE AQUI</a>' +
        '</div>',
    css: '#bio_ep {width: 400px; height: 325px!important; color: #333; background-color: #fafafa; text-align: center;}' +
        '#bio_ep_content {padding: 0 5px; font-family: "Titillium Web";}' +
        '.img-popup{width: 230px!important;}' +
        '#bio_ep_content span:nth-child(2) {display: block; color: #f21b1b; font-size: 32px; font-weight: 600;}' +
        '#bio_ep_content span:nth-child(3) {display: block; font-size: 16px;}' +
        '#bio_ep_content span:nth-child(4) {display: block; margin: 4px; font-size: 16px; font-weight: 600;}' +
        '.bio_btn {display: inline-block; margin: 18px 0 0 0; padding: 7px; color: #fff; font-size: 14px; font-weight: 600; background-color: #70bb39; border: 1px solid #47ad0b; cursor: pointer; -webkit-appearance: none; -moz-appearance: none; border-radius: 0; text-decoration: none;}' +
        '.bio_btn:hover{color:white;text-decoration:none;background-color:#70bb39cf;border:1px solid #70bb39cf;}',
    fonts: ['//fonts.googleapis.com/css?family=Titillium+Web:300,400,600'],
    cookieExp: 0,
    delay: 2
});