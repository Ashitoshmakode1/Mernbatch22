let boxes = document.querySelectorAll(".box")
let restBtn = document.querySelector("reset-btn");

// hamare  plear x 0
let trun0=true;
let trueX=true;

const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(trun0){
    box.innerText="O";
    trun0=true;
}
else{
    box.innerText="X";
    trun0=true;
}
// value duble click reset nhi hongi
box.ariaDisabled=true;
checkWinner();
});
});


// let x =20 ;
// function print(){
//     console.log(x)
//     var x = 90;
//     console.log(x)
// }

// print();


// console.log(typeof(undefined));


// let x =20 ;
// function print(){
//     console.log(x)
//     var x = 90;
//     console.log(x)
// }

// print();
