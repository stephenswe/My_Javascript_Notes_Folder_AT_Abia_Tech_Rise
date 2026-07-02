//CONDITIONAL STATEMENT
//A conditional statement is a program that allows javascript to execute blocks of code when a certain condition is met.
//MAJOR WAYS OF WRITING CONDITIONAL STATEMENT IN JS:
//1. if statement: 
//if:
//syntax: if(condition){code execution}
let sum = 2+2;
if(sum>5){
    console.log("sum is greater than 5");  //will not run because sum is less than 5
}

if (sum===2){
    console.log("sum is equal to 2");
}

//if else - unlike the "if" that is a one way execution," if else" makes provision for the second action when the condition is not met
//syntax: if(condition){code execution when condition is net}
//else{code execution when condition is not met}

let firstNum = 3*2;
if (firstNum > 10) {
console.log("firstNum is less than 10");
} else {
    console.log("firstNum is less than 10");
}

let word = ("Engish is my best subject");
console.log (word + "in 2026," + "I love it a lot " + sum);  //string concatenation
console.log(`${word} in 2026, I love it a lot ${sum}`);       //with backticks; looks better and more organized.

//let answer = prompt("Enter a number");
//console.log(`${answer} is a ${typeof answer}`);  //THE TYPE IS A STRING BECAUSE IT IS INSIDE PROMPT which is in quotes

//NUMBER(is a js method that converts a string to a number)
//------Checking for odd and even number

//First step- convert prompted value to a number using Number()
let answer = Number(prompt("Enter a number"));
//Second step- use if statement and modulus to check
if (answer % 2 === 0) {
console.log(`${answer} is an even number`);
}
else{
console.log(`${answer} is an odd number`);
} 


//if else if else - 
let complexion = prompt( "enter her complexion"); 
if (complexion === "light") {
    alert("she is light in complexion");
} else if (complexion === "dark") {
    alert ("she is dark in complexion");
}  else if (complexion === "chocolate") {
    alert ("she is caramel");
} else {
    alert("she is neither light or dark");
}

//2. ternary operator: this is a shorter way of running your conditional statement. It uses ? and :.
//syntax = (condition)?{code execution if condition is met}:{code execution if condition is not met}

let year = 2026;

year>2024
? console.log("year is greater than 2024")
: console.log("year is less than 2024");

let lockdown = prompt("What year was the lockdown?")

lockdown == 2020
? console.log("year is equal to 2020")
: console.log("incorrect");


//3. Switch case: used for multiple statements
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");

        break;

        case "Tuesday":
        console.log("Today is Tuesday");

        break;

        case "Wednesday":
        console.log("Today is Wednesday");

        break;

        default:
            console.log("Today is any other day");
            break;
}