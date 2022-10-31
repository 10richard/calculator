let lstOperator = [];
let firstOperand = "";
let secondOperand = "";
let countEvaluate = 0;


const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');
const equalBtn = document.querySelector('.btn.equal');
const clearBtn = document.querySelector('.btn.clear');
const currentTxt = document.querySelector('.currentScreenTxt');


numberBtns.forEach(btn => btn.addEventListener('click', () => {
    appendNum(btn.textContent);
}));

operatorBtns.forEach(btn => btn.addEventListener('click', () => {
    appendOperator(btn)
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
        currentTxt.textContent = `${secondOperand}`;
    } else {
        firstOperand += num;
        console.log(firstOperand);
        currentTxt.textContent = `${firstOperand}`;
    }
}

function appendOperator(operator) {
    if (firstOperand == '') {
        return
    }
    lstOperator.push(operator.textContent);
    console.log(lstOperator);
    operator.classList.add('active');
    if (lstOperator.length > 1) {
        checkOperator()
    }
}

function checkOperator() {
    if (lstOperator.length == 0 || secondOperand == '') {
        if (lstOperator.length > 1) {
            lstOperator.pop();
        } else {
            return
        }
    } else {
        firstOperand = parseFloat(firstOperand);
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
    firstOperand += parseFloat(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function subtract() {
    firstOperand -= parseFloat(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function divide() {
    if (secondOperand == 0) {
        firstOperand = 8008135;
        console.log(lstOperator);
        console.log(firstOperand);
        afterEvaulation()
        return
    }
    firstOperand /= parseFloat(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function multiply() {
    firstOperand *= parseFloat(secondOperand);
    console.log(lstOperator);
    console.log(firstOperand);
    afterEvaulation()
}

function afterEvaulation() {
    lstOperator.splice(0,1);
    secondOperand = "";
    countEvaluate += 1;
    operatorBtns.forEach(btn => btn.classList.remove('active'));
    currentTxt.textContent = `${Math.round((firstOperand + Number.EPSILON) * 100) / 100}`
}

function clear() {
    firstOperand = "";
    secondOperand = "";
    lstOperator = [];
    countEvaluate = 0;
    currentTxt.textContent = '';
}

//Add a functionality that checks if number already has an existing decimal (ADD LATER)
function appendDecimal() {
    if (lstOperator.length == 1) {
        secondOperand += '.';
    } else {
        firstOperand += '.';
    }
}