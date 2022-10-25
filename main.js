let lstOperator = [];
let firstOperand = "";
let secondOperand = "";
let total = 0;
let evaluate = false;


const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');


numberBtns.forEach(btn => btn.addEventListener('click', () => {
    appendNum(btn.textContent);
}));

operatorBtns.forEach(btn => btn.addEventListener('click', () => {
    appendOperator(btn.textContent)
}));

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
    firstOperator = lstOperator.slice(0, 1);
    if (firstOperator == "+") {
        add()
    } else if (firstOperator == '-') {
        subtract()
    } else if (firstOperator == 'x') {
        multiply()
    } else if (firstOperator == '÷') {
        divide()
    } else {
        console.log('error: operator is wrong');
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