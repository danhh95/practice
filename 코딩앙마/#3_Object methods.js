let n = "name";
let a = "age";

const user = {
    [n]: "danhee",
    [a]: 28,

};

console.log(user);


function makeObj(key, val) {
    return {
        [key]: val,
    };
}

const obj = makeObj("name", 28);

console.log(obj);
//key가 불특정할 때 사용하기 좋음
//------------------------------------------------------
const info = {
    id: 'koo',
    pw: 1234,
};

const info2 = Object.assign({}, info);
info2.id = 'kim';

console.log(info);
console.log(info2);
//------------------------------------------------------
const visitor = {
    id : 'lee',
    age : 10,
};

const result = Object.keys(visitor);
console.log(result);
//property 키 값만 배출

const visitor2 = {
    id : 'lee',
    age : 10,
};

const result2 = Object.values(visitor2);
console.log(result2);
//value 값만 배출

const visitor3 = {
    id : 'lee',
    age : 10,
};

const result3 = Object.entries(visitor3);
console.log(result3);
//키, 값 둘 다 배출
//------------------------------------------------------

let arr = [
    ["mon", "월"],
    ["tue", "화"],
];

const result4 = Object.fromEntries(arr);
console.log(result4);
//새로운 객체로 만들어줌
