


// -----------------------Turnery Oprator  simple oprator hai simple--------------------------  
// simple task and  short type caculation ke liye  use kiya jata hai mtlb  ture yaa false me value ke liye 



/*let age = 10;
let ans  = (age>18) ? "woot" : "not woot";
console.log(ans); */

//------------------------------------ function Expression --------------------------------
// jub kisi fuction ko varible ke under store karna hota hai tb fuction ecpess ka use hota 

// function ans (x){
//  console.log(x)
//   }
// ans(9) 


// ---------------------------------This is array and object destructure----------------------------------------------------------

/*
let Arr = [34,45,67,47] ;
const [a,b,c,d] = Arr;
console.log(a,b,c,d) */


// -------------------------------object ke under  hmesha key ka name smame hona chahie---------------------------------------------
/*
let obj1 = {
    id1 : "101",
    age : 34,
    useName : "Ashutosh Makode",
}

const {id1,age,useName} =obj1;
console.log(id1,age,useName);  */

//------------------------------------ default This is a simple--------------------------------

// (1)
/*
function Mynum(x,y,z=10){
    console.log(x+y+z)
}

Mynum(20,30);
*/

// (2)

/*function addTwonuber(a,b,c=40){
    return a+b+c;
}

let logic = addTwonuber(10,30);
console.log(logic);*/


// ------------------------------------------string interpolation--------------------------

// string ke sath me opration perform karn ha ke liye use kiya jata hai 
// varibable merge 
// concatinet


/*let student={
 userName: "Ashitosh Makode ",
 age : 12,
}
let ans = `hello i am ${student.userName} and i am ${student.age}`;
console.log(ans) */


// ------------------------------------------curring ---------------------------------
// 1 esa function  single perameter 
// ------------------------------------------lexical scoping ----------------------------
// (()) outer function ke varible ko inner function ke varible ke under use karte 
// ------------------------------------------deep copy sello copy --------------------------

// Ero functioon kr sath kam nhi karta he 
// this ka use object ke under agar function ko calll kar rha use case 
// privat varible ke varible ko inicilation ko karne ke liye karta hai

// const obj ={
//     id1 : 101,
//     nameg: "Ashittosh Makode ",
//      dat : function(){
//       console.log(this.id1,this.nameg)
//       console.log(this)
//     }
//     }

// obj.dat()

// shallow copy mtlb hota hai warignal :  1 object ko dusre object me copy karna 

// const mybet={
//     id2 : 1011,
//     betrray: "Exide",
//     CompaneyInfo:{
//   name3 : "Exide Private limited ",
//   revanue : 1000,
//     }
    
// }
// const mybe2= mybet;
// mybe2.id2=100;
// console.log(mybet)
// console.log(mybe2)
//----------------------------------------------------------------------------------tt-------------------------------------------------------------->

// const mybet = {
//     id: 1011,
//     battery: "Exide",
//     companyInfo: {
//         name: "Exide Private Limited",
//         revenue: 1000,
//     }
// };

// const mybe = { ...mybet };  // Shallow copy

// mybe.id = 200;  // sirf copy wale object me change hoga
// mybe.companyInfo.revenue = 5000; // nested object shallow copy me shared hota hai

// console.log(mybet);  
// console.log( mybe);


//-----------------------------------------------------------------This is exampleof deep copy---------------------------------------------------->

// const mybet = {
//     id: 1011,
//     battery: "Exide",
//     companyInfo: {
//         name: "Exide Private Limited",
//         revenue: 1000,
//     }
// };

// // Deep Copy
// const mybe = JSON.parse(JSON.stringify(mybet));

// mybe.id = 200;
// mybe.companyInfo.revenue = 5000;

// console.log("Original :", mybet);
// console.log("Copy :", mybe);


// --------------------------------------------------------------------------------------------------------------------------------------------

const mybet = {
    id: 1011,
    battery: "Exide",
    companyInfo: {
        name: "Exide Private Limited",
        revenue: 1000,
    }
};

// Deep Copy using Lodash
// const mybe = _.cloneDeep(mybet);
// const mybe = structuredClone(mybet);
const mybe = JSON.parse(JSON.stringify((mybet)));



mybe.id = 200;
mybe.companyInfo.revenue = 5000;

console.log( mybet);
console.log( mybe);

