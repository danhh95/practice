'use strict'

//Arrayπ

//1. declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[fruits.length -1]); //κ°μ₯ λ§μ§λ§ μΈλ±μ€μ λͺ«μ κ°μ Έμ€κΈ°


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
//push : λ€μ λ£κΈ°
//pop : λ€μ λΉΌμ€κΈ°
fruits.push('π', 'π');
console.log(fruits);
fruits.pop();
console.log(fruits);
//unshift : μμλ§ λ£κΈ°
fruits.unshift('π₯');
console.log(fruits);
//shift : μμμλ κ° λΉΌκΈ°
fruits.shift();
fruits.shift();
console.log(fruits);
//splice : νΉμ  μΈλ±μ€ κ° μ­μ 
fruits.push('π', 'π');
console.log(fruits);
fruits.splice(0,3);
console.log(fruits);
fruits.splice(0,1, 'π₯­','π₯');
console.log(fruits);

//concat : λ λ°°μ΄ λΆμ΄κΈ°
const fruits2 = ['π', 'π'];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);
//5. searching
//find index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π₯­'));
//includes
console.log(fruits.includes('π'));
//lastIndexOf
console.log(fruits.lastIndexOf('π'));
