//Head

//Favicon
var fav = document.createElement('link');
fav.setAttribute('rel','shortcut icon');
fav.setAttribute('href','img/back.jpg');
fav.setAttribute('type','image/png');
document.getElementsByTagName('head')[0].appendChild(fav);

//Meta
var ogT = document.createElement('meta');
ogT.setAttribute('property','og:title');
ogT.content = 'Escape CTF';
document.getElementsByTagName('head')[0].appendChild(ogT);

var ogD = document.createElement('meta');
ogD.setAttribute('property','og:description');
ogD.content = 'Командные соревнования по информационной безопасности для школьников Escape CTF';
document.getElementsByTagName('head')[0].appendChild(ogD);

var ogU = document.createElement('meta');
ogU.setAttribute('property','og:url');
ogU.content = 'http://escapectf.github.io/';
document.getElementsByTagName('head')[0].appendChild(ogU);

//Back Image
var headBack = document.getElementById('head');
headBack.innerHTML = '' 
    + '<div class="head">'
    + '<a href="index.html"><h1 class="title">Escape CTF</h1></a>'
    + '<div class="desc">'
    + 'Открытые городские командные соревнования по информационной безопасности для школьников'
    + '</div>'
    + '</div>';

// Menu
var menu = document.getElementById('menu');
menu.innerHTML = ''
    + '<a href="https://docs.google.com/forms/d/e/1FAIpQLSc7065qVMlNONyhxzQnQOn6yMU_76ipJdTGDApJeFweB6YhYg/viewform?usp=sf_link">Регистрация</a>'
    + '<a href="files/polozenie_Escape_CTF.docx">Положение</a>'
    + '<a href="org.html">Организаторы</a>'
    + '<a href="result.html">Результаты</a>'
    + '<a href="contacts.html">Контакты</a>';

// Footer
var footer = document.getElementById('footer');
footer.innerHTML = ''
    + '<div class="social">'
    + '<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,twitter" data-title="Escape CTF" data-url="http://escapectf.github.io/" data-description="Командные соревнования по информационной безопасности для школьников Escape CTF">'
    + '</div>'
    + '</div>'
    + '<div>'
    + '© СГУГиТ 2018'
    + '</div>';
//Share Yandex
var share = document.createElement('script');
share.src = '//yastatic.net/es5-shims/0.0.2/es5-shims.min.js';
document.body.appendChild(share);

var share2 = document.createElement('script');
share2.src = '//yastatic.net/share2/share.js';
document.body.appendChild(share2);
