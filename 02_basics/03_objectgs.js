//Object_declaration
//singleton Object.create()
//Object Literals
// Object me keys and value pairs me kaam hohta hai 
const JsUser ={ //this {} is the object
    name : "Tiger", // name ko js string hi maan leta hai "name" aise likhne ki zarurat nhi hai. key andar value kuch bhi de sklte hain.
    location : "Siberia",
    "full name" : "Siberian Tiger",
    email : "tigris@jungle.com",
    isSleep : false
}

console.log(JsUser.email) // not the wrong way but there is one more way
console.log(JsUser["name"]) // always give this in a string
// because "full name" can't be accessed by dot->JsUser.full name ...galat hai ye 

//console.log(JsUser.full name) //it will show error
console.log(JsUser["full name"]) // the right way isiliye bracket ke andar double quotes me daal dete hain