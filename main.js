let lstOperator = [];
let firstOperand = "";
let secondOperand = "";
let countEvaluate = 0;


const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');
const equalBtn = document.querySelector('.btn.equal');
const clearBtn = document.querySelector('.btn.clear');


numberBtns.forEach(btn => btn.addEventListener('click', () => {
    appendNum(btn.textContent);
}));

operatorBtns.forEach(btn => btn.addEventListener('click', () => {
    appendOperator(btn.textContent)
}));

equalBtn.addEventListener('click', () => {
    checkOperator();
});

clearBtn.addEventListener('click', () => {
    clear();
});

function appendNum(num) {
    if (lstOperator.length == 0 && countEvaluate > 0) {
        return
    } else if (lstOperator.length == 1 || countEvaluate > 0) {
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
    } else {
        firstOperand = parseInt(firstOperand);
        if (lstOperator[0] == "+") {
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
    };
}

function add() {
    firstOperand += parseInt(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function subtract() {
    firstOperand -= parseInt(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function divide() {
    firstOperand /= parseInt(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function multiply() {
    firstOperand *= parseInt(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function afterEvaulation() {
    lstOperator.splice(0,1);
    secondOperand = "";
    countEvaluate += 1;
}

function clear() {
    firstOperand = "";
    secondOperand = "";
    lstOperator.clear;
    countEvaluate = 0;
}

//Add a functionality that checks if number already has an existing decimal (ADD LATER)
function appendDecimal() {
    if (lstOperator.length == 1) {
        secondOperand += '.';
    } else {
        firstOperand += '.';
    }
}