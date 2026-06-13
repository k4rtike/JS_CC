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

// console.log(hero)
// console.log(myObj)

//------------------------------------------------------

//Memory concepts
// Stack-> Primitive data type-> call by value
//Heap-> Non-Primitive data type-> call by reference

let myname = "kartike" // primitive data type-> stored in stack -> call by value
let anothername = myname // a copy is created of my name and given to anothername in the stack 
anothername = "buddy" // changes made in the copy

// console.log(myname); // remains same because at their original location nothing is changed, a copy is created
// console.log(anothername); // changes from kartike to buddy -> changes made in the copy

let kName ={ //data type is Non primitive-> call by reference
    user: "El Goringo",
    UPI: "Goringo@ybl" // stored in heap 
}

let kAlias = kName // Call by reference-> kAlias ke paas kName ki location hai direct wahin pe action hoga.
// No copy created

kAlias.UPI = "yaga@ybl" // direct access to the original reference
kAlias.user = "Baba Yaga"// changes are made to the original kName

console.log("kName is : ", kName) // gets changed -> the original value gets changed.