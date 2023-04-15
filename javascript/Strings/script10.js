console.log(`connected`);
//In this vedio we will learn about backticks and how it resolves many problems.
//syntax of declaring a variable
var name = "Rajat";
var name1 = 'Rajat';
var name2 = `Rajat`;

//output we will be same but problem is
console.log(name);
console.log(name1);
console.log(name2);

//all three have all the values but backticks provide a method to declare a function in backticks directly and solving any evaluation in this
name2 = `${2 + 2}`;
console.log(name2);
//it will give the value of four

const sum = (a, b) => a + b;
const total = `The addition is ${sum(2, 2)}`;
console.log(total);
//you seen that backticks gives us an extra edge over other methods

//We can operate following property ober the string
//string.length
//accessing the perticular value

let id = `iakdslfhjaf`;
console.log(id.length);//to give the length
console.log(id[0]);//will give the zeroeth element
console.log(id[id.length - 1]);//last element access

//--------------------how to change the case of string--------------------


const age = `I am 19 Years OLD`;
//using .tolowerCase() or .toUpperCase() make a new variable with maention properties, just store it in new variables and print it

const Loweraayu = age.toLowerCase();
const Upperaayu = age.toUpperCase();
console.log(Loweraayu);
console.log(Upperaayu);

//-------------------- Searching for a substring-------------------


const hobbies = `I love IMA OTA ARMY INDIA`;
//indexof()
const findex = hobbies.indexOf('I');
console.log(findex)//it return the first appering prosition of specified string if exist, if not then -1. (JUST HOVER OVER INDEXOf AND SEE THE THEORY),

//lastIndexof()
const lindex=hobbies.lastIndexOf('INDIA');
console.log(lindex)//it return the last appering prosition of specified string if exist, if not then -1. (JUST HOVER OVER LASTINDEXOf AND SEE THE THEORY),

//includes()
const incld=hobbies.includes('NAVY');
console.log(incld)//it return the true if includes else return the false. (JUST HOVER OVER includes AND SEE THE THEORY),

//------------------Getting the substring of a string------------------


//slice
const aim=`I want to become an Army Officer`;
const AIM=aim.slice(0, 5);
console.log(AIM);

//splittng the string----------------


//split()
//it return the value in array form
const characters=aim.split('');//gives the one one word
//if you will provide anything in split then it will split the string from that position
//example
const character=aim.split(' ');//we have given the space in split then it will return all the strings in aim.

//reversing a string-----------


//there is a direct reverse function but we cannot use that in string therfore firstly we have to make a string to array by split functtion then reverse then join function.
 
const raj=`up wale`;
const tiwari=raj.split('').reverse('').join('');
console.log(tiwari);

//------------example--------------

const guest=`rajat, sachin, lekha, priyanshu`;
const len=guest.length;
const uprcase=guest.toUpperCase();
console.log(uprcase.includes('RAJAT'));
const tri=guest.slice(6,18);
console.log(tri);