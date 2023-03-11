// there are majorly three way to describe the variable in js :-
// first way is by VAR keyword
var variablename1='ram';
console.log(variablename1); 

// second way to decalre is by using LET keyword:-
let variablename2='laxman';
console.log(variablename2);

// third way is Using const keyword, then we cannot change the value of variable:-
const variablename3='sita';
console.log(variablename3);

// Rules to decalre variable
// 1.the name should be unique
// 2.the name should not be reserved keyword
// 3.the name must start with a character,_ or $ sign


// --------------------STRING-----------------------

// string can be declared by three types:-
// 1.singlequates
var single = 'hello!';

// 2.doublequates
var doublee = "hello!!";

// the above are similer and easy, 
// 3.backticks``:-
// this can be used to do many things example:
var back = `hello,${doublee}`;
console.log(back);
console.log(back,'welcome');

// typeof is used to know the type of datatype that varible store
console.log(typeof back);


// -------------------NUMBER----------------------

// No division is there between the float and integer all comes under number
// in the same way we can declare the no. variable as string 
var first=56;
var second=65;
console.log(first/second);

//  ------------------Boolean----------------------
// Boolean only take two values that are 
// true=1,correct,yes
// false=0,incorrect,no

var firs = true;
console.log(firs);
var age = 18;
console.log(age>20);


// ----------------NULL & Undefined------------------
// null
let a = null;
console.log(a);
console.log( typeof a);//thus datatype of null is object, its a bug in java script

//undefined
let x;
console.log(x);
console.log(typeof x);


// --------------------OBJECTS------------------------

const person = {
    name:'rajat',
    branch:'cse',
    age:19,
}
console.log(person);
console.log(person.name);

// ---------------array-------------------------------

const arr=[1,2,3,4];
console.log(arr);
console.log(typeof arr);

const date=new Date();
console.log(date);

// THere are two types of programming language 
// statically typed like c, c++ in which type of variable is known we cannot store the any other data type in variable.

// Dynammically Typed like java script

let identity='men';
console.log(identity);
console.log(typeof identity);

identity=8;
console.log(typeof identity);