// Array methods in java script

// 1.Push() incert on last index
// 2.pop()  delete on last index
// 3.unshift() incert on frist index
// 4.shifht()  delete on frist index
// 5.splice () incert (1,0,45) delete  (1,1,) update (1,1,45)



// let arr =[10,40,45,68,8];
// arr.push(12)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(50)
// arr.shift()
// arr.splice(0,0,1)
// arr.splice(1,1)
// arr.splice(1,1,78)
// console.log(arr)


// slice ko  new varible me store me krna padega 

// let arr =[10,40,45,68,8];
//  let subpart = arr.slice(1,3)
// console.log(subpart)


// this is a map 

// let arr =[10,40,45,68,8];
// let subpart = arr.map((i)=>{
//     return i*2
// })
// console.log(subpart);



// let arry  = [1,2,3,5,6,9]
// let newarray = arry.map((i)=>i+5)
// console.log(newarray);


// this is filter kisi 1 conditon ko follow kthey hai

// let x =[9,15,7,89,67,90,]
// let y =x.filter((i)=>{
//     return (i%2===0)
// })
// console.log(y)


// this is a find method  single frist maching single elemenet ke liye find mathod  ka use karte he 

// let arrat =[12,5,87,8,95]
// let newarr = arrat.find((i)=> i%2 ===0)
// console.log(newarr);



// true our false print ouptput print karne ke liye some method ka use kiya jata hai agar single value bhee true hong to oupput true print kareng 

// let array = [4,7,78,43,8,9]
// let newarray = array.indexOf((i)=>i%2 ===0)
// console.log(newarray);

// let temps = [20, 25, 30];
// let isHot = temps.some((temp) => temp > 28);
// console.log(isHot);

// let temps = [20, 25, 10];
// let isHot = temps.some((temp) =>temp%2 ===0);
// console.log(isHot);


// true our false print ouptput print karne ke liye every  method ka use kiya jata hai agar single value bhee true hong to oupput true print kareng 


// join method arry ko string me convert karne ke liye use ki jatai he


// let array = ["a","u","9"]
// let newarray = array.join("-");
// console.log(newarray);

// let arr =[10,40,45,68,8];
//  let subpart = arr.reverse()
// console.log(subpart)


// let array =[1,[2,[3,[4 ,5,6,7],8 ],9],0];
// // let newa= array.flat()  
// // let newa= array.flat(Infinity)
// let newa= array.flat(2)
// console.log(newa)


// let array = [12,9,45,78,980,2647,6758,]
// let newarray= array.reduce(i)

// function addnumber(x,y,...z){
// console.log(x,y)
// }
// addnumber(10,68,97,87)






const info = {
id1:101,
name1 :"Ashitosh makode",
}

const {id1,name1} =info;
console.log(id1,name1)

