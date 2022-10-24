let operator = ""
let firstOperand = ""
let secondOperand = ""


const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');


numberBtns.forEach(btn => btn.addEventListener('click', () => {
    setNum(btn.textContent);
}));

operatorBtns.forEach(btn => btn.addEventListener('click', () => {
    setOperator(btn.textContent)
}));

function setNum(num) {
    if (operator != "") {
        secondOperand += parseInt(num);
        console.log(secondOperand)
    } else {
        firstOperand += parseInt(num);
        console.log(firstOperand)
    }
};

function setOperator(check) {
    if (operator == "") {
        operator += check;
        console.log(operator);
    } else {
        operator += check;
        console.log(operator)
    }
}

function checkOperator(check) {

}