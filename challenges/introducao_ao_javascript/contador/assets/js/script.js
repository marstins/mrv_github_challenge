let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

let decrementButton = document.getElementById('decrementButton');
decrementButton.addEventListener('click', function() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
    buttonHandler()
});

let incrementButton = document.getElementById('incrementButton');
incrementButton.addEventListener('click', function() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
    buttonHandler()
});

function changeColor() {
    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
};

function buttonHandler() {
    if(currentNumber <= -5) {
       decrementButton.setAttribute('disabled', ''); 
    } else if (currentNumber >= 5) {
        incrementButton.setAttribute('disabled', '')
    } else {
        decrementButton.removeAttribute('disabled');
        incrementButton.removeAttribute('disabled');
    }
};