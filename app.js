/*
   1) var: function scope, can be declared multiple time with same var name
   2) let: block/bracket scope, can't be declared multiple time with same var name
   3)const: Global scope, can't be updated remove, must initialize value at declartion
   4) Template Literals:must use back tick `` instead of + concatination 
   useful to concatinating strings 
   also useful in firebase ref
   5) spread operator: ... get elements of array and copy into the array
   can be also used in object
   6) destructuring: 
        a) object destructuring:
            get properties of object and store them like varible to access object property more easily
        b) array destructuring:
            target values of array with index and store them like varible to access  array elements more easily
   7) Ternary Operators: same as if else just to short code
   8) Async or sync java script:
        a) Promise:
    9) Functions:
       a) Function Expression:
            instead of function name we assign function to a variable with any name
        b) Arrow Function:
            => also called pad arrow, instead of function keyword we us let hello = ()=>
        c) Call back functions:
             any function which takes function in its param is call back function
    10) Array methods (Higher order functions)
         a) Filter
            filter is a hof which takes call back function as param which recieves anonymous function return object or element searched
         arr.filter(function(a)) used for searching
        b) Map
            update old array and return new array
            arr.map(function(a))

        * for searching name.startsWith(searchdata)

    11) ES 6 classes
         same as constructor
         can also merge two classes using extend keyword

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

// // array destructuring

// let arr = ["elem1","elem2","elem3"];
// let {name1,name2,name3} = arr;


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
// let promise = new Promise(function(resolve,reject){
//     if(true){
//         setTimeout(()=>{
//             resolve("its resolved");
//         },3000)
//     }else{
//         reject("Its rejected");
//     }
// })
// console.log(promise);
// promise.then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err);
// })


// // function Expressio
// let foo = function(){
//     console.log("foo");
// }


// let foo = () =>{
//     console.log("Hello")
// }
// let foo = _ =>{
//     console.log("Hello")
// }
// let foo = name =>{
//     console.log(`Hello ${name}`)
// }
// let foo = (name1,name2) =>{
//     console.log(`Helo ${name1} and  ${name2}`);
// }
// let foo = () =>{
//     return "Hello";
// }
// or instead of return also following two methods work
// let foo = () => "Hello";

// () => "Hello";

// foo();

// // call back functions
    // // any function which takes function in param is call back function

// let interval = setInterval(()=>console.log("Hello"),1000)
// setTimeout(interval)

// // we can use call back func fo same thing we do using Promise():
    ////e.g to get firebase data in to another function  
    
    
    // let getData = (render_data) => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(data => {
    //             render_data(data)
    //     }).catch(err => console.log(err))
    // }

    // let render_data = (data)=>{
    //     console.log(data)
    // }

    // getData(render_data);

    
// // Array methods (Higher order functions)

// // filter is a hof which takes call back function as param which recieves anonymous function return object
// let arr = [{name: "nadir", age:26}, {name: "majid", age:20}];
// let filter = arr.filter((item)=> console.log(item))
// let filter = arr.filter((item)=> item.age)
// let filter = arr.filter((item)=> item.age === 26)
// console.log(filter)



// // for searching like google use 
// let stdname = "Nadir"
// let search1 = "N"
// let search2 = "r"
// if(stdname.startsWith(search1)){
//     console.log(stdname);
// } 

// if(stdname.endsWith(search2)){
//     console.log(stdname)
// }


// // Array Map

// let arr = [2,3,4,5];
// let multiply = arr.map((a) => a * 2);
// console.log(multiply);

// let arr = [{name: "Nadir"},{name:"Majid"}];
//console.log(arr);
// let updateName = arr.map((a) => a.name = "Ali")
// console.log(updateName);


// ES 6 classes
// // same as constructor

class student{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

// let student1 = new student("Nadir","abc@gmail.com");
// console.log(student1);

class School extends student{
    constructor(name, email,school){
        super(name,email)
        this.name = name;
        this.email = email;
        this.school = school;
    }
}

let student1 = new School("Nadir","abc@gmail.com","saylani");
console.log(student1);








// // async and await also used to get data from server 
// getData = async () => {
//         let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//             console.log(data);
//     }

//     getData();
