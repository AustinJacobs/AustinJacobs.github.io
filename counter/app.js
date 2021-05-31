let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener('click', () => {
    count++
    updateDisplay();
    youMadeIt();

});

counterMinusElem.addEventListener('click', () => {
    count--
    updateDisplay();
    youMadeIt();

});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}

function youMadeIt() {
    if (count === 50) {
        document.querySelector('.congrats').innerHTML = 'You made it to 50!';
    } 

    else if (count === -50) {
        document.querySelector('.congrats').innerHTML = 'You made it to -50!';
    }
    
    else if (count === 51 || count === 49 || count === -51 || count == -49) {
        document.querySelector('.congrats').innerHTML = '';
    }
};