//dates in JS are updating and they can be a pain

let mydate = new Date()
//console.log(mydate) //not in readable format 

// console.log(mydate.toDateString()) //shows today date in readable clear format
// console.log(mydate.toLocaleString()) //gives date with   time
// console.log(typeof mydate) //object->key: value pair

let nDate = new Date(2004, 3, 3, 6, 20)  // months start from 0 in JS, means 0-> January, when in a single other wise 01 -> January

//console.log(nDate.toLocaleString()); // clear date given

//console.log(Math.floor(Date.now()/1000)) //converted into seconds

let sDate = new Date()
console.log(sDate.getMonth()) //starts from zero 

// like wise many .get functions like getTime, getHours, getFullYear, etc.