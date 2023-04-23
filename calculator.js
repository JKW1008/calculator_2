let num1 = '';
let num2 = '';
let operator = ''; //연산자 변수
// 계산기는 숫자 + 연산자 + 숫자 = 결과 3개의 변수

let operator_1 = document.querySelector('#operator');
// html input 요소 변수, 연산자를 화면에 표시
let result= document.querySelector('#result');

// 숫자 이벤트

let numberClick = (number) => () => {
    if(operator){
        num2 += number;
    }else{
        num1 += number;
    }
    console.log(num1, num2);
    result.value += number;
}

//  querySelector로 대치되는 #n숫자 아이디에 addEventListener로
//  각 숫자를 눌렀을때 numberClick 함수가 실행되고 operator에 값이 없으면 num1에
//  있다면 num2에 값을 할당하는 이벤트를 실행시킨다.
 

document.querySelector('#n0').addEventListener('click',
numberClick('0'));
document.querySelector('#n1').addEventListener('click',
numberClick('1'));
document.querySelector('#n2').addEventListener('click',
numberClick('2'));
document.querySelector('#n3').addEventListener('click',
numberClick('3'));
document.querySelector('#n4').addEventListener('click',
numberClick('4'));
document.querySelector('#n5').addEventListener('click',
numberClick('5'));
document.querySelector('#n6').addEventListener('click',
numberClick('6'));
document.querySelector('#n7').addEventListener('click',
numberClick('7'));
document.querySelector('#n8').addEventListener('click',
numberClick('8'));
document.querySelector('#n9').addEventListener('click',
numberClick('9'));

// 연산자 이벤트
let operator_Click = (op) => () =>{
    operator = op;
    operator_1.value = op;
    if (num1 && !num2){
        result.value = '';
    }else if (operator == 'C'){
        console.log('reset');
        operator_1.value = '';
        result.value = '';
        num1 = operator = num2 = '';
    }else if (!num1){
        alert('숫자를 먼저 입력하세요.')
    }
}

document.querySelector('#plus').addEventListener('click',
numberClick('+'));
document.querySelector('#minus').addEventListener('click',
numberClick('-'));
document.querySelector('#divide').addEventListener('click',
numberClick('/'));
document.querySelector('#multiply').addEventListener('click',
numberClick('*'));
document.querySelector('#clear').addEventListener('click',
numberClick('C'));



// operator_Click 함수를 호출하면 매개변수 op를 operator변수에 해당
// num1의 값이 있고 num2의 값이 없을때 매개변수 op를 우측상단 input요소의 value
// 의 값으로 입력
// C는 초기화
// num1에 값이 없으면 숫자를 입력하라는 경고창이 뜸

// if(operator == '+'){
//     result_1.value = parseInt(num1) + parseInt(num2);
//     console.log(result_1.value);
// }else if(operator == '-'){
//     result_1.value = parseInt(num1) - parseInt(num2);
//     console.log(result_1.value);
// }else if(operator == '*'){
//     result_1.value = parseInt(num1) * parseInt(num2);
//     console.log(result_1.value);
// }else if(operator == '/'){
//     result_1.value = parseInt(num1) / parseInt(num2);
//     console.log(result_1.value);
// }

// switch 문이 좀더 깔끔하다
switch(operator){
    case '+' :
        result.value = parseInt(num1) + parseInt(num2);
        console.log(result_1.value);
        break;
    case '-' :
        result.value = parseInt(num1) - parseInt(num2);
        console.log(result_1.value);
        break;
    case '*' :
        result.value = parseInt(num1) * parseInt(num2);
        console.log(result_1.value);
        break;
    case '/' :
        result.value = parseInt(num1) / parseInt(num2);
        console.log(result_1.value);
        break;
    default :
        break;
}