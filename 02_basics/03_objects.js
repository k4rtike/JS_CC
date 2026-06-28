//Object_declaration
//singleton Object.create()
//Object Literals
// Object me keys and value pairs me kaam hohta hai 

//for symbols;
const mysym = Symbol("key 1")
/*
The Golden Rule of Symbols
Even if you declare two symbols with the exact same description, they are completely unique and will never 
equal each other. The description is just a label, not the value itself.
*/

const JsUser ={ //this {} is the object
    name : "Tiger", // name ko js string hi maan leta hai "name" aise likhne ki zarurat nhi hai. key andar value kuch bhi de sklte hain.
    location : "Siberia",
    [mysym] : "my key 1",
    "full name" : "Siberian Tiger",
    email : "tigris@jungle.com",
    isSleep : false
}

// console.log(JsUser.email) // not the wrong way but there is one more way
// console.log(JsUser["name"]) // always give this in a string
// because "full name" can't be accessed by dot->JsUser.full name ...galat hai ye 

//console.log(JsUser.full name) //it will show error
//console.log(JsUser["full name"]) // the right way isiliye bracket ke andar double quotes me daal dete hain

// console.log(typeof(JsUser.mysym)) // abhi string hai kyuiki aise hi stored hai 
// console.log(JsUser[mysym])
// console.log(typeof(JsUser[mysym]))
/*
The output will be "string".

Here is the step-by-step breakdown of why:

JsUser[mysym] accesses the value: When you use the symbol mysym 
as a key to look inside the JsUser object, it returns the value associated with it, which is "my key 1".

Checking the type of the value: The typeof operator is evaluating the value
 "my key 1", not the key itself.

The result: Since "my key 1" is text wrapped in quotes, it is a string.

It's a very common point of confusion! Just remember to separate the Key from the Value:

The type of the Key (mysym) is a "symbol".

The type of the Value (JsUser[mysym]) is a "string".

*/

console.log(typeof(mysym)) // the output will be symbol
