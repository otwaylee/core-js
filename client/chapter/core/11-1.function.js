/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

//default parameter
// 함수 선언
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  //let priceA = 1000;
  //let priceB = 3000;
  // if(priceC === undefined) priceC = 0;
  // if(!priceC) priceC = 0;
  // priceC ||= 0;
  // priceC ??= 0;

  return priceA + priceB + priceC + priceD;
}
// 함수 호출
const result = calcPrice(1000, 3000);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 함수의 이름을 잘 지어야 한다.(동사) / 가독성 => 읽었을 때 바로 기능을 알 수 있다.
// 2. 전역의 오염을 막는다.
// 3. 하나의 기능만을 수행해야 한다.
// 4. 재사용이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// 내가 한 코드
/* function rem(pxValue, base = 16){
  pxValue = parseInt(prompt('px을 입력해주세요'));
  base = parseInt(prompt('base를 입력해주세요'));

    let value = pxValue / base + 'rem'
    return value;


}

console.log(rem())
 */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {
  if (!pxValue) {
    throw new Error('rem함수의 첫 번째 인수는 필수 입력 값입니다.');
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10);
  }
  if (typeof base === 'string') {
    base = parseInt(base, 10);
  }

  return pxValue / base + 'rem';
}

// parseFloat
// parseInt

console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

// css(node: string, prop: string, value: number|strung) : string;

// 점 표기법 => 변수로 사용 x
// 대괄호 표기법 => 변수로 사용 O
const first = document.querySelector('.first');
function setStyle(node, prop, value) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof prop !== 'string')
    throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.');

  if (!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값입니다.');

  node.style[prop] = value
}

setStyle('.first', 'color', 'blue');

function getStyle(node, prop) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인자는 문자 타입이어야 합니다.');

  return getComputedStyle(node)[prop]
}

getStyle('.first', 'fontSize'); // 32px

/*
1. function name 
2. argument (함수의 실행부)
3. parameter 
4. return value 
5. validation 
6. Test Diven Development (TDD)


*/


function css(node, prop, value) {
  // if (!value){
  //   //getter   
  //   return getStyle(node, prop)
  // }else {
  //   //setter
  //   setStyle(node, prop, value)
  // }

  return !value ? getStyle(node, prop) : setStyle(node, prop, value)
}



css('.first', 'color', 'red') // setter

css('.first', 'color') //getter


// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
