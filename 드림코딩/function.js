//1. Function
// 프로그램을 구성하는 기본적인 요소

//function name(param1, param2) {body ``` return;}
//하나의 function에 하나의 값만  one function === one thing
//naming : doSomething, command, verb

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const danhee = { name : 'danhee'};
changeName(danhee);
console.log(danhee);

//3. Local scope / scope란, 밖에서는 볼 수 없고, 안에서는 볼 수 있다. 
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable 대괄호 안에서만 호출 가능 . 밖에선 호출x
    console.log(globalMessage);
    function printAnother() { //자식은 부모에게 정의 된 내용은 확인가능
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage); 
}
//printMessage();

//4. Return value
function sum(a,b) {
    return a+b;
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);

// function expression
const print=function(){
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//Callback function
function randomQuiz (answer, printYes, printNo) {
    if(answer == 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};

const printNo = function () {
    console.log('no!');
};
randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

//Arrow function  function과 {}를 생략가능하게 만들어준 함수
//always anonymous

/* const simplePrint =function() {
    console.log('simplePrint!');
};
simplePrint(); ->  이렇게 복잡한 함수를 arrow 함수를 사용해서 아래처럼 간결하게*/ 

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    return a * b;
};
simplePrint();


// IIFE : Immediately Invoked Function Expression
// 따로 호출하지않아도 바로 값 출력가능 ㅇ0ㅇ
(function hello() {
    console.log('IIFE');
})();

//QUIZ
const calculate = function() {
    console.log(5*5);
};
calculate(); 