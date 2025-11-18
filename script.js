const input = document.getElementById('input');
const result = document.getElementById('result');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    input.value = expression;
}

function clearScreen() {
    expression = '';
    input.value = '';
    result.value = '';
}

function backspace() {
    expression = expression.slice(0, -1);
    input.value = expression;
}

function calculate() {
    try {
        // Replace ^ with ** for exponentiation
        let evalExpression = expression.replace(/\^/g, '**');
        result.value = eval(evalExpression);
    } catch (error) {
        result.value = 'Error';
    }
}

function trig(func) {
    expression += `Math.${func}(`;
    input.value = expression;
}

function pi() {
    expression += 'Math.PI';
    input.value = expression;
}

function power() {
    expression += '^';
    input.value = expression;
}

function sqrt() {
    expression += 'Math.sqrt(';
    input.value = expression;
}

function log() {
    expression += 'Math.log10(';
    input.value = expression;
}

function ln() {
    expression += 'Math.log(';
    input.value = expression;
}