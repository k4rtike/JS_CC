let score=" "

// console.log(typeof score);

let isNum = Number(score) // Number() converts the value in number, assures that the value will be in number but NaN dhyaan me rkhna 

// console.log(typeof isNum)
// console.log(isNum) //NaN Not a Number mtlb conversion nhi hua. aison ka conversion nhi hota

/*
NaN -> number after conversion -> number
null-> after conversion 0
undefined-> NaN
"" -> 0
" " -> 0
" abs" -> NaN

*/


let isLoggedIn = undefined
let bool = Boolean(isLoggedIn)

// console.log(typeof isLoggedIn)
// console.log(typeof bool)
// console.log(bool)

/*
"" -> conversion makes it false
" " -> conversion makes it true
"ghfjdks" -> true
null->false
undefined-> false
*/

let name=" "

console.log(typeof name)

let isString = String(name)

console.log(typeof isString)
console.log(isString)

/*

11->number to string
0->number to string
null-> object to string ->null
undefined -> undefined to string -> undefined
"" -> string to string -> empty
" " -> string to string -> may be space
*/