console.log("connected");
//--------Arrow unction-----------

const square=(number)=>{
    return number*number;
}
const result=square(9);
console.log(result);

//If only one parameter is there then we can remove the parenthesis and same for return type
const square1=number=> number*number;
const result1=square1(8);
console.log(result1);
