
// 1. Find the Maximum and Minimum Elements in an Array


/* 
let arr = [10,20,30,40,50,60]
let max = arr[0];
let min = arr[0];

for (let i=1; i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i];
    }
    if (arr[i]<min){
        min=arr[i]
    }
}

console.log( "Full arr",arr);
console.log("max number element =",max);
console.log("min number element",min);  */


// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Reverse an Array

/*  let arr = [10,40,90,67,89,45];
console.log("arr = ",arr);
arr.reverse()
console.log("reverse arr =",arr);   /* 

--------------------------------------------------------------------------------------------------------------------
// 3. Find the Second Largest Element in an Array (subme dusre numbare per konsa bda hai)

/* 
let arr = [10,20,30,40,50,60]
arr.sort((a,b)=>b-a)
console.log(arr[1])  */

// ------------------------------------------------------------------------------------------------------------------
// 4. Check if Array is Sorted   (mtlb  karam  1,2,3,4,5,6   chhota pahele our bdaa baad me aayega)

/*  let arr = [5, 10, 15, 20];

let Sorted = arr.every((val, i) => 
    i === 0 || arr[i -1] <= val
);

console.log(Sorted);     /* 

// -------------------------------------------------------------------------------------------------------------------------

// 5.Move All Zeros to the End
// // Method 2: Using filter & concat (Short)

/*
let arr = [0, 1, 0, 3, 12,8,6,9,8];
let result = arr.filter(a => a !== 0).concat(arr.filter(a => a === 0));
console.log(result);  */


//---------------------------------------------------------------------------------------------------------------------

// Isme se maine dupicate array ke element ko rovmove kar diya hai (===index)
// 6. Find the Duplicate Elements in an Array
/*
let arr = [10,10,20,50,70,30,30,90,90]

const ans = arr.filter((val,index)=>{
    return arr.indexOf(val) ===index;
})

console.log(arr);
console.log(ans); */

// Isme se maine dupicate array ke element ko rovmove kar diya hai (!==index)
/*
let arr = [10,10,20,50,70,30,30,90,90]

const ans = arr.filter((val,index)=>{
    return arr.indexOf(val) !==index;
})

console.log(arr);
console.log(ans);    */

// ------------------------------------------------------------------------------------------------------------------------

// 7. Array Rotation

// ------------------------------------------------------------------------------------------------------------------------
// 8. Find the Intersection of Two Arrays
// Output: [3, 4, 5]
/*


 function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1,2,3,4,5], [3,4,5,6]));
 */

// ---------------------------------------------------------------------------------------------------------------------------------

// 9. Find the Missing Number in an Array
// 10. Find the Frequency of Elements in an Array
//11. Find the Largest Sum of Subarray (Kadane's Algorithm)
























