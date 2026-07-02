
let name = "Chidera";
name = "Emma";

alert("my name is emma");

console.log(name);

let firstName = `Nkechi`;

console.log(typeof firstName);
console.log(name, firstName)
console.log(`${name} is married to ${firstName}`)

// 22-06-2026

//OPERATORS AND EXPRESSIONS
//Operators are symbols used to perform operations on values and variables
//e.g +, -, *, /, ==, ===, &&, ||, etc

//Expression is any piece of code that produces a value
// 3 + 5 = 8

//Types of Operators
// 1. arithmetic operators: used to perform mathematical calculations on numbers 
// e.g Addition(+),Substraction (-),Division( /),Modulus( %),Multiplication( *), Exponention(**), Increment(++), Decrement (--)

//Addition
let a = 10;
let b = 5;
//Addition
console.log (a + b);
//Substraction
console.log (a - b);
//Multiplication
console.log (a * b);
//Division
console.log (a / b);
//Modulus
console.log (a % b);
//Exponent
console.log (a ** b);

//Increment ++
let age = 20;
age++;
console.log (age);
//Decrement
let score = 10;
score--;
console.log (score);

//2. Assignment operators: used to assign values to a variable. 
// They can also perform the calculation and assign the result back to the variable.

// (=) Assign: assigns a value to a variable
let name = "Precious";
console.log (name);

//Addition Assignment (+=): adds a value to the variable and stores the result.
let Score = 50;
Score += 10;
console.log (Score);

//Substraction Assignment (-=): substract a value from the variable and stores the result.
let balance = 200; 
balance -= 50;
console.log (balance);

//Multiplication Assignment: multiplies the variable by a value and stores the result.
let price = 20;
price *= 5;
console.log (price);

//Division Assignment: divides the variable by a value and stores the result.
let Price= 200;
Price /= 5;
console.log (Price);

//Modulus Assignment: divides the variable by a value and stores the remainder of the result.
let Balance = 50;
Balance %= 7;
console.log (Balance);

//Exponentiation Assignment: 
let value = 3;
value **= 2 ;
console.log (value);

//3. Comparison Operators: they are used to compare two(2) values. They return a boolean value.
// Examples: Equals to(==), Strictly(===), Not equal(!=), Strict not equal!==, Less than(<), 
// Greater than(>), less than/equal to(<=), greater than/equal to (>=).

let l ="5";
let T = 5;
console.log(l == T);
console.log(l === T);

let g = 10;
let d = "10";
console.log(g != d);

let y = 100;
let z = 50;
console.log(y !== z);

const eqn = 5 % 2;
const add = 4 - 4;
console.log(eqn >= add);
console.log (!(eqn >= add));

//Logical Operators: they also return boolean values and are used for combining expressions.
// Examples: 
// AND(&&), returns true only when all the sides of the expression are met. 
// If any of the sides of the expression is not met, the AND operator will return false.
let condition = true;
let status = true;
console.log (condition && status);

let num = 2 < 3; //true
let Value = 3 === "3"; //false
console.log (num && Value); //false because the second expression is false

// OR(||), returns true when either sides of the expression is met and will only return false when all the sides are not met.
let myName = true;
let myBalance = false;
console.log (myName || myBalance);

let myMethod = false;
let myTechnique = false;
console.log (myMethod || myTechnique);   //false because all the sides are false

let sum = 4 + 2;
let minus = 10 - 4;
console.log (sum === 6 || minus === 5);

// NOT(!), returns the inverse or opposite of a boolean value.
let reverse = !true;
console.log (reverse);  //false because not returns the opposite of our value

let order = 18 / 2;  //9
let secondOrder = 2 ** 3;  //2*2*2=8
console.log (order - secondOrder === 1 && order % secondOrder === 0);  // 9-8==1, so the first expression is true; 
// 9%8==1 so the second expression is false. Since we are using AND operator, 
// it will return false because both sides are not the same.



