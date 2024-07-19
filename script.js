// ============================================================
// let const var

// let

let age = 31;
// let values can be re-assisgned 
age = 35;

// const 
// const valuse cannot be changed / re-assigned

const birthYear = 2000;

// birthYear=3000; > Error message will be displayed 

// var

// value can be re-assigned  as let

var firstName = "abhi";
firstName = "ajay";

console.log(age, birthYear, firstName);

// multiple values can be added in same console using commas

// =================================================================

// =================================================================

// OPERATORS

const ageRahul = 2037 - 1997;
const ageSarah = 2037 - 1995;
console.log(ageRahul, ageSarah);


const currentYear = 2024;
const ageAbhi = currentYear - 1997;
console.log(ageAbhi);

console.log(2 * 2, 15 / 3);

// 2**3 means 2 to the power of 3 = 2*2*2 

console.log(2 ** 3);


const firstNameJohn = "John";
const lastName = "wick";
console.log(firstNameJohn + lastName);

// To add empty space between names use "" eg (firstNameJohn+" "+lastName)

console.log(firstNameJohn + " " + lastName);

// =================================================================

//   ASSIGNMENT OPERATORS

let x = 5 + 10;
x *= 4;  //means  value of x*4
console.log(x);

x += 10;
console.log(x); //means  value of x+4

let y = 5;
y++;  //means y+1;
console.log(y);

let z = 6;
z--;
console.log(z); // means y-1

// =================================================================

//COMPARISON OPERATORS

// >  <  >=  <=

console.log(ageRahul > ageSarah);
console.log(ageRahul <= ageSarah);
console.log(ageSarah >= 20);

// =================================================================

//OPERATOR PRECEDENCE


const currentYearNew = 2024;
const ageJack = currentYearNew - 1997;
const ageRose = currentYearNew - 2000;
console.log(ageJack > ageRose);
console.log(currentYearNew - 1997 > currentYearNew - 2020);

//operator precedence means the order of executing an operator
// we can find the order of executing the operator in MDN website
// search for MDN operator precedence.


console.log(ageJack, ageRose);
const averageAge = (ageJack + ageRose / 2);
console.log(averageAge);
// wrong avg will be displayed as division happens before addition
//proper way to do is 
const properWayAvg = ((ageJack + ageRose) / 2);
console.log(properWayAvg);

// =================================================================

//TEMPLATE LITERALS

const firstName1 = "Matt";
const lastName2 = "Morgan";
const mattJob = "Racer";
const birthyear1 = 1995;
const currentYear1 = 2024;

const matt = "I'am " + firstName1 + lastName2
    + ", a " + (currentYear1 - birthyear1)
    + " year old " + mattJob + "!";

console.log(matt);

// on writing using template literals 
//make it cleaner and easier to unserstand
//uses the synmbol above tab

const mattNew = `I'am ${firstName1 + lastName2}, a ${currentYear1 - birthyear1} year old ${mattJob} !`;

console.log(mattNew);

// =================================================================

//TAKING DECISIONS: if-else statements

let ageHarry = 19;
const isOldEnough = ageHarry >= 18;
if (isOldEnough) {
    console.log("Harry is eligible for drivers license");
}



let ageRon = 15;
const yearsLeft = 18 - ageRon;
const isOldEnough2 = ageRon >= 18;
if (isOldEnough2) {
    console.log("Harry is eligible for drivers license");
}
else {
    console.log
        (`Ron is young, wait another ${yearsLeft} years for drivers license`)
}

// =================================================================

//Conversion and Coersion

// string to number conversion , number to boolean etc

//Manual process of conbvertimg type is called Conversion.
//Behind the Screen javascript automatically convets a type to another this is called coersion.

//CONVERSION

const inputYear = "2000"; // now this is input as a string
console.log(inputYear + 18);
// output will be a string + number so to fix this 

const inputYear1 = "2000";
console.log(Number(inputYear1) + 18, inputYear1); //now it is converted to number

console.log(Number("ss"));
//output will be displayed NaN which means Not a number as "ss" valus is not assigned 

console.log(typeof String("23"));
//Now the number 23 is converted to string with string command 

// Make sure conversion type mentioned should be starting with capital letter or else the command will not work
//The conversion cannot be made to undefined or null


// COERSION

console.log("I'am " + 18 + "years old !!!");

// In this line the number given is automatically converted to string and this process is calle coersion.

// All operations are not converted to string 
//Example is given below

console.log("23" - "10" - 3); // Now js converted a string to a number

console.log("23" + "10" + 5); // there is no automatc change 
// it remained as a string
//+ operators are converted to string 
// All opertors are converted to numbers expect + operatos+
//+ operators will remain as strings

console.log("2" * "8"); // conversion to number
console.log("10" / "3");// conversion to number

let n = "1" + 1;
n = n - 1;

console.log(n);

// =================================================================

// BOOLEAN CONVERSION AND COERSION

//   Falsy and truthy valyes

//Falsy values=  0 , " " , undefined , null , NaN
//if we try to convert these valuse to boolean we get a falsy value 
//Initially they are not false but when coverted to boolean it becomes a falsy value.
//All other values expect the above mentioned values are truthy values 

console.log(Boolean(0)); // result is a falsy value 
console.log(Boolean(undefined)); // result is falsy value 
console.log(Boolean("abhi")); // string, so result is true 
console.log(Boolean({}));//object , so result is true 

//These things are useful in logical context

let money = 0; // moneys value is falsy so else statement got executed 

if (money) {
    console.log("Don't spent it all");
} else {
    console.log("GET A JOB !!");
}
//moneys data type is number so in logical context js converts to boolean, type conversion occours

let money1 = 10; //truthy value is executed 

if (money1) {
    console.log("Don't spent it all");
} else {
    console.log("GET A JOB !!");
}

let height; //value of height is undefined so the falsy statement else got executed 
//When an undefined value is converted to boolean using js it becomes a falsy value

if (height) {
    console.log("Height is defined !!");
} else {
    console.log("Sorry height is not defined !!");
}  /// no value is defined so else got executed 

// when height1 is defined the truthu value if statement will get executed

let height1 = 20;

if (height1) {
    console.log("Height is defined !!");
} else {
    console.log("Sorry height is not defined !!");
}

// =================================================================

//EQUALITY OPERATORS
//(== VS ===)

const ages = 18;
if (ages === 18) console.log('You are an adult!!');

//Equality opereators returns a boolean value 
//There are two types of equality operators
//Triple and Double equality operators

//Triple(===) is also called strict equality operator as type coersion will not happen
//Double(==) is called loose equality operator as type coersion will happen.

console.log("18" === 18);
//False will be displayed as one is string and other is number 
//Type coersion will not happen as its a strict equality operator

console.log("18" == 18);
//Value will be returned as true as type coersion will happen due to loose equality operator


const age3 = "18";
if (age3 === 18) console.log('You are an adult!!');
//Will not execute as its a strict equality operator and else statement is not given

if (age3 == 18) console.log('You are an adult!!');

//Always try to use strict equality operators to make a clean code
//Avoid using loose equality operators

// --------------------------------------------------------------------
// const favourite = prompt("What is your favourite number?");

// console.log(favourite, typeof favourite);
// //the value of this will be stored as string so strict operator will not work.
// if (favourite == 23) {
//     console.log("23 is an amazing number!!");
// } else if (favourite === 7) {
//     console.log("7 is a great number!!");
// } else {
//     console.log("Number is not 23 or 7!!");
// }
// //If 7 is given in the above code else value will only return as 7 is a strict operator



// const favourite1 = Number(prompt("What is your favourite number as favourite 1?"));

// //as it is wrapped in number it will be stored as number format so strict operator will work.
// console.log(favourite1, typeof favourite1);

// if (favourite1 === 23) {
//     console.log("23 is an amazing number!!");
// } else if (favourite1 === 7) {
//     console.log("7 is a great number!!");
// } else {
//     console.log("Number is not 23 or 7!!");
// }

// //Boolean Logic
// //Not equal to operator
// if (favourite1 !== 23) {
//     console.log("Why not 23??")
// }
// --------------------------------------------------------------------
// =================================================================

//Basic Boolean Logic: The AND, OR & NOT OPERATORS

//Boolea logic is used to solve complex logical problems.

const hasDriversLicense = true;
const hasGoodVision = true;
const isNotTired = true;

console.log(hasDriversLicense && hasGoodVision); //and operator
console.log(hasDriversLicense || hasGoodVision); //or operator
console.log(!hasDriversLicense && hasGoodVision);// not operator

const shouldDrive = (hasDriversLicense && hasGoodVision && !isNotTired);

if (shouldDrive) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive!!");
}

// =================================================================

//SWITCH STATEMENTS

// An alternatiev for the if else statement


const day = "saturday";

switch (day){

case "monday":
console.log("Go to code meetup");
break;
case "tuesday":
console.log("Go to sports meetup");
break;
case "wednesday":
console.log("Record videos");
break;
case "thursday":
console.log(" complete portions");
break;
case "friday":
console.log("Submit projects");
break;
default:
    console.log("Not a valid day");
}

//recreated the above statement with else if

if (day === "monday") {
    console.log("Go to code meetup");
} else if (day === "tuesday") {
    console.log("Go to sports meetup");
} else if (day === "wednesday") {
    console.log("Record videos");
}else if (day === "thursday") {
    console.log("complete portions");
}else if (day === "friday") {
    console.log("Submit projects");
}else {
    console.log("Not a valid day");
}

// =================================================================

        //EXPRESSIONS AND STATEMENTS

//EXPRESSION

// An expression is avalue produced by a piece of code 

//Eg 3+4;  is an expression as it produces a value as a result
//also 2000 is an expression as it has a value 

//true&&false&&!false; is an expression as it produces a boolean value 

//STATEMENTS

//A bigger piece of code which wll not produce a value is called a statement
//Actions are statements

//Eg

if(23>10){
    const str="23 is bigger"; //Statement is produced no value only variable decleartion is done.
}
// But "23 is bigger" can be said as a value 

// =================================================================

                        //TERNARY OPERATORS

// Conditional operator

const age5=23;
age5>=18 ?console.log("I like to drink wine")
        :console.log("I like to drink water"); //This is an else block starting with : and it is mandatory in this 

//In the above example an if else statement is written in a singel line
 
//This conditional operator is also called a Ternary operator as it has 3 parts - condition, if part , else part
//Ternery operators are easier to understand and write.
//but small lines of codes can only be written

const age6=15;
const drink=age6>=18?"wine":"water";
console.log(drink);


let drink2;
if(age>=18){
    drink2="wine"
}else{
drink2="water"
}
console.log(drink2);


//now writing a template literal 
console.log(`I like to drink ${age6>=18?"wine":"water"}`);

//Advatage is that, we can place a ternary operation inside a template literal but not if else statement




