console.log(`connected`);

//GLOBAL scop:- Variable declared apart from all the function is called the GLOBAL scop.BUt again made its value
const GLOBAL=`ram`;
console.log(GLOBAL);//THis shows taht we can access it from everywhere in the program
const say=()=>{
    console.log(GLOBAL);
}
say();


//LOCAL Scop:-In this the variable is derived inside the function and can be used in the function 
const sayhi=()=>{
    let msg=`Hi`;
    console.log(msg);
}
sayhi();
// console.log(msg);//it will give error
//THerefore not executable

//BLOCK code:Same as local code can only be used inside the function
