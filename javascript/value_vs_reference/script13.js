console.log(`connected`);
//in this doc we will see that for same method primitive and complex data types behave differently
//Primitive=>integer,string,boolean,etc
//complex=>Objects,Arrays.

//example:
// let animal=`bhalu`;
// let type=animal;
// animal=`tiger`;
// console.log(animal);//expected outpue=>tiger
// console.log(type);//expected output=>bhalu
//it follows the same way



//example:
const animal={
    name:`tiger`,
    add:`kuno`
}
const printt=animal;
animal.name=`dinoasur`;
console.log(animal);//expected output=>name:dinoasur,add:kuno;
console.log(printt);//expected output=>name:tiger,add:kuno;
//not follow both gives the same value=>//expected output=>name:dinoasur,add:kuno;