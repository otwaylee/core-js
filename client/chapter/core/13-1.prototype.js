/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 객체의 프로토타입 [[Prototype]] => __proto__
 const animal = {
  legs: 4,
  tail: true, 
  stomach: [],
  set eat(food){ //setter
    this.stomach.push(food);
  },  
  get eat(){ //getter
    return this.stomach
  }
 }

const tiger = {
  pattern : '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근하다.`
  },
  __proto__: animal
}

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}


const 한라산호랑이 ={ 
  color: 'orange',
  name: '한돌이',
  __proto__: tiger
}


//  animal.setEat('고기')

// 생성자 함수 

function Animal (){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

// const a1 = new Animal();

function Tiger(name) {
  Animal.call(this); 
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target){
    return `${target}에게 조용히 접근한다.`
  }
}

Tiger.bark = function(sound){
  return sound
}


// Tiger.prototype = a1 
const 금강산호랑이 = new Tiger('금순이');

/* 함수의 메서드(함수의 능력) */
//call , , ,
//apply [, , ]

//bind - 즉시 실행하지 않음 

//throttle, debounce

function sum(a, b, c){
  console.log(this);
  return a + b + c
}

// sum.call('hello', 1 ,2, 3)
// sum.apply('hello', [1 ,2, 3])
const b = sum.bind('hello', 1 ,2, 3)


// this를 변경하고 arguments를 따로 전달해야할 때 다음과 같이 활용 

const user = {
  sayHi(){
    function sayBye(){
      console.log(this)
    }
    sayBye.call(this)
  }
}










