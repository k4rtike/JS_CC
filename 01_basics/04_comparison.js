/*
basic data types remain same prblm tb aati hai jb 
different data type me comparison hota hai. 
*/

console.log("2" > 1);
console.log("02" > 1);



// console.log(null > 0) //false
// console.log(null == 0) // false

// console.log(null >= 0) // true
 // reason-> equality check == and comparisons > < >= <= work differently
 // comparisons convert null to number, treating it as zero 0.
 // That's why (3) Null>=0 is true and (1) null>0 is false.

 //=== strict check also checks the datatype, no conversion happens 
