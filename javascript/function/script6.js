console.log("connected");

//Function declaration
// function cube(number) {
//     return number * number * number;
// }
//function calling(invoking the function)
//  


// //different ways to declare a function
// //1-simple
// function name(params){
//     //statement
// }

// //2-A function expression
// const name=function(params){
//     //statement
// }

// //3- An arrrow function
// const name=(params)=>{
//     //statement
// }
//exaample
// let sayhi=(name)=>{
//     console.log(`hi, ${name}`);
// }
// sayhi('Ganesh');
// sayhi('Ram');


//we will talk about return type of the the function
//a function stops execution after first return type

function name(number){
    console.log('Hi rajat');
    return number;
    console.log('hi');
    return number*number;
}
name(5);//it will only return the hi rajat;