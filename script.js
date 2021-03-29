const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#counter');
const valueChange = document.querySelector('#valueChange');
let changeQuantity = parseInt(valueChange.value);
let count = 0;

valueChange.addEventListener('input', () => {
    changeQuantity = parseInt(valueChange.value);
});

decrement.addEventListener('click', () => {
    count -= changeQuantity;
    setCounter(count);
});

increment.addEventListener('click', () => {
    count += changeQuantity;
    setCounter(count);
});

reset.addEventListener('click', () => {
    count = 0;
    setCounter(count);
});

function setCounter(value) {
    counter.textContent = value;
}