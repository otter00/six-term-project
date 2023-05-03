const Json = `[{
    "url":"https://i.ytimg.com/vi/263_XJEhgNQ/maxresdefault.jpg",
    "title":"Олимп",
    "about":"Потухший вулкан на Марсе, самая высокая гора в Солнечной системе. Высота Олимпа - 27 км к его основанию.",
    "class":"first",
    "href": "https://youtu.be/9bZkp7q19f0"
},{
    "url":"https://steamuserimages-a.akamaihd.net/ugc/995764848905591363/C95A084481BA30EE2A567B370A130B9FEE9285FA/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
    "title":"Red Grave city",
    "about":"Ред-Грейв-Сити отличается неоклассической архитектурой, типичной для викторианской эпохи, с некоторыми более старыми сооружениями, такими как кафедральный собор.",
    "class":"second",
    "href": "https://youtu.be/9bZkp7q19f0"
},{
    "url":"http://www.comgun.ru/uploads/posts/2021-04/1619269820_12.jpg",
    "title":"Рорайма",
    "about":"На заповедной территории и на самой вершине можно обнаружить множество уникальных животных и краснокнижных растений. Некоторые из них растут только на плато.",
    "class":"third",
    "href":"https://youtu.be/9bZkp7q19f0"
},{
    "url":"https://www.iphones.ru/wp-content/uploads/2019/06/2-1-1.jpg",
    "title":"Галактика «Сомбреро»",
    "about":"Этот космический объект крут тем, что внутри него находится сверхмассивная чёрная дыра, которая по массе, как 1 млрд земных Солнц.",
    "class":"fourth",
    "href":"https://youtu.be/9bZkp7q19f0"
},{
    "url":"https://i.pinimg.com/originals/66/31/5a/66315a78d7c2be03638435b79f72cff6.jpg",
    "title":"Беспин",
    "about":"Облачный город стал центральной точкой в попытке Дарта Вейдера поймать в ловушку Люка Скайуокера.",
    "class":"fifth",
    "href":"https://youtu.be/9bZkp7q19f0"
},{
    "url":"https://cdn.mos.cms.futurecdn.net/Xvas2AtmtMk37WYHskDPfE-1920-80.jpg",
    "title":"Брайт-Фоллс",
    "about":"Днем не представляет опасности, но как только на город опускается тьма, в местных лесах в людях просыпаются монстры, а призраки вырываются на свободу.",
    "class":"sixth",
    "href":"https://youtu.be/9bZkp7q19f0"
}]`;

let image = document.querySelector('img');

//add cards into html on dom content loaded
document.addEventListener('DOMContentLoaded', function (e) {
    let excursions = JSON.parse(Json);
    //console.log(excursions);

    let excContent = "";

    for (let exc of excursions) {
        excContent += 
        `<div class="excursion__card ${exc.class}-card">
            <img src=${exc.url} alt="exc__pic">

            <div class="exc__info">
                <span class="exc__title">${exc.title}</span>
                <p class="exc__about hidden">${exc.about}</p>
            </div>
        </div>`;
    }
    //console.log(excContent);

    document.querySelector('.excursions__wrapper').innerHTML = excContent;

    let aboutContainer = Array.from(document.querySelectorAll('.excursion__card'));
    
    // to make pic smaller we need to click the title
    for(let i = 0; i < aboutContainer.length; i++) {
        console.log(aboutContainer[i]);
        aboutContainer[i].addEventListener('mouseover', (event) => {
            //console.log(event.target);
            let parentDiv = event.target.parentNode;
            let grand = parentDiv.parentNode;
            console.log(grand);
            let pic = grand.querySelector('img');
            //console.log(parentDiv);
            //let about = Array.from(parentDiv.querySelectorAll('.exc__about'));
            let about = parentDiv.querySelector('.exc__about');
            console.log(about);
            //let title = parentDiv.querySelectorAll('.exc__title');
            // for(let i = 0; i < about.length; i++) {
            //     about[i].style.display = "block";
            // }
            pic.style.display = "none";
            about.style.display = "block";
            //pic.classList.add("small__pic");
            //title.style.display = "none";
    })} 
});