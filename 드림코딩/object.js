 //Objects
// object = {key : value};
//1. literals and property 
 const obj1 = {};
 const obj2 = new Object();

 function print(person) {
     console.log(person.name);
     console.log(person.age);
 }

 const danhee = { name : 'danhee', age : 5};
 print(danhee);

 danhee.hasJob = true;
 console.log(danhee.hasJob);

 delete danhee.hasJob;
 console.log(danhee.hasJob);
 //2. Computed properties(키를 받아올때 유용하게 사용 할 수 있음)
 //                               밑으로 이어서
 console.log(danhee.name);
 console.log(danhee['name']);
 danhee['hasJob'] = true;
 console.log(danhee.hasJob);

 function printValue(obj, key) {
     console.log(obj[key]);
 }
 printValue(danhee, 'name');
 printValue(danhee, 'age');

 //3. property value shorthand
 const person1 = {name : 'ann', age : 4};
 const person2 = {name : 'koo', age : 2 };
 const person3 = {name : 'joh', age : 10 };
 const person4 = {name : 'hyun', age : 6};
 const person5 = new Person('danhee', 28); // 'new'새로운 인스턴스 객체를 생성하고 초기화
 console.log(person5);
 //4. constructor function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
}
//5. in operator
console.log('name' in danhee);
console.log('job' in danhee);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for(key in danhee) {
    console.log(key);
}

// for (value in iterable 반복문)
const array = [1,2,3,4];
/* for(let i=0; i < array.length; i++ ) {
    console.log(array[i]);
} */
// -> 더 쉽게 쓰는 방법은
for(value of array) {
    console.log(value);
}

//7. cloning
const user = { name : 'heri', age:'15'};
const user2 = user;
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//더 간결하게 
//const user4 = Object.assign({}, user);
//console.log(user4)l
