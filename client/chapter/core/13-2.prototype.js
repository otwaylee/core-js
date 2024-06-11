/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속 
// 3. 생성자 함수 모던 방식 class

class Animal {
  legs = 4
  tail = true 

  constructor(name){
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }
  get eat(){
    return this.stomach
  }
  set eat(food){
    this.stomach.push(food)
  }
}
const a = new Animal('포동이');

class Tiger extends Animal {
  static options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo: '심선범'
  }
  constructor(name){
    super(name)
    this.pattern = '호랑이무늬'
  }
  static bark(sound){
    return sound
  }
  hunt(target){
    return `${target}에게 조용히 접근한다.`
  }
}

const 호랑이 = new Tiger('호돌이');

class Array extends Object{ 
  constructor (){

  }
  forEach(callback, arg){
    
  }
  reduce(){

  }
  map(){

  }
  static isArray(){

  }
  static from(){

  }
}
new Array()



// function User(name,address,age){
  
//   this.name = name;
//   this.address = address;
//   this.age = age;

//   this.sayHi = function(){
//     return `안녕 ? 난 ${this.name} 이야 만나서 반가워~!`
//   }
// }


// const person1 = new User('심','서울시 중랑구',40)
// const person2 = new User('beom','서울시 ',35)
// const person3 = new User('tiger','서울시',30)
// const person4 = new User('kindtiger','서울시 중랑구',10)
// const person5 = new User('이아영','서울시 중랑구',25)