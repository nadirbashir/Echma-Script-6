/*
   1) var: function scope, can be used multiple time with same var name
   2) let: block/bracket scope, can't be used multiple time with same var name
   3)const: Global scope, can't be updated remove, must initialize value at declartion
   4) Template Literals:must use this instead + concatination 
   useful to concatinating strings 
   also useful in firebase ref
*/

var name = "reyhan"
function foo(){
    var name = "Nadir";
}
console.log(name);

if(true){
    let fullname = "Nadir bashir"
}
console.log(fullname);

var lastName = "ahmed"
var lastName = "Bashir"
console.log(lastName);

let lastName = "Bashir"
let lastName = "ahmed"
console.log(lastName)


// // Template Litrals

let firstName = "Nadir";
let lastName = "Bashir";
console.log(`My name is ${firstName} ${lastName}`)

firebse.database.ref(`task/todo/${key}`)