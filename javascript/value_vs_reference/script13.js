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
// const animal={
//     name:`tiger`,
//     add:`kuno`
// }
// const printt=animal;
// animal.name=`dinoasur`;
// console.log(animal);//expected output=>name:dinoasur,add:kuno;
// console.log(printt);//expected output=>name:tiger,add:kuno;
//not follow both gives the same value=>//expected output=>name:dinoasur,add:kuno;

//it means in case of primitive data types we give values while in case of non-primitive data type we give the reference

//example
// const person1={name:`Rajat`};
// const person2={name:`Rajat`};
// console.log(person1===person2);//it should give true but gives false because both point to different locations
// const person3={name:`Rajat`};
// const person4=person3;
// console.log(person3===person4);//it gives true value as now both point to same block of memory

//=-===-=-=-=-=-=-=-=-CLONING =-=-=-=-=--


//ARRAY
//1st way:Spread Operator(....name)//in thid the initisl objects gets deleted


// const perk=[`my`,`name`,`is`];
// const perk1=perk;
// const newperk=[...perk];
// console.log(newperk);
// console.log(perk===newperk);
//

//=-=-=-=-=-=-=-=-=-=---------------------------=-================-=-=-==-=-=


//Objects
//1st way:spread operator


// const person={name:`Rajat`, branch:`CSE`};
// const otherperson={...person};
// console.log(otherperson);
