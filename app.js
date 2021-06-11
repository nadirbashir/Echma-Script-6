/*
   1) var: function scope, can be used multiple time with same var name
   2) let: block/bracket scope, can't be used multiple time with same var name
   3)const: Global scope, can't be updated remove, must initialize value at declartion
   4) Template Literals:must use back tick `` instead of + concatination 
   useful to concatinating strings 
   also useful in firebase ref
   5) spread operator: ... get elements of array and copy into the array
   can be also used in object
   6) object destructuring: get properties of object and store them like varible to access object property more easily
   7) Ternary Operators: same as if else just to short code
   8) Async or sync java script:
        a) Promise:

*/

// var name = "reyhan"
// function foo(){
//     var name = "Nadir";
// }
// console.log(name);

// if(true){
//     let fullname = "Nadir bashir"
// }
// console.log(fullname);

// var lastName = "ahmed"
// var lastName = "Bashir"
// console.log(lastName);

// let lastName = "Bashir"
// let lastName = "ahmed"
// console.log(lastName)


// // // Template Litrals

// let firstName = "Nadir";
// let lastName = "Bashir";
// console.log(`My name is ${firstName} ${lastName}`)

// firebse.database.ref(`task/todo/${key}`)

// // // spread operators

// // var merge = students1.concat(students2); //normal js

// var students1 = ["fahad","majid"]
// var students2 = [...students1,"asad","ahmed"]
// console.log(students2)

// var cars1 = {name:"honda",model: "2018"}
// var cars2 = {...cars1,name:"honda",model: "2018"}
// console.log(cars2)

// // //object destructuring
// var student = {
//     name:"Nadir",
//     school:"saylani",
//     roll:"saylani"
// }
// let {name,school,roll} = student; // get properties of student obj save like variable
// console.log(name);

// // Ternary Operators
// // 1) normal js
// let age = 30;
// if(age > 25){
//     console.log(`${age} 25 se bada hai`);
// }else{
//     console.log(`${age} 25 se chota hai`)
// }

// // turnary

// var age = 41;
// var check = age > 40 && age < 50 ? // ? same as if
// "30 se bara hai 50 se chota hai"
// : age > 30 ?            // : condition ? work same as else if()
// "30 se bara hai"
// :                       // : work same as eslse
// "30 se chota hai"

// console.log(check);


var bool = false;
var name = bool && "Nadir";  // && as turnery op checks if condition is true then save value
console.log(name);

// //  Async or sync java script
console.log("name1");
console.log("name2");
console.log("name3");  // what if we want to show name2 first. right way is using promise



// // 1) promise:
 // // promise definition
// let promise = new Promise(function(resolve,reject){
//     if(true){
//         resolve("its resolved");
//     }else{
//         reject("Its rejected");
//     }
// })

// promise.then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err);
// })

//     var promise = new Promise(function(resolve,reject){
    //         // // call back function task two methods in param
    //         var item = "not available";
//         if(item === "available"){
    //             resolve("item received");
    //         }else{
        //             reject("item nhi mila");
        //         }
        //     }); 
        // // // calling promise
        //     promise.then(function(data){  // .then and .catch both always used with promise first .then(data){if resolve} than .catch(error){if rejected}
//         console.log("resolve ==>",data);
//     })
//     .catch(function(error){
    //         console.log("Error ==>",error);
//     })



function getData(){
    
}

// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("/todo").on("child_added",function(data){
//         if(data.val()){
//             resolve(data.val())
//         }else{
//             reject("something went wrong")
//         }
//     })
    
// })
//     promise.then(function(data){  
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// // pending promise
let promise = new Promise(function(resolve,reject){
    if(true){
        setTimeout(()=>{
            resolve("its resolved");
        },3000)
    }else{
        reject("Its rejected");
    }
})
console.log(promise);
promise.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})
