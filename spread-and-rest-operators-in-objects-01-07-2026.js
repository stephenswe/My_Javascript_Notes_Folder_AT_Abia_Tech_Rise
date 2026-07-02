// CLASS WORK

// Create an object called bankAccount with these properties:
// owner — your name
// accountNumber — any number
// balance — 50000
// Then:
// Print the original balance
// Add 20000 to the balance
// Print the new balance
// Subtract 10000 from the balance
// Print the final balance


let bankAccount =  {
    owner : 'Stephen Michael',
    accountNumber : 2100000893,
    balance: 50000,
}


//Print the original balance 
function checkBankAccount(){
    return bankAccount.balance;
}
console.log(checkBankAccount());


//Add 20000 to the balance
function updatedBalance(amount){
    bankAccount.balance += amount;
    return bankAccount.balance;
}

updatedBalance(+20000);

console.log(bankAccount.balance)

// Spread and Rest 
// Spread operator takes all the properties from one object and spreads them in another object.

// ...spread operator
// It takes all the properties from one object, and spreads into another object.
let player1 = {
    name : "Mbappe",
    nationality : "France",
    age : 26
}
//Example
let newPlayer = {...player1, club: "Real Madrid"};
console.log(newPlayer);

let player2 ={
    name: "Ronaldo",
    country : "Portugal",
    height : 180 
}
console.log(newPlayer)

// let newPlayers = {...player1, ...player2}; // it will display only the last object.
// console.log(newPlayers)

// if you want both names to display
let newPlayers = {...player1, ...player2, name: [...player1.name, ...player2.name]}
console.log(newPlayers);

// ...rest operator in object
let School = {
    first: "Micheal Okpara",
    population: 500,
    courses: 18,
    vc: "Onyedikachi",
    state: "Kaduna"
}

let {first, population, ...remaining} = School;

console.log(first, population, remaining);


//CLASS WORK

// 1. Create the data
// Create an array called students. It should contain 4 objects. Each object should have these properties:

// name — the student's name (use Amira, Tunde, Lara, Emeka)
// age — any age between 14 and 18
// scores — an array of 3 scores (numbers between 40 and 100)
// isEnrolled — a boolean, true or false
// 2. Write a function to calculate average
// Write a function called getAverage that:

// takes one argument — a scores array
// adds all the scores together using a loop or reduce
// divides by the number of scores
// returns the average
// 3. Write a function to get a grade
// Write a function called getGrade that:

// takes one argument — an average score (a number)
// uses a conditional statement to return the right grade:

// AverageGrade70 and above"A"60 – 69"B"50 – 59"C"below 50"F"

// 4. Step 4 — Write a function to build a result
// Write a function called buildResult that:

// takes one argument — a single student object
// uses your getAverage and getGrade functions inside it
// returns a new object with these properties:

// name — the student's name
// average — the calculated average
// grade — the calculated grade
// passed — a boolean, true if average is 50 or above, false if not (use an operator to figure this out)

// 5. Process all students
// Use .map() on your students array to run buildResult on every student and store the result in a variable called results.


// SOLUTION

// solution to number one(1)
let students = [
    {
        name: "Amira",
        age: 18,
        scores: [50, 60, 40],
        isEnrolled: true,
    },

    {
        name: "Tunde",
        age: 14,
        scores: [49, 41, 43], //43/100
        isEnrolled: true,
    },

    {
        name: "Lara",
        age: 17,
        scores: [48, 99 , 71],
        isEnrolled: true,
    },
    
    {
        name: "Emeka",
        age: 15,
        scores: [91, 67, 42],
        isEnrolled: true,
    }
]

// solution to number two(2)


const getAverage = (scores) => { return scores.reduce((sum, score) => sum + score, 0) / scores.length; };


console.log(getAverage(students[0].scores));


// // solution to number three (3)

function getGrade(average) {

    if (average >= 70) {
        return "A";
    } else if (average >= 60) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else {
        return "F";
    }
}

let getGraded = getGrade(getAverage(students[0].scores));

console.log(getGraded);

// solution four(4)

function buildResult(student){
    let average = getAverage(student.scores);
    let grade = getGrade(average);

    return {

        name: student.name,
        average: average,
        grade: grade,
        passed: average >= 50,

    };

}

console.log(buildResult(students[1]))

//solution five

let results = students.map(buildResult);

console.log(results);