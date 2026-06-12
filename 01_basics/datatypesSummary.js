//primitive data types-> these are call by value..jb inhe call kiya jata hai to inki ek copy bnayi jaati hai,
//  aur fir inme koi change hota hai to unhi copies me change hota hai.

//Primitive data types->String, Number, Boolean, null, undefined, Symbol, BigInt

const id=Symbol('123')
const id2=Symbol('123')

// console.log(id==id2) //false 
// console.log(id===id2) // false ... dono ki value same hai stil dono hi unique hain

//Non-Primitive-> Call by Reference : these values are directly accessed by their actual location, No copies created.
// Array, Objects, Functions

const hero=["Spidey", "Hulk", "El Goringo"] //Array

let myObj ={
    name: "El Goringo",
    alias: "Ram",
    Age: 23
}

console.log(hero)
console.log(myObj)

