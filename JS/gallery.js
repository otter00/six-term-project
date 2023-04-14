const galleryJson = `[{
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
    let gallery = JSON.parse(galleryJson);
    //console.log(gallery);

    let galleryContent = "";

    for (let card of gallery) {
        galleryContent += 
        `<div class="gallery__card ${card.class}-card">
                <img src="${card.url}" alt="exc__pic">
        
                <div class="exc__info">
                    <span class="exc__title">${card.title}</span>
                    <p class="exc__about">${card.about}</p>
                </div>
        </div>`;
    }
    //console.log(galleryContent);

    document.querySelector('.gallery__wrapper').innerHTML = galleryContent;
});