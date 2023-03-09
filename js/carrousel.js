(function(){

        let index = 0;
    let index_precedent = -1;
    let bouton_ouvrir = document.querySelector(".bouton__ouvrir");
    //console.log(bouton_ouvrir.tagName);
    let elemCarrousel = document.querySelector(".carrousel");
    let elemBouton_x = document.querySelector(".bouton__x");
    let elemGalerie = document.querySelector(".galerie");
    let elemGalerie_img = elemGalerie.querySelectorAll("img");
    let elmCarrousel__figure = document.querySelector('.carrousel__figure');
     let elmCarrousel__form = document.querySelector('.carrousel__figure');
    console.log(elemGalerie_img.length);

    
    
    bouton_ouvrir.addEventListener('mousedown',function(){
        
        console.log('boite ouvrir');
        elemCarrousel.classList.add('carrousel--ouvrir');
        ajouter_carrousel();
        
    })
    elemBouton_x.addEventListener('mousedown',function(){
        
        console.log('boite fermer');
        elemCarrousel.classList.remove('carrousel--ouvrir');
        
    })

    function ajouter_carrousel(){
        for(const elmImg of elemGalerie_img ){
            ajouter_img(elmImg);
            ajouter_radio();
        }
        elmCarrousel__figure.children[0].classList.add('carrousel__img--activer');

    }
    function ajouter_img(elmImg){
      
            let elemCarrousel__img = document.createElement('img');
            elemCarrousel__img.setAttribute('src',elmImg.getAttribute('src'));
            elemCarrousel__img.classList.add('carrousel__img');
            elemCarrousel__img.dataset.index  = index;
            
            elmCarrousel__figure.appendChild(elemCarrousel__img);
            index++;
        
    }


    function ajouter_radio(){

        let elemCarrousel__radio = document.createElement('input');
            elemCarrousel__radio.setAttribute('type','radio');
            elemCarrousel__radio.setAttribute('name','radCarrousel');
            elemCarrousel__radio.dataset.index  = index;
            
           //elemCarrousel__radio
            elmCarrousel__form.appendChild(elemCarrousel__radio);
            index++;
            elmCarrousel__form.addEventListener('mousedown',function(){
                activer__image(this.dataset.index);
            })

    }

function activer__image(index){
    elmCarrousel__figure.children[index].classList.add('carrousel__img--activer');
}


})()