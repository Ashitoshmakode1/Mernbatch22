//event : Event is object in java script which is a writen by user and apply on tag and elemests in java script 
//There are three typesh method ka use karthe hai 

 let button1 = document.querySelector("#hello")
 button1.onclick= ()=>{
  console.log("hello Ashutosh Makode");
  let x = 23;
  x++;
  console.log(x);
}


//click
//hover
//scroll
//lood
//sumiit


//There are three typesh method ka use karthe hai



// addEventListener
// removeEventListener

    let button = document.querySelector("#ajay");
    button.addEventListener("click",()=>{
    console.log("Ashutosh")
    });

// let body = document.getElementsByTagName("body")
// /// mujen 1 button banna hai java script 

// 1 subse pahele 1 button create kaarna hai
let ad = document.createElement("button");
// 2 button ke under conataint dalana hai
ad.innerText = "Rahul";
//3 body me buuton ko Ui per incer karna hai
document.body.append(ad);
//4. mai chahata hu jub mai button ko click karne per event  function  use karte hai 
ad.addEventListener("click",()=>{
console.log("I love Ashitosh makode")
});

// ----------------------------------------------------------------------------------------------------------------------


//Task -1 Done
//1-> get the div so that you can attach btn
let divEle = document.getElementById("Div-1");
console.log("Now we have div", divEle)

//2- create the btn
let addBtn = document.createElement("button");
console.log("Btn created", addBtn)

//3- add the content to the btn
addBtn.textContent = " Add "

//4- attch the btn inside the div
divEle.appendChild(addBtn)



// Task-2 

//1-> get the btn so we already have btn(done)

//2- attacheventHandler
addBtn.addEventListener("click", () => {
    console.log("Me kush karunga")
    //1-> get the div so that you can attach btn (done)
    //2- create the paragraph
    let paraEle = document.createElement("p");
    //3- add the content to the btn
    paraEle.textContent = "Sab khtam kar denge"
    //4- attch the para to the div
    divEle.appendChild(paraEle);
})

