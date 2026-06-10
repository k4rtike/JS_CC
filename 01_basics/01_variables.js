const accountId = 133415
let accountEmail = "kartike@gmail.com"
var accountPassword = "12345" // do not use this kyuki isme Block Scope aur Functional scope jaisi problems hain.
accountCity = "Jaipur" // bina variable ki category btaye , bina kuch likhe bhi ek variable ki memory reserve kar skte hain.
// but ye tarika bilkul achha nhi hai.

let accountState; // js will consider it as undefined value.

//accountId = 1341 // nahi hoga because of const mtlb fix hai , const keyword values can't be changed.
//console.log(accountId); 

accountEmail = "boy@gmail.com"
accountPassword = "11111"
accountCity = "Kanpur"

//console.table is a very good method to print multiple items in one go
//  in a table format, separated by commas in a squared bracket
console.table([accountEmail, accountPassword, accountCity, accountState]); 
