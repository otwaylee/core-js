/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;

console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello'; // string literal
const single = 'hello';
const backtick = `hello ${10 + 5}`;

console.log(typeof backtick);

const str = new String('hello'); // constructor function 생성자 방식으로 만듦
console.log(str);
// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150; //number literal
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.clear();

const obj = {
  //object literal
  name: 'tiger',
};

console.log(obj);

const object = new Object({ name: 'ayl' }); //constructor function

console.log(object);
// 8. 고유한 식별자(unique identifier)

const id = Symbol('iamahyeong');
const id2 = Symbol('iamahyeong');

console.log(typeof id);
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
console.clear();
// string
const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    a + b;
  },

  sayHi: function () { // 1 normal function 
    return 'hello';
  },

  sayHi2: () => { // 2  arrow function 
    return 'hi';
  },

  sayHi3() { // 3 concise method 
    return 'hola';
  },
};

// Array

const arr = new Array(2);
const arr1 = [10, 100, 1000];

console.log(arr[0]);

console.clear();
// function
function 더하기(a, b) {
  return a + b;
}
const 결과 = 더하기(1, 2);

console.log(결과);
// this
