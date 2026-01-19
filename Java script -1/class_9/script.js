

// Convert Binary to Decimal

/*let binary = "1011";
let decimal= parseInt(binary, 2); //------------>parseInt() string ko integer number me convert karta hai.
console.log(decimal);*/


// Convert Decimal to Binary

/*let decimal  = 11;
let binary = decimal.toString(2); // Number ko string me convert karna
console.log("Binary:", binary);*/



// Convert Decimal to Hexadecimal

/*let octal = "157";
let decimal = parseInt(octal, 8);
console.log("Decimal:", decimal);*/


// Convert Hex to Binary

/*let hex = "1A3";
let binary = parseInt(hex, 16).toString(2);
console.log("Binary:", binary);*/


// Convert Decimal to Hexadecimal

/*let decimal = 255;
let hex = decimal.toString(16).toUpperCase();   // Choti letters (a, b, c...) ko badi letters (A, B, C...) me convert karta hai.

console.log("Hexadecimal:", hex);*/

// Write a program to check whether a number is Even or Odd.

// function OddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num, "is a Even Number");

//     } else{
//         console.log(num, "is a Odd Number");

//     }

// }
// OddEven(5);

// Given an integer, check if it is divisible by 5 and 11.

// function Divisible(num) {
//    if (num % 5 === 0 && num % 11 === 0) {
//         console.log(${num} It is Divisible by 5 and 11);

//    }
//    else{
//         console.log(${num} It not Divisible by 5 and 11);
//    }

// }
// Divisible(55);

// Check whether a number is positive, negative, or zero.

// function Positive_Negative(num) {
//     if (num > 0) {
//         console.log(${num} is positive number);

//     }
//     else if(num === 0){
//         console.log(${num} is zero number);

//     }
//      else {
//         console.log(${num} is negative number);

//     }

// }

// Positive_Negative(0);

// Check if a number is divisible by 2, 3, and 5 at the same time.

// function Divisible(num) {
//    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
//         console.log(${num} It is Divisible by 2,3 and 5);

//    }
//    else{
//         console.log(${num} It not Divisible by 2,3 and 5);
//    }

// }
// Divisible(55);

// *********************************REVERSING & PALINDROME*********************************

// Reverse a number without using built-in functions.

// function RevANumber(num) {
//  let reversed = 0   ;
//    while (num> 0) {
//      let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);

//    }

// let result = reversed;

//   console.log(result);
// }

// RevANumber(123);


// Check whether a given number is a palindrome.

// function PALINDROMENumber(num) {
//   let reversed = 0;
//   let compareNum = num;
//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   let result = reversed;
  
//   if (result === compareNum) {
//     console.log("it is a Palindrome Number");
    
//   }else{
//     console.log("it is not a Palindrome Number");

//   }

// //   console.log(result);  
// }

// PALINDROMENumber(111222111);



// Check whether the sum of the first and last digit of a number is equal.


// Count how many digits in a number.

// function DigitCount(num) {
//  let count = 0   ;
//    while (num> 0) {
//      let digit = num % 10;
//     num = Math.floor(num / 10);
//     count++;

//    }

// console.log(count);

// }

// DigitCount(1684854688);



// Check whether the reverse of a number is divisible by 3.


// function RevANumber(num) {
//  let reversed = 0   ;
//    while (num> 0) {
//      let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);

//    }

// let result = reversed;

//   if (result % 3=== 0) {
//     console.log("it is divisible by 3");
    
//   } else {
//     console.log("it is not divisible by 3");
    
//   }
// }


// RevANumber(18);


// **************************************DIGIT OPERATIONS**********************************************

// Find the sum of digits of a number

function DigitSum(num) {
 let sum = 0   ;
   while (num> 0) {
     let digit = num % 10;
     sum += digit;
    num = Math.floor(num / 10);


   }

console.log(sum);

}

DigitSum(4555528);


// Find the product of digits of a number.

// function DigitProduct(num) {
//  let sum = 1   ;
//    while (num> 0) {
//      let digit = num % 10;
//      sum *= digit;
//     num = Math.floor(num / 10);


//    }

// console.log(sum);

// }

// DigitProduct(27);

// Find the largest digit in a number.


