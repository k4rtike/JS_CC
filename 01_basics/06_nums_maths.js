const score = 200 // automatically detects as integer number
//console.log(score); 

//declaration of number -> check this in browser console
const bal = new Number(100) // strictly defined as number 
//console.log(bal); // keyvalue pair

//console.log(bal.toString()) //type chanhges to string -> and by this string properties can also be used in this like length, charAt, etc
//console.log(bal.toString().length)
//console.log(bal.toFixed(2)) // sometimes the calculated value becomes complex for better precision, user does not like it too much
//  so we make sure that the value should be fixed.

const bill = 304.765678
//console.log(bill)
//console.log(bill.toPrecision(3)) // this gives you the precised value of the digits you have inserted there, by rounding off the remaining values. 

const cash = 10000000

// console.log(cash.toLocaleString()) // puts commas for better readability of numbers, bh default US standards
// console.log(cash.toLocaleString('en-IN')) // for Indian Standards


//******************************************* Maths ******************************************************************************** */

//math library accessed by .Math provides multiple function can be shown in console of the browser
//Math.abs, Math.min, Math.max, Math.round, Math.ciel, Math.floor, etc provides basic functionalities as we all know, nothing coplex

// console.log(Math.abs(-32))
// console.log(Math.round(23.64))
// console.log(Math.floor(23.64))

//Math.random()-> gives random values between 0 & 1 all the time .

console.log(Math.random())
console.log(Math.floor(Math.random()*10) + 1)

//when the range is defined
const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min+1)) + min)

