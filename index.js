let items = document.querySelectorAll('.carousel .cards');
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