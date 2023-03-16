


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
let index = index_bouton = 0;
let index__precedent   = -1
let index__precedent_bouton = elmGalerie__img.length - 1;



elmBouton__x.addEventListener('mousedown', function(){
    
    elmCarrousel.classList.remove('carrousel--ouvrir')
})


/**
 * Ajoute un carrousel d'images à l'élément cible.
 * @param {number} index - L'index de l'image à afficher en premier.
 * @returns {void}
 */
function ajouter_carrousel(index)
{

   // vérifier si des boutons radio existent déjà
    const nbRadioExistants = elmCarrousel__form.children.length;
    const nbImages = elmGalerie__img.length;
    //debugger;
    if(elmCarrousel.querySelectorAll('button').length <= 1)
    ajouter_boutons(elmCarrousel);
    
    // ajouter des boutons radio s'ils n'existent pas déjà
    if (nbRadioExistants < nbImages) {
        for (let i = nbRadioExistants; i < nbImages; i++) {
            ajouter_radio();
        }
    }

    for (const elmImg of elmGalerie__img){
        ajouter_img(elmImg) // ajoute l'image dans le carrousel
    

       // ajouter_radio() // ajoute les radio bouton dans carrousel__form
    }
    elmCarrousel__figure.children[0].classList.add('carrousel__img--activer')
    activer__image(index)
}

/**
*Ajoute un élément d'image à un élément de figure de carrousel
*@param {HTMLElement} elmImg - L'élément d'image à ajouter
*@returns {void}
*/
function ajouter_img(elmImg){
    let elmCarrousel__img = document.createElement('img')
    elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
    elmCarrousel__img.classList.add('carrousel__img')
    elmCarrousel__img.dataset.index = index
    elmCarrousel__figure.appendChild(elmCarrousel__img)
}

/**
*Ajoute un élément de bouton radio à un élément de formulaire de carrousel
*@returns {void}
*/

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

/**
*Active l'image correspondant à l'index spécifié et désactive l'image précédente si elle existe
*@param {number} index - L'index de l'image à activer
*@returns {void}
*/
function activer__image(index)
{
    //debugger;
    if (index__precedent != -1)
    {
        elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')  
    }
    elmCarrousel__figure.children[index].classList.add('carrousel__img--activer') 
    index__precedent= index;
    index_bouton = index;
    index__precedent_bouton = index;
    cocher_radio(index);
  

}





// ajouter un écouteur d'événements "click" sur chaque image de la galerie
elmGalerie__img.forEach(function(img) {
 img.addEventListener('click', function() {
    // récupérer l'index de l'image cliquée
    let index = Array.from(elmGalerie__img).indexOf(img);

    // ajouter le carrousel et afficher l'image cliquée
    elmCarrousel.classList.add('carrousel--ouvrir')
    ajouter_carrousel(index)
  });
});

/**
*Ajoute des boutons de navigation "précédent" et "suivant" au carrousel spécifié
*@param {HTMLElement} elmCarrousel - L'élément de carrousel auquel ajouter les boutons
*@returns {void}
*/
function ajouter_boutons(elmCarrousel) {
  // Ajouter le bouton "précédent"
  let boutonPrecedent = document.createElement('button');
  boutonPrecedent.classList.add('carrousel__bouton__precedent');
  boutonPrecedent.textContent = '<<';
  boutonPrecedent.addEventListener('click', function() {
    //debugger;
   // let index = parseInt(elmCarrousel__figure.querySelector('.carrousel__img--activer').dataset.index);
    index__precedent_bouton =  (index__precedent_bouton==0)?elmGalerie__img.length:index__precedent_bouton;
    activer__image(index__precedent_bouton - 1);
    

  });
  elmCarrousel.appendChild(boutonPrecedent);

  // Ajouter le bouton "suivant"
  let boutonSuivant = document.createElement('button');
  boutonSuivant.classList.add('carrousel__bouton__suivant');
  boutonSuivant.textContent = '>>';
  boutonSuivant.addEventListener('click', function() {
    //debugger;
   // let index = parseInt(elmCarrousel__figure.querySelector('.carrousel__img--activer').dataset.index);
    
    index_bouton =  (index_bouton==4)?-1:index_bouton;
    activer__image(index_bouton + 1);
    
  });
  elmCarrousel.appendChild(boutonSuivant);
}

function cocher_radio(index_radio){
let radios = elmCarrousel__form.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  let elmRadio = elmCarrousel__form.querySelector('input[type="radio"][data-index="' + index_radio + '"]');
  if (elmRadio) {
    elmRadio.checked = true;
  }

}




})()