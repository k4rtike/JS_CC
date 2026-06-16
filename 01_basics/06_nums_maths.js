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

console.log(cash.toLocaleString()) // puts commas for better readability of numbers, bh default US standards
console.log(cash.toLocaleString('en-IN')) // for Indian Standards
