console.log(`connected`);
//Objects is an unordered collection of related data, in the form of key and value pairs.
//syntax:
//const name-{
//  key:value,    
//  key:value,    
//  key:value,    
//  key:value,
//  name={
//    
//}    
//}
//key value pair ke alava khud object bhi contain kr sakta hai


//=-=-=-==-=-=-=DOT NOTATIONS(.)-=-==-->Used to access and update the object
//example:
// const detail={
//     firstname:`Rajat`,
//     lastname:`Tiwari`,
//     age:19,
// }

//updating:
// detail.address=`krishna nagar`;
// console.log(detail);

//Instead of key value pair we can also use the arrow function inside the.
//example:
// const clas={
//     branch:`CSE`,
//     Name:`Rajat`,
//     detail:()=>{
//         console.log(`Got 98% in my first two semester`)
//     }
// }
// clas.detail();//this is how we call the arrow function in the object;


//=-=-=-=-=-=Object.keys() -=-=--=-=-=
//It creats an array containing the keys of an object.
//example:
// const company = {
//     rank: 1,
//     Name: `Pracharwal`,
//     Boss: `Rajat Tiwari`,
//     secretary: `Harshit`,
//     sales: `Adarsh`,
// };
// const positions=Object.values(company);
// console.log(positions);


//=-=-=-=-=-=-= Object.values=----===
//It provides the values pair of the given object
//Example:
// const mans=Object.keys(company);
// console.log(mans);

//=-=-==-=-=--Object.entries-==-=-=
//It provides the The array for eachg element of the object
//example:
// const arr = Object.entries(company);
// console.log(arr);


//-=-=-=-=-=-==Object.freeze()===-=-=-=====--=-==-=-
//It prevents modification of selected element 
//prevents properties from adding and removing
//example:
// const user={
//     username:`rajat`,
//     passwprd:`123332423`
// };
// const admin=Object.freeze(user);//now you cannot change the value pf username annd password

// console.log(admin);