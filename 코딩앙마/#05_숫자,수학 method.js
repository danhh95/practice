/* - to String()
10진수->2진수/16진수

let num = 10;
num.toString(); // "10"
num.toString(2); // "1010" ->10을 2진수로 나눈 값

let num2 = 255;
num2.toString(16); // ff ->266를 16진수로 나눈 값

- Math.

Math.ceil() : 올림
let num1 = 5.1; 
let num2 = 5.7;
Math.ceil(num1); //6 소수점 상관없이 올림
Math.ceil(num2); //6

Math.floor() : 내림
Math.round() : 반올림
let num1 = 5.1; 
let num2 = 5.7;
Math.ceil(num1); // 5  
Math.ceil(num2); // 6

- toFixed() : 소수점 자릿수 //통계 내기에 적합 
                            //!단점:숫자가 아닌 문자열이라 숫자로 바꿔줘야함
let num = 30.1234;
num.toFixed(2); -> "30.12" //소수점 뒤에 2자리가지만 나타내기
num.toFixed(0); -> "30"
num.toFixed(6); -> "30.123400" //모자른 수는 0으로 채워줌
Number(num.toFixed(6)); -> 30.123400 //숫자로 변신!

- isNaN() //헷갈리지만 그냥 외워
let x = Number('x'); //NaN

x == NaN //false
x === NaN //false
NaN == NaN //false

isNaN(x) //true
isNaN(3) //false

- parent() //숫자까지 읽고 문자는 반환 안읽음. 

let margin = '10px';
parseInt(margin); //10 
Number(margin); //NaN
let redColor = 'f3';
parseInt(redColor); //NaN

parseFloat() // 부동 소수점을 반환
let padding = '18.5%';
parseInt(padding); //18 소수점 무시하고 정수만 출력
parseFloat(padding); //18.5
 */