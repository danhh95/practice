'use strict'
//class : template 틀
//object : instance of a class 채워주는

//1. Class declarations
class Person { 
    //constructor
 constructor(name, age) {
     //field
     this.name = name;
     this.age = age;
 }   
 //methods
 speak() {
     console.log(`${this.name} : hello!`);
 }
}
const danhee = new Person('danhee', 20);
console.log(danhee.name);
console.log(danhee.age);
danhee.speak();

// 2.Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value<0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


//3. Fields (public, private)

//4. static
class Article {
    static publisher = 'Koo';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance 상속과 다양성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color ~!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{} 
class Triangle extends Shape{
    draw(){
        super.draw(); // 위에 원조 값도 불러 오고싶을때
        console.log('🔺'); //새로운 결과를 호출하기 위해서 추가
    }
    getArea(){
        return (this.width * this.height) / 2; //삼각형 크기 구하기
    } //overriding하다
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6. instance of
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);

