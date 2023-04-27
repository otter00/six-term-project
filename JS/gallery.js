const galleryJson = `[{
    "url":"",
    "title":"first",
    "about":"to be or not to be...",
    "class":"first"
},{
    "url":"",
    "title":"second",
    "about":"to be or not to be...",
    "class":"second"
},{
    "url":"",
    "title":"third",
    "about":"to be or not to be...",
    "class":"third"
},{
    "url":"",
    "title":"fourth",
    "about":"to be or not to be...",
    "class":"fourth"
},{
    "url":"",
    "title":"fifth",
    "about":"to be or not to be...",
    "class":"fifth"
},{
    "url":"",
    "title":"sixth",
    "about":"to be or not to be...",
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


    //  дальше всё страшно - нуждается в доработке

    //let gallery__card = Array.from(document.querySelectorAll('.gallery__card'));
    // for (let i of gallery__card) {
    //     console.log(i);
    // }
    // console.log(gallery__card);
    //for(let i = 0; i < gallery__card.length; i++) {
        //console.log(gallery__card[i]);
        document.querySelector('.gallery__card').addEventListener('click', (e) => {
            //console.log(e.target);
            // let parentDiv = e.target;
            // console.log(parentDiv);
            // let gallery__card = parentDiv.querySelector('.gallery__card');
            // console.log(gallery__card);
            e.target.classList.add('scale');
        //     if (e.target.contains('gallery__card')) {
        //         console.log('contains');
        //     }
        });
            //e.target.classList.add('scale')
            //pic.classList.add("small__pic");
            //title.style.display = "none";
    //})} 

    
});



// document.addEventListener('mouseover', ()=>{

// });