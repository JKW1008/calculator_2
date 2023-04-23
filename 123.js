let num1 = '';
let num2 = '';
let operator = '';
let operator_1 = document.querySelector('#operator');
let result = document.querySelector('#result');

let numberClick = (number) => () => {
  if (operator) {
    num2 += number;
  } else {
    num1 += number;
  }
  console.log(num1, num2);
  result.value += number;
};

document.querySelector('#n0').addEventListener('click', numberClick('0'));
document.querySelector('#n1').addEventListener('click', numberClick('1'));
document.querySelector('#n2').addEventListener('click', numberClick('2'));
document.querySelector('#n3').addEventListener('click', numberClick('3'));
document.querySelector('#n4').addEventListener('click', numberClick('4'));
document.querySelector('#n5').addEventListener('click', numberClick('5'));
document.querySelector('#n6').addEventListener('click', numberClick('6'));
document.querySelector('#n7').addEventListener('click', numberClick('7'));
document.querySelector('#n8').addEventListener('click', numberClick('8'));
document.querySelector('#n9').addEventListener('click', numberClick('9'));

let operatorClick = (op) => () => {
  if (!num1) {
    alert('숫자를 먼저 입력하세요.');
    return;
  }
  
  operator = op;
  operator_1.value = op;
  result.value = '';
};

document.querySelector('#plus').addEventListener('click', operatorClick('+'));
document.querySelector('#minus').addEventListener('click', operatorClick('-'));
document.querySelector('#divide').addEventListener('click', operatorClick('/'));
document.querySelector('#multiply').addEventListener('click', operatorClick('*'));
document.querySelector('#clear').addEventListener('click', () => {
  operator_1.value = '';
  result.value = '';
  num1 = num2 = operator = '';
});

document.querySelector('#calculate').addEventListener('click', () => {
  if (!operator || !num2) {
    alert('연산자와 숫자를 입력하세요.');
    return;
  }
  
  switch (operator) {
    case '+':
      result.value = parseInt(num1) + parseInt(num2);
      break;
    case '-':
      result.value = parseInt(num1) - parseInt(num2);
      break;
    case '*':
      result.value = parseInt(num1) * parseInt(num2);
      break;
    case '/':
      result.value = parseInt(num1) / parseInt(num2);
      break;
    default:
      break;
  }
});

