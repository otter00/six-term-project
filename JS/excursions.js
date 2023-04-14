const Json = `[{
    "url":"",
    "title":"first",
    "about":"about",
    "class":"first"
},{
    "url":"",
    "title":"second",
    "about":"about",
    "class":"second"
},{
    "url":"",
    "title":"third",
    "about":"about",
    "class":"third"
},{
    "url":"",
    "title":"fourth",
    "about":"about",
    "class":"fourth"
},{
    "url":"",
    "title":"fifth",
    "about":"about",
    "class":"fifth"
},{
    "url":"",
    "title":"sixth",
    "about":"about",
    "class":"sixth"
}]`;

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
            <p class="exc__about">${exc.about}</p>
            </div>
        </div>`;
    }
    //console.log(excContent);

    document.querySelector('.excursions__wrapper').innerHTML = excContent;
});