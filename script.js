const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#counter');
let count = 0;

decrement.addEventListener('click', () => {
    count--;
    setCounter(count);
});

increment.addEventListener('click', () => {
    count++;
    setCounter(count);
});

reset.addEventListener('click', () => {
    count = 0;
    setCounter(count);
});

function setCounter(value) {
    counter.textContent = value;
}