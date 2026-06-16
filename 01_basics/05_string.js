//can be denoted as 'string' or "string"

const name="kartike"

const repocount = 2

//console.log(name+ repocount + " value"); // not recommended

// use backticks `` -> string interpolation
// placeholders created -> jo bhi variables hain directly yahan pe insert ho jayenge
// not difference in result just a modern way to represent the things.

//console.log(`Hello my name is ${name} and my repo count is ${repocount}.`);

//string is an object and structure is key:value pair (console me dikh jata hai achhe se)

//declaration of string 
const gname = new String('kartikekg') // object data type keyvalue pair storage

//console.log(gname.length)
//console.log(gname.toUpperCase()) // gives output 'KARTIKEKG' but does not changes the original value because of primitive data type-> Call By Value

//console.log(gname.charAt(0)) // kis index par kon sa char hai //- values par kuch nhi bta rha empty return ho rha

//console.log(gname.indexOf('k')) // kon sa char kis index par hai 
    //if character is present more than once it just returns the first presence

const newString = gname.substring(0, 5) // 5 will not be included
//console.log(newString);

const anoString = gname.slice(-9, 8) // -ve values de skte hain 
//console.log(anoString);


//removing extra spaces

const string2 = '           auckland          ' // unnecessary spacen character is inserted

// console.log(string2);
// console.log(string2.trim()) // all spaces removed // don't apply this in password fields
// trim works on white spaces and newlines-> trimStart() and trimEnd() is also there 

//making changes in URL 
const url = "https://github.com/%204rtike/JS_CC"
//console.log(url.replace('%20', 'k'))


// there are number of methods present in the string we can find those all in console
// and read about them with the help og MDN docs(link present in README.md)
