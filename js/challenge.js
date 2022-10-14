// We did this to grab the button
let counter = document.getElementById('counter');
let minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => counterDown ());

function counterDown() {
    counter.innerText --
}

let plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => counterUp ());

function counterUp() {
   counter.innerText ++
}