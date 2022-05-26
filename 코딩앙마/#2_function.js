//생성자 함수 : 상품 객체를 생성해보자

/* new를 이용해서 객체를 생성한다.
function User(name) {
    this.name = name;
    
}

const user=new User('Mike');
처럼 사용한다. */

/* function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}
let user5 = new User('Han',40);
user5.sayName(); //'Han'
 */

function Item(title, price){
    //this = {};

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    };
    //return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 3000);
const item3 = new Item("지갑", 3000);

console.log(item1, item2, item3);

item1.showPrice();