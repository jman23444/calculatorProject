// Initializing Variables
const displayResults = document.querySelector('#results');
const resetButton = document.querySelector('#ac');
const deleteLastCharacterButton = document.querySelector('#delete');
const enterButton = document.querySelector('#enter');
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const numberButtons = document.querySelectorAll('.button-grid .numButton');

// Variables for Calculation 
let currentInput = '';
let previousInput = '';
let operation = null;

// Adding eventListeners to number buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

// Event Listeners for operators
addButton.addEventListener('click', () => {
    selectOperation('+');
});
minusButton.addEventListener('click', () => {
    selectOperation('-');
});
multiplyButton.addEventListener('click', () => {
    selectOperation('*');
});
divideButton.addEventListener('click', () => {
    selectOperation('/');
});

// Compute On Enter 
enterButton.addEventListener('click', () => compute());

// Functions To Calculate Logic 
function selectOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') compute();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(); 
}

function compute() {
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    if (isNaN(num1) || isNaN(num2)) return;

    switch (operation) {
        case '+': 
            currentInput = add(num1, num2);
            break;
        case '-': 
            currentInput = minus(num1, num2);
            break;
        case '*': 
            currentInput = multiply(num1, num2);
            break;
        case '/':
            currentInput = num2 === 0 ? 'Error' : divide(num1, num2);
            break;
    }
    operation = null;
    previousInput = '';
    updateDisplay();
}

// Reset functionality 
resetButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
});

deleteLastCharacterButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

// Helper functions 
function updateDisplay() {
    displayResults.textContent = currentInput || '0';
}

function add(num1, num2) {
    return num1 + num2; 
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}