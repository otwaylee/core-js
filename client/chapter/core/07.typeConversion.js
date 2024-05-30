/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
console.log(days + '');

let friends = undefined;
console.log(friends + '');

// boolean
let isClicked = true;
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let isMarried = true;
console.log(Number(isMarried));

// string
let num = '100';
console.log(Number(num));

console.log(typeof (num * 1));

// numeric string

const width = '120.5px';

console.log(parseInt(width, 10));
console.log(parseFloat(width, 10)); //radix 표시하기 - 진수

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

// 위에 나열한 것 이외의 것들
console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean(''));
