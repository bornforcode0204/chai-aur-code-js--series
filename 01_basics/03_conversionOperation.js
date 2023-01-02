let score = "61";

console.log(typeof score); // string in lower case

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));   // number in lower case

let valueInNumber1 = "33abc";
let valueInNumber2 = Number(valueInNumber1);
console.log(typeof (valueInNumber2));   // number in lower case
console.log(valueInNumber2);   // NaN (Not a number)

let valueInNumber3 = null;
let valueInNumber4 = Number(valueInNumber3);
console.log(typeof (valueInNumber4));   // number in lower case
console.log(valueInNumber4);   // 0

let valueInNumber5 = undefined;
let valueInNumber6 = Number(valueInNumber5);
console.log(typeof (valueInNumber6));   // number in lower case
console.log(valueInNumber6);   // NaN

// "33"  => 33
// "33abc" => NaN
// true => 1; false => 0;


let isLoggedIn = "Shiv";
 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "Shiv" => true

let num = 22;

let stringNum = String(num);

console.log(stringNum);
console.log(typeof stringNum); // string in lower case