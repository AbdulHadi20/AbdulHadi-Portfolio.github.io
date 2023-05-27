//javascript for the cards carousel

const cards = document.getElementsByClassName("cards");
const nxtBtn = document.getElementById("next");
const prvBtn = document.getElementById("previous");

let pos = 0;

const numOfCards = cards.length;

//to hide the slides not to be shown 
function hideCards() {
    for (const card of cards) {
        card.classList.remove("visible");
        card.classList.add("hidden");
    }
}

//for the next button functionality
const nextSlide = function (e) {
    hideCards();

    //checks if last card has been reached
    if (pos === numOfCards - 1) {
        pos = 0; //back to first card
    } else {
        pos++; //moves to next card
    }
    //now, to make the current card visible again
    cards[pos].classList.add("visible");
}

const prevSlide = function (e) {
    hideCards();

    //checks if the first card has been reached
    if (pos === 0) {
        pos = numOfCards - 1; //moves to the last card
    } else {
        pos--; //moves to a previous card
    }
    //now, making the current card visible again
    cards[pos].classList.add("visible");
}

//callbacks for the buttons

nxtBtn.addEventListener("click", nextSlide);
prvBtn.addEventListener("click", prevSlide);