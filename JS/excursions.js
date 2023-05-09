const JsonLoc = `[{
    "title":"Полежать, играя в Обломовщину",
    "about":"Захааааааар!",
    "class":"first",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i06.fotocdn.net/s121/1d4a7c22b63d5578/public_pin_l/2761168955.jpg"
},{
    "title":"На Кавказ по тропам Лермонтова",
    "about":"Умер Лермонтов на Кавказе, но любил он его не поэтому",
    "class":"second",
    "urlAlternate":"https://sun9-8.userapi.com/impg/Fn1MiSaalP3CjerLiEit_nlAeKVkOL4IAfdgoQ/sGH92gYEekg.jpg?size=1000x1000&quality=95&sign=780dd10ea882a4151aa5dcc9b086bfa5&type=album",
    "url":"https://i.klubgidov.ru/800x960/82/b0/82b0a09c00cb391d8a8468785251c986.jpeg"
},{
    "title":"По-Чеховски изысканно и задумчиво",
    "about":"Замечательный день сегодня. То ли чаю пойти выпить, то ли повеситься...",
    "class":"third",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i.pinimg.com/originals/2a/79/2e/2a792e2d3cd53a36088739d5835220e0.jpg"

},{
    "title":"Как истинно Ремарковская фрау",
    "about":"Встречаются как то Эрих, Мария и Ремарк на западном фронте, а там без перемен",
    "class":"fourth",
    "urlAlternate":"https://sun9-8.userapi.com/impg/Fn1MiSaalP3CjerLiEit_nlAeKVkOL4IAfdgoQ/sGH92gYEekg.jpg?size=1000x1000&quality=95&sign=780dd10ea882a4151aa5dcc9b086bfa5&type=album",
    "url":"https://kulturakumertau.ru/wp-content/uploads/9/4/4/944a125484d381962eb62154bde46e5a.jpeg"
},{
    "title":"Ощути себя Маяковским",
    "about":"Любовь зла",
    "class":"fifth",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i.pinimg.com/736x/ca/b2/b8/cab2b823f5cbf8e4c67e5f08246a66fe.jpg"
},{
    "title":"Выбор по-Чернышевски",
    "about":"Что делать?..",
    "class":"sixth",
    "urlAlternate":"https://sun9-8.userapi.com/impg/Fn1MiSaalP3CjerLiEit_nlAeKVkOL4IAfdgoQ/sGH92gYEekg.jpg?size=1000x1000&quality=95&sign=780dd10ea882a4151aa5dcc9b086bfa5&type=album",
    "url":"https://i.pinimg.com/originals/86/d0/a1/86d0a17b45aa09b622516df48128c326.jpg"
}]`;

let wrongBtns = Array.from(document.querySelectorAll('#wrong-btn'));
console.log(wrongBtns);

for (let i = 0; i < wrongBtns.length; i++) {
    wrongBtns[i].addEventListener('click', ()=>{
        alert('Мимо');
    });
}

let rightBtn = document.querySelector('#right-btn');

rightBtn.addEventListener('click', ()=>{
    window.location.href = '../pages/locations.html';
})