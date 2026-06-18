//push, concat and spread operator -> to join arrays
// let's find out

const walter =["W.White", "Pinkman", "Hank", "Saul"]

const savg =["Tuco", "Salamancas", "Gustavo", "Mike"]

// console.log(walter) // 5
// walter.push(savg)

// console.log(walter);//this is push

//concat

//console.log(walter.concat(savg)) // merges 2 at a time, this is concat better than push as it is pushing the whole as a single element

const all_chars = [...walter, ...savg] // can merge mutliple arrays at a time. 
//console.log(all_chars)

//isarray-> tells if the given input is array or not 
// from-> converts the input into array
// The Array.of() static method creates a new Array instance 
// from a variable number of arguments, regardless of number or type of the arguments.