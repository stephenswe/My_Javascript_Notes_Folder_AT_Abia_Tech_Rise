// function
// function are block of codes designed to perform a specific task, it is also known as a block of code
// you write once and can use/run it as many times as you want.

// USES OF FUNCTIONS
// // 1. You can re-use the code
// 2. It reduces the repetition of code
// 3. It makes code easy to read.
// 4. It makes debugging easy.

// PARTS OF A FUNCTION
// 1. The function name: it is what we call our function just like our variable name
// 2. Parameters(): Is a place holder for your input data
// 3 Body: the code that runs when a function is called.
// 4. Arguements: the actual value passed when calling the function. The values inside the parameters
// is what we call the arguement.

// TYPES OF FUNCTIONSt
// 
// 1. function declaration: This is the most basic way of declaring a function.It is also known as the
// traditional way of creating a function

// syntax:

// funciton functionName(){
// }


function introduce(name, age){
    console.log("My name is"+ " " + name + " " + "and i am" + " "+ age +" " + "years old");
}

introduce("Precious", "40")

// write a function called showFullName that takes firstName and lastName
// as parameters and prints 
// the full name.


function ShowFullName(firstName, lastName){
    console.log(firstName, lastName)
}

ShowFullName("Stephen", "Michael")


// Write a function called calculateAge that takes birthYear as a parameter and prints how old the person
// is. Current year is 2026


function calculateAge(birthYear){ 
    let currentYear = 2026;
    let age = currentYear - birthYear;
    console.log(age)
}
 
calculateAge(1998)

// function expression: this is a situation whereby a function is stored in a variable or assigned to a variable
// Function Expression: It's when a function is stored inside a variable / assigned to a variable.
// syntax:
//  const variableName = function(){
//      code
//  }

// Write a function expression called isAdult that takes an age as a parameter.
// If the age is 18 or above, display "You're an adult". If below 18 display "You're not an adult."
const isAdult = function(age){
    if (age >= 18){
        console.log("You're an adult");
    }   else { 
            console.log ("You're not an adult");
    }
}
isAdult(17);

// Classwork 2
// Write a function isEven(num) that returns "Even" if the number is even, and "Odd" if it's not.

// Using function expression
let isEven = function(num){
    if (num % 2 === 0){
        console.log("Even");
    }   else {
            console.log("Odd");
    }
}
isEven(8);

// Arrow function: It's a shorter and cleaner way to perform a function.
// syntax
//  const functionName = () => {
//      code
//  }

// Write a function isPrimeNum(num) that returns "Prime" if the number is a 
// prime number, and "Not Prime" if it's not. Do it, using arrow function.
const isPrimeNum = (num) => {
    if (num <= 1) return "Not Prime";

  // Loop up to the square root of the number for maximum efficiency
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return "Not Prime";
}
    return "Prime";
};

// takes two numbers, multiplies them and RETURN the result
const multiply = (a, b) => a * b;
console.log(multiply (9, 3));

// Classwork 3
// Using an arrow function, write a function isLeapYear(year) that 
// returns 'true' if the year is divisible by 4, otherwise false.

// Method 1
// const isLeapYear = (year) => {
// if (year % 4 === 0) {
//     console.log("True")
// }   else {
//         console.log("False")
// }

// method 2
//     if (year % 4 === 0) ? 
//      console.log('true') :
//      console.log('false');
// }   
// isLeapYear (2020);

// Method 2
// const isLeapYear = (year) => {
//     year % 4 === 0 
//     ? console.log("true")
//     : console.log("false");
// }
// isLeapYear(2020)

// Method 3
// const isLeapYear = (year) => year % 4 === 0; 
// true;console.log; 
// false;console.log(isLeapYear(2020))

// Method 4
// const isLeapYear = (year) =>{
//     return year % 4 === 0;
// }
// console.log(isLeapYear(2003));

// Classwork 4
// Write an arrow function called calculateTotal that takes two parameters:
// a). price (the price of one item)
// b). quantity (how many items the customer is buying)
// c). the function should return the total price (price X quantity)

const calculateTotal = (price, quantity) => {
    return (multiply(price, quantity))
}
console.log(calculateTotal(56, 39))