// Window Object
// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.
// It is a global object with lots of properties & methods.
// Apna Col


// What is DOM?
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page



// DOM Manipulation

// Selecting with id  : document.getElementById(“myId”)
// Selecting with class: document.getElementsByClassName(“myClass”)
// Selecting with tag : document.getElementsByTagName(“p”)


// document.querySelector(“#myId / .myClass / tag”)
// returns first element
///Query Selector
// document.querySelectorAll(“#myId / .myClass / tag”)
//returns a NodeList

// 1.---------------------------------------------------------------------------------------------------------
// Selecting with id  : document.getElementById(“myId”)

// let ans = document.getElementById(101);
// console.log(ans);
// console.dir(ans);
// output :  <button id="101">Clickme!</button>


// 2.---------------------------------------------------------------------------
// 
// let result = document.getElementsByClassName("pera");
// console.log(result);
// console.log(result[1]);
// output:HTMLCollection(5) [div.pera, div.pera, div.pera, div.pera, div.pera]
//   <div class="pera">heloo2</div>

// 3.-------------------------------------------------------------------------

// /output:HTMLCollection(5)
// let ans2 = document.getElementsByTagName("p")
// console.log(ans2)

// ----------------------------------------------------------------------------
//querySelector  // returns first element : agar mere pass 10 class,tags he usme subse phele jo frist class koo wrrtitn karta hai

// let ans = document.querySelector(".pera");
// console.log(ans);
// returns first element 

// -----------------------------------------------------------------------------------------------------------------------

//querySelectorall  // returns first element : agar mere pass 10 class,tags he usme subse phele jo frist class koo wrrtitn karta hai


// let result = document.querySelectorAll("p");
// console.log(result);
// output
// NodeList(4) [p, p, p, p]0: p1: p2: p3: plength: 4[[Prototype]]: NodeList


// -------------------------------------------------------------------------------------------------------------------------

// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements

// ------------------------------------------------------------------------------------------
// {/* <button> Hello</button> */} agar mujhe kisi tag shirfh name print karna hai 
// tagName : returns tag for element nodes

// let bytagname = document.getElementById("101")
// console.log(bytagname);
// console.log(bytagname.tagName);

// -----------------------------------------------------------------------------------------------------------
// innerText : returns the text content of the element and all its children

// let bytagname = document.getElementById("101")
// console.log(bytagname);
// console.log(bytagname.innerText);


//agar mujhe div ke under ke sare tag  name print karnaa hai to useke 
//(a) inner HTML


// let ans = document.querySelector("div");
// console.log(ans.innerHTML);


// ------------------------------------------------------------------------------------------------------------

//there are are
// (a) children : pura div ke under ke sare div  print ho jayega 
//(b)

// let ans = document.querySelector("div"),children;
// console.log(ans);



// let ans = document.querySelector("div").firstChild;
// console.log(ans);

// output : Text

// ---------------------------------------------------------------------------------------------------------------------
// (a) innerText
// (b) innerHtml

// let ans = document.getElementById("101");
// console.log(ans.innerText="hello");

// -----------------------------------------------------------------------------------------------------------
