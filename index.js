// for the carousel in the main page of the website

//calling the variables by class names and ID from the html file
const cards = document.getElementsByClassName("cards");
const nxtBtn = document.getElementById("next_btn");
const prvBtn = document.getElementById("prev_btn");
const dots = document.getElementsByClassName("dot");
let position = 0; //setting the initial index position
const numberOfCards = cards.length;

function hideAllCards() {
    // hiding all cards not to be viewed
    for (const card of cards) {
        card.classList.remove("cards-visible");
        card.classList.add("cards-hidden");
    }
}

const moveToNxtCard = function (e) {
    hideAllCards(); //calling the function 

    // conditional statements if last slide has been reached
    if (position === numberOfCards - 1) {
        position = 0; //goes to the first slide
    } else {
        // to next slide
        position++;
    }
    // making the current slide viewable
    cards[position].classList.add("cards-visible");

}

const moveToPrevCard = function (e) {
    hideAllCards();

    // conditions to check wether we are on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // switches to last slide
    } else {
        // moves to previous slide
        position--;
    }
    // making the current slide visible
    cards[position].classList.add("cards-visible");
}

nxtBtn.addEventListener("click", moveToNxtCard);  //action when clicked on next button
prvBtn.addEventListener("click", moveToPrevCard); //action when clicked on previous button