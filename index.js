/*let items = document.querySelectorAll('.carousel .cards');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let active = 3;
function carouselfun() {
    let stt = 0;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `transateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
    }
}
carouselfun();
*/


let card_index = 1;
showcards(card_index);

function nextSlide(n) {
    showcards(card_index += n);
}

function activeSlide(n) {
    showcards(card_index = n);
}

function displaySlides(n) {
    let i;
    let cards = document.getElementsByClassName("cards");
}

if (n > cards.length) { card_index = 1 }
if (n < 1) { card_index = cards.length }
for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
}

cards[card_index - 1].style.display = "block";

