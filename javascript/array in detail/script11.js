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

