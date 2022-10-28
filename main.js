let lstOperator = [];
let firstOperand = "";
let secondOperand = "";
let total = 0;
let evaluate = false;


const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');
const equalBtn = document.querySelector('.btn.equal');



numberBtns.forEach(btn => btn.addEventListener('click', () => {
    appendNum(btn.textContent);
}));

operatorBtns.forEach(btn => btn.addEventListener('click', () => {
    appendOperator(btn.textContent)
}));

equalBtn.addEventListener('click', () => {
    checkOperator();
});

function appendNum(num) {
    if (lstOperator.length == 1) {
        secondOperand += num;
        console.log(secondOperand);
    } else {
        firstOperand += num;
        console.log(firstOperand);
    }
}

function appendOperator(operator) {
    lstOperator.push(operator);
    console.log(lstOperator);
    if (lstOperator.length > 1) {
        checkOperator()
    }
}

function checkOperator() {
    if (lstOperator.length == 0) {
        return
    } else if (lstOperator[0] == "+") {
        add()
    } else if (lstOperator[0] == '-') {
        subtract()
    } else if (lstOperator[0] == 'x') {
        multiply()
    } else if (lstOperator[0] == '÷') {
        divide()
    } else {
        console.log('ERROR: operator couldn\'t be read');
        console.log(lstOperator);
    }
}

function add() {
    total += (parseInt(firstOperand) + parseInt(secondOperand));
    lstOperator.pop('+');
    console.log(lstOperator);
    console.log(total);
}

function subtract() {
    total += (parseInt(firstOperand) - parseInt(secondOperand));
    lstOperator.pop('-');
    console.log(lstOperator);
    console.log(total); 
}

function divide() {
    total += (parseInt(firstOperand) / parseInt(secondOperand));
    lstOperator.pop('÷');
    console.log(lstOperator);
    console.log(total);
}

function multiply() {
    total += (parseInt(firstOperand) * parseInt(secondOperand));
    lstOperator.pop('x');
    console.log(lstOperator);
    console.log(total);
}

//Add a functionality that checks if number already has an existing decimal
function appendDecimal() {
    if (lstOperator.length == 1) {
        secondOperand += '.';
    } else {
        firstOperand += '.';
    }
}

function clear() {
    firstOperand = "";
    secondOperand = "";
    lstOperator.clear;
    total = 0;
}