
// Function is set line  and block of ConvolverNode 

/*advantages of function -
Readablitey - Easy to understands
Readablitey - Write once and use anytime and anywere
better performance - due to  less number of lines our code will be fast */




// Types of Function
// 1. Normal function
// 2. Arrow function 
// 3. collback function
// 4. Higer order function
// 5. Pure function
// 6. inpure function
// 7. anonymous function
// 8. IIFE
// Examples of normal function


/* arrow function->
1.its a concise or shorter syntex to perform a task.
2.arrow function do not support hoisting.*/

// normal function

 /*function addTowNo (x,y) {
     console.log(x+y);
 }
  addTowNo(3,6);*/


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function without return !!!!!!!!!
/*(a)arrow function 

 let add=(x,y)=>{
    console.log(x+y);
}
add(40,90)


// (b) arrow function 2nd syntex

 let arr=(x,y)=>console.log(x+y);
 arr(4,6); */


 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!  function with return !!!!!!!!!!!!!!!!!!!
/*simple function with return 


  function sumOfTwoNo(x,y){
   return x+y;
    }
 let ans=sumOfTwoNo(8,9)
 console.log(ans)

 console.log(sumOfTwoNo(8,8)); 2nd way jab aap function ke op ko function ke bahar print karte hai*/




 // !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with return  !!!!!!!!!!!!!!!!!!!

/*single line  arrow function 

 let sumOfThree=(x,y,z)=>x+y+z;

 let ans = sumOfThree(6,7,2)
 console.log(ans)
 
 console.log(sumOfThree(6,7,2))
 */


 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with multiple liens/

/*let complexCalculation=(x,y)=>{
      console.log(x+y);
      console.log(x-y);
      console.log(x*y);
      return x**y;
 }



 let output=complexCalculation(10,2);
  console.log(output); */



//   Arrow function hosting usnig const

const print2=(a,b)=>{
     return a+b;
}

console.log(print2(6,7))
 

