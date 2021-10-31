const cardbord = document.querySelector('#cardbord');
const imagens = [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
];

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
        <div class="memory-card" data-card="${img}">
            <img class="front-face" src="img/${img}">
            <img class="back-face" src="img/js-badge.svg">
        </div>
    `
});

cardbord.innerHTML = cardHTML + cardHTML;

/*FIM DA RENDERIZAÇÃO HTML */

const cards = document.querySelectorAll('.memory-card');
let firstCard, secundCard;
let lockCards = false;



function flipCard(){
    if (lockCards) return false;

    this.classList.add("flip");

    if (!firstCard){
        firstCard = this;

        return false;
    }
    secundCard = this;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secundCard.dataset.card;

    !isMatch ? disableCard() : resetCards(isMatch);
}

function disableCard(){
    lockCards = true;
    setTimeout(function(){
        firstCard.classList.remove("flip");
        secundCard.classList.remove("flip");

        resetCards();
    },1000);

}
(function shuffle(){
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    })
})()

function resetCards (isMatch){
    if (isMatch){
        firstCard.removeEventListener('click', flipCard);
        secundCard.removeEventListener('click', flipCard);
    }
    [firstCard, secundCard, lockCards] = [null, null, false]
}

cards.forEach(card => card.addEventListener('click', flipCard));
