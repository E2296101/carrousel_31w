(function(){

    
    let bouton_ouvrir = document.querySelector(".bouton__ouvrir");
    //console.log(bouton_ouvrir.tagName);
    let elemCarrousel = document.querySelector(".carrousel");
    let elemBouton_x = document.querySelector(".bouton__x");
    let elemGalerie = document.querySelector(".galerie");
    let elemGalerie_img = elemGalerie.querySelectorAll("img");
    let elmGalerie__figure = document.querySelector('.galerie__figure');
    console.log(elemGalerie_img.length);

    for(const elmImg of elemGalerie_img ){
        let elemCarrousel__img = document.createElement('img');
        elemCarrousel__img.setAttribute('src',elmImg.getAttribute('src'));
       // elmGalerie__figure.appendChild(elemCarrousel__img);
    }

    bouton_ouvrir.addEventListener('mousedown',function(){

        console.log('boite ouvrir');
        elemCarrousel.classList.add('carrousel--ouvrir');

    })
    elemBouton_x.addEventListener('mousedown',function(){

        console.log('boite fermer');
        elemCarrousel.classList.remove('carrousel--ouvrir');

    })
}

)()