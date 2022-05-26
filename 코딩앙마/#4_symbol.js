//Symbol : 유일성 보장

//다른 개발자가 만들어 놓은 객체
const user = {
    name : "danhee",
    age : 28,
};

//내가 작업
//user.showName = function(){}.
const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
} ;
user[showName]();

//사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`Her ${key} is ${user[key]}.`);
}