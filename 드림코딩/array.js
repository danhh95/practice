'use strict'

//Array🎉

//1. declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits = ['🍒', '🍍'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[fruits.length -1]); //가장 마지막 인덱스의 몫을 가져오기


console.clear();
//3. looping over an array

// - for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// - for of
for(let fruit of fruits) {
    console.log(fruit);
}

// - forEach
fruits.forEach((fruit) => console.log(fruit))

//4. addition, deletion, copy
//push : 뒤에 넣기
//pop : 뒤에 빼오기
fruits.push('🍉', '🍇');
console.log(fruits);
fruits.pop();
console.log(fruits);
//unshift : 앞에만 넣기
fruits.unshift('🥝');
console.log(fruits);
//shift : 앞에있는 값 빼기
fruits.shift();
fruits.shift();
console.log(fruits);
//splice : 특정 인덱스 값 삭제
fruits.push('🍌', '🍈');
console.log(fruits);
fruits.splice(0,3);
console.log(fruits);
fruits.splice(0,1, '🥭','🥑');
console.log(fruits);

//concat : 두 배열 붙이기
const fruits2 = ['🍌', '🍈'];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);
//5. searching
//find index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥭'));
//includes
console.log(fruits.includes('🍉'));
//lastIndexOf
console.log(fruits.lastIndexOf('🍉'));
