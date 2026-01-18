

// Exmaple 

// const ob1 = {
//     id1: 101,
//     myName:"Ashitosh Makode"
// };

// function print() {
//     console.log(this.id1);
// }

// print.call(ob1);  



// let arr = [1,2,3,4,5,6,7]
// console.log(arr.length)

// arr.length=0;
// arr[6]=20;
// console.log(arr[2],arr.length)



/*closer : closer java script ke under object hote hai ! closer is combination of two things normal function and legical scope  ! closer is a object function 
use : data ko safely change karne ke liye closer ka use karte kai  ! closer  varible address ko writen kar ke rkhete hai 
disadvantes : kisi object ko use nhi kar bna rhe he ! memorey ka vestge krta ! 
Sollution : agar aap onject use nhi kar rhe to usko null se insilation karna chaiye */




/*
function address(){
let x = 10;

function addressTwo(){
console.log(x)
}
return addressTwo;
}

let add3 = address()
add3()
*/

// --------------------------------------------------------------------------------------------
// simple count finction 
/*
function createCounter() {
  let count = 0;   

  function increment() {
      count++;
    console.log(count);
  }

  return increment; 
}

let counter1 = createCounter();

counter1(); 
counter1(); 
counter1();  

*/
// ---------------------------------------------------------------------------------------
// this is a simple exmple of count 

// function counter() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }


// let x = counter();
// x();
// x();
// x();


// setTimeout(function() { // Step 1
//     console.log("Step 1: Wake up");

//     setTimeout(function() { // Step 2
//         console.log("Step 2: Brush Teeth");

//         setTimeout(function() { // Step 3
//             console.log("Step 3: Have Breakfast");

//             setTimeout(function() { // Step 4
//                 console.log("Step 4: Go to Work");

//                 setTimeout(function() { // Step 5
//                     console.log("Step 5: Start Working");
//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);



// function FetchAPI(method,url) {
// const data =new XMLHttpRequest()
// data.responseType="json"
// data.open(method,url);
// data.send()
// console.log(data);

// }


// FetchAPI("GET","https://jsonplaceholder.typicode.com/posts");


// -------------------------------------------------------------------------------------------------------------

// function FetchAPI(method, url) {
//   const data = new XMLHttpRequest();

//   data.responseType = "json";

//   data.open(method, url);

//   data.onload = function () {
//     // jab data aa jaye tab chalega
//     console.log("Response:", data.response);
//   };

//   data.onerror = function () {
//     console.log("Error while fetching data");
//   };

//   data.send();
// }

// FetchAPI("GET", "https://jsonplaceholder.typicode.com/posts");

// ----------------------------------------------------------------------------------------------------------------S-------


// function callbackHall(method, url, printData) {
//   const Object1 = new XMLHttpRequest()
//   Object1.responseType = "json"
//   Object1.open(method, url)
//   Object1.send()
//   Object1.addEventListener("load", () => {
//     printData(Object1.response)
//   })

// }
// callbackHall("GET", "https://fakestoreapi.com/products", (data) => {
//   console.log(data)
//   callbackHall("GET", `https://fakestoreapi.com/products/category/${data[0].category}`, (data) => {
//     console.log(data)
//     callbackHall("GET", `https://fakestoreapi.com/products/${data[0].id}`, (data) => {
//       console.log(data)
//     })
//   })

// })


// -------------------------------------------------------------------------------------------------------------------


/*Promish : Promish is object in java script : which gives assurance / gurrantee i will give u somthing 
        1.Pading (default) const p = new promishm(Resolve Reject)
          a.than
          b.catch

        2.resolve (fulfiled)
        3.reject  (Eroo)
        
 
  1.Pading (default) 
    const p = new promishm( (resolve,reject)=>{})

resolve ka result dekhne ke liye than ka use kiya jata hai
reject ka result dekhne ke liye than ka use kiya jata hai
*/

// function addTwoNumber(x, y) {
//   try {
//     if (typeof x === "number" && typeof y === "number") {
//       return x + y;
//     } else {
//       throw new Error("Invalid input");
//     }
//   } catch (e) {
//     console.log("This is an error");
//   }
// }

// let ans = addTwoNumber(20, 40);
// console.log(ans);



// function addTwonuber(x,y){
// try {
// return x+y;
// }
// catch(e){
// console.log(e)}

// }

// let ans = addTwonuber(20,40);
// console.log(ans);



// function addTwonuber(a,b){
// return a+b
// }

// let ans = addTwonuber(20,40)
// console.log(ans)



// let arr = [10,20,30,40,50,60];
// arr.push(1);
// console.log(arr)


// let arr1 = [1,5,9,0,9,0,9];
// arr1.pop();
// console.log(arr1);



// let add = [10,90,80,90,89];
// add.unshift(770);
// console.log(add);

// let add2 = [10,90,80,90,89];
// add2.shift();
// console.log(add2);
// console.log()


// let arrary1 = [10,20,30,40,50,60];
// let length = arrary1.length;
// console.log(arrary1);
// console.log(length)


// let arr = [10, 20, 30, 40, 50];

// let length = arr.length;
// console.log(length);


// let arrar3 = [10,30,90,60,465,70,79]
// console.log(arrar3[1])


function add(){
  let age = "Ashitosh Makode";
  function add2(){
    console.log(age);
    function add3(){
      console.log(age);
    }
     add3();
  }
  add2();
 
}
 add();
