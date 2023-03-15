/* (function(){

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


})() */


(function(){
// fonction IFEE
console.log('début du carrousel')
let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
let elmCarrousel = document.querySelector('.carrousel')
let elmBouton__x = document.querySelector('.bouton__x')
let elmGalerie = document.querySelector('.galerie')
let elmGalerie__img = elmGalerie.querySelectorAll('img')
let elmCarrousel__figure = document.querySelector('.carrousel__figure') // conteneur d'images
let elmCarrousel__form = document.querySelector('.carrousel__form') // conteneur des radio bouton
console.log(elmGalerie__img.length)





bouton__ouvrir.addEventListener('mousedown', function(){
    
    elmCarrousel.classList.add('carrousel--ouvrir')
    ajouter_carrousel()
})
elmBouton__x.addEventListener('mousedown', function(){
    
    elmCarrousel.classList.remove('carrousel--ouvrir')
})

function ajouter_carrousel()
{
    for (const elmImg of elmGalerie__img){
        ajouter_img(elmImg) // ajoute l'image dans le carrousel
        
/* 
    for (const elmImg of elmGalerie__img) {
        ajouter_img(elmImg); // ajoute l'image dans le carrousel
        
        const existingRadio = document.querySelector(`#carrousel__form input.radCarrousel[data-index='${i}']`);
        if (!existingRadio) {
            ajouter_radio(); // ajoute le bouton radio dans le carrousel__form
        }
 
} */


        ajouter_radio() // ajoute les radio bouton dans carrousel__form
    }
    elmCarrousel__figure.children[0].classList.add('carrousel__img--activer')
}

function ajouter_img(elmImg){
    let elmCarrousel__img = document.createElement('img')
    elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
    elmCarrousel__img.classList.add('carrousel__img')
    elmCarrousel__img.dataset.index = index
    elmCarrousel__figure.appendChild(elmCarrousel__img)
}
let index = 0;
let index__precedent = -1

function ajouter_radio(){
  let elmCarrousel__radio = document.createElement('input')
  elmCarrousel__radio.setAttribute('type','radio')
  elmCarrousel__radio.setAttribute('name', 'radCarrousel')
  elmCarrousel__radio.dataset.index = index
  index++
  elmCarrousel__form.appendChild(elmCarrousel__radio)
  elmCarrousel__radio.addEventListener('mousedown', function(){
    activer__image(this.dataset.index)
  })
}

function activer__image(index)
{
    if (index__precedent != -1)
    {
        elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')  
    }
    elmCarrousel__figure.children[index].classList.add('carrousel__img--activer') 
    index__precedent= index;
}




bouton__ouvrir.addEventListener('mousedown', function(){
    
    elmCarrousel.classList.add('carrousel--ouvrir')
    ajouter_carrousel()
})



})()