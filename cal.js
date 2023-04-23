// 숫자 1 + 연산자 + 숫자 2
// 변수 3개
// 숫자 1 = numOne
// 숫자 2 = numTwo
// 연산자 = operator
// 숫자를 클릭했을 때 operator에 값이 있으면 numTwo
// 값이 없다면  numOne
// 연산자를 클릭했을때 numOne에 값이 없다면 숫자를 입력하라는 경고창이 뜬다
// numOne 의 값이 있고 numTwo에 값이 없다면 해당연산자를
//  operator 변수에 할당한다.
// numOne 과 numTwo에 모두 값이 있다면 연산자를 클릭하더라도 아무런 기능을 하지 않기때문에 변수를 변경하지않는다.
//  = 을 클릭했을 때 numOne 과 numTwo 변수가 모두 값을 가지고 있다면 operator 변수로 연산한다
// 예를 들어 operator 변수가 *라면  numOne*numTwo

// 변수
let numOne ='';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// html 요소를 변수로 사용할 경우 헷갈리지 않기 위해서 $를 붙인다


// 숫자
const onClickNumber = (number) => () => {
    if(operator){
        numTwo += number;
    }else{
        numOne += number;
    }
    // console.log('numOne :' + numOne, 'numTwo :' + numTwo, 'operator : ' + operator);
    $result.value += number;
}



// 숫자 버튼에 클릭 이벤트를 생성하고, 클릭 시 onClickNumber 함수가 실행
// onClickNumber 함수는 operator 변수에 값이 있다면 numTwo 없다면 numOne에 값을 할당하는 기능.


// 연산자
const onClickOperator = (op) => () => {
    if (numOne && !numTwo){
        operator = op;
        $operator.value = op;
        $result.value = '';
    }else if(!numOne){
        alert('숫자를 먼저 입력하세요.');
    }
}

const onClikcClear = () => () => { 
    console.log('reset');
    $operator.value = '';
    $result.value = '';
    numOne = operator = numTwo = '';
}

// document.querySelector('#plus').addEventListener('click',onClickNumber('+'));
// document.querySelector('#minus').addEventListener('click',onClickNumber('-'));
// document.querySelector('#divide').addEventListener('click',onClickNumber('/'));
// document.querySelector('#multiply').addEventListener('click',onClickNumber('*'));
// document.querySelector('#clear').addEventListener('click',onClickNumber('C'));



// onClickOperator 함수를 호출하면 매개변수 op를 앞서 만든 operator 변수에 할당하고 numOne의 값이 있고 numTwo 의 값이 없을 때 매개변수 op를 우측상단 input요소의 value값으로 입력한다.
// 숫자 1 + 연산자 + 숫자 2 = 결과값 에서 숫자1 + 연산자를 의미 C는 clear 기능 이므로 다른 연산자와 달리 클릭하면 모든값을 초기화 numOne의 값이 없다면 숫자를 먼저 입력하라고 한다

// 계산
const onClickCalculator = () => () => {
    switch(operator){
        case '+' :
            $result.value = parseInt(numOne) + parseInt(numTwo);
            console.log($result.value);
            break;
        case '-' :
            $result.value = parseInt(numOne) - parseInt(numTwo);
            console.log($result.value);
            break;
        case '*' :
            $result.value = parseInt(numOne) * parseInt(numTwo);
            console.log($result.value);
            break;
        case '/' :
            $result.value = parseInt(numOne) / parseInt(numTwo);
            console.log($result.value);
            break;
        default :
            break; // 숙제다 흐에에엥[ㅔ
    }
}

document.querySelector('#num-0').addEventListener('click',onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click',onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click',onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click',onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click',onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click',onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click',onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click',onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click',onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click',onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#devide').addEventListener('click',onClickOperator('/'))
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#clear').addEventListener('click', onClikcClear('C'));
document.querySelector('#calculate').addEventListener('click',onClickCalculator())