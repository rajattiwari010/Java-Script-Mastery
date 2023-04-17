console.log(`connected`);
// const arr=[`jan`,`feb`,`mar`,`april`];
// console.log(arr);
// console.log(typeof arr);
// console.log(arr[2]);

//In jsva Script array provides us to write just like strucutre
//Example:
// const values=[
//  `apple`,
//  {name:`john`},
//  true,
//  ()=>{
//     console.log(`I am Rajat`);
//  }
// ];
// console.log(values);


//--------------------------------=============push=========->=========adds a new element in the original array--------------------------

// const Array=[`Rajat`, `Ram`, `laxman`, `Sita Mata`];
// //if directly call like-> console.log(arr.push('ram'));  it will give the length.
// //thus call by original name -> console.log(Array);
// Array.push(`Hanuman`);
// console.log(Array);


// //--------------==============Array pop->===========removes the last value in array and print it---------

// const claa=['5','2','4','3'];
// claa.pop();
// console.log(claa);//provide the array without  3.



// //-------------===============-Array shift===========->===========Just like pop but del first value
// claa.shift();
// console.log(claa);



// //-------------===============Array Unshift==========->============Just like push but in front
// claa.unshift(`199`);
// console.log(claa);



// //-------------------==============Array Splice==============->==========adds element at perticular index by deleting the element or by shifting
// const branch=['cse','eee','mech','et&t','civil'];
// branch.splice(2,0,'PaRALLEL');
// console.log(branch);//PaRALLEL is added at second index by shifting mech.




// //-------------------===========Array slice()=============->============ Helps to copy the perticular element of one arr to other array
// const withoutcivil=branch.slice(0,5);
// console.log(withoutcivil);



//-----------------imp----- ===========forEach==========->========== it gives the array value without the loop, and array gets cleared fro, memory

// const tmk=['1','2','3','4','5'];
// tmk.forEach((val)=>{
//     console.log(tmk);
// })
// console.log(tmk);
//use when
//you want to do something with each element of the array

//dont use when
//when you want to stop or break the loop when some condition is true
//you're working with async code
//example
// let sum=0;
// const num=[1,2,3,4,5];
// num.forEach((num)=>{
//     sum+=num;
// });
// console.log(sum);



//-----------==========Array Map==========->============ it provides the element of array you want by using "." operator in an new array name

// const bio = [
// {branch:`CSE`, CR:`Rajat`},
// {branch:`EEE`, CR:`Kamran`},
// {branch:`Mech`, CR:`Uttam`},
// {branch:`Et&t`, CR:`Shubham`},
// ];

// const towhichbranch=bio.map((item)=>item.branch);
// const towhichCR=bio.map((item)=>item.CR);
// console.log(towhichbranch);
// console.log(towhichCR);

//-------------==========Array Filter======->it iterate once to all elements of array and provide the ele,emement according to cindion provided.
//it does not change original array we have to take modified values in a new array.
//Thus filter helps to extract perticular amount of element accornding to condition provided.
//syntax: array_name.filter((function name)=>{
          //return  function;
//})
// const num=[1,2,3,4,-2,-4 ,-9];

// num.filter((number)=>number >=0);
// console.log(number);



//---------=====Array Find-------==->---------------
//Find method for arrays returns the first value that matches with the condition provided
//it doesnt change the orginal array, just provide the one element
//Example:
// let names=['Rajat','Lekha','Sachin','Priyanshu','Akash'];
// let name=names.find((name)=>name.startsWith('L'));
// console.log(name);



//===------===Array includes-------==> 
//check whether the perticular element is there in the array or not
//Return boolean by default
//example:
// const library=['poos ki rat','boodhi kaki','mantra','namak ka daroga','pahlwan ki dholak','kafan','bhayanak raat','malkin mawa'];
// if(library.includes('namak ka daroga')){
//     console.log('yes take it');
// }
// else{
//     console.log('not available, we will arrange it for you');
// }


//---------==-=-=-=Array sort=-=-=-=-=-=-=-=>
//in case of string it sorts directly
//sorting it terms of number is differernt
//It changes the original array
//example
// const chor=['lucky','anetaji','sonu'];
// chor.sort();
// console.log(chor);

// const amar=[1,2,3,3,2,1];
// amar.sort((a,b)=>a-b);//sorts in ascending order
// console.log(amar);
// amar.sort((a,b)=>b-a);
// console.log(amar);



//=-=-=-=-=-=-=-Array some=-=-=-=-=-=-=-
//return true if at least one element is following the condition
// const array=[1,2,3,4,5];
// console.log(array.some((el)=>el>3));

//=-==-=--==--=-=Array every=-==-==-
//returns true if all the element follows the condition
// console.log(array.every((el)=>el>3));



//-=---=-=-=--=-=Task assign to me=-=-=-=--=--
let sum=0;
let num=[1,2,3,4,4,5];
num.forEach((num)=>{
    sum+=num;
});
console.log(sum);


//==-=-=-=-=-=-Array Reduce=-=-=-=-=-==-=
//it executes each and every element of array 
//does not change the original array
//it means you have to make variable to store its value
//syntax=> array_name.reduce((accumulator,currentvalue)=>{
//    return accumulator+currentvalue
//})
//logic=>   acc=0,curr=1,acc=1+0=1
//logic=>   acc=1,curr=2,acc=1+2=3
//logic=>   acc=3,curr=3 ,acc=3+3=6
//logic=>   acc=6,curr=4,acc=4+6=10
//logic=>   acc=10,curr=5,acc=10+5=15


