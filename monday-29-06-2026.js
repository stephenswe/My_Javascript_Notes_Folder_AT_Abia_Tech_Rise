// Advanced Array Method
// Map

// Map transforms every items into a new array

let scores = [20, 40, 60, 80, 100];

let Double = scores.map(
    function(score){
        return score * 2;
    })

    console.log(Double);
    console.log(scores);


let poeple = ["Francis","Olivia", "Temple", "Stanley", "Mesoma"];
let greeting = poeple.map(names => "Hello" + names + "!");



// filter()

// filter picks only items that passes a certain condition.

let passing = scores.filter(pass => pass >= 70);
    console.log(passing);


let groupC = ["Blessing", "Chukwuebuka", "Cornelius", "Chidi", "Chinaza", "Divine", "Daniel"]

let sort = groupC.filter(sortC => sortC[0] ==="C");
    console.log(sort);


// find- goes through your array and returns the first item that passes your conditon. 
// It returns only the first item that passes your condition


// class work

// filter() + map()
// You have this array:
// let scores = [40, 55, 70, 30, 88, 45, 92];

// First use filter() to get only scores 50 and above
// Then use map() on the result to add 5 bonus points to each passing score
// Print the final result

// Use find() to get the first score that is above 70
// Print the result
// Then try to find the first score above 95 and print the result

// Solution
let scored = [40, 55, 70, 30, 88, 45, 92];

let sorted = scored.filter( sorted => sorted >= 50);
console.log(sorted);

let added = sorted.map(
    function(adds){
        return adds + 5;
})

console.log(added)

let firstFind = scored.find(found => found > 70 );
console.log(firstFind)

let secondFind = scored.find(secondFound => secondFound > 95);
console.log(secondFind);


// reduce(): this collapses the whole array into one value

let num = [40, 55, 70, 30, 88, 45, 92];

let total = num.reduce((accumulator, score) => accumulator + score, 0);

console.log(total);

// You have this array:
// let expenses  = [200, 450, 100, 300, 550];


//use reduce() to calculat the total of all expenses

// print the result


let expenses  = [200, 450, 100, 300, 550];

let sum = expenses.reduce((accumulator, score) => accumulator + score, 0);
console.log(sum)


let letters = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

let joined = letters.reduce((accumulatorr, score) => accumulatorr + score, "");
console.log(joined);

// for....of Loop
// This is used for looping through an array

let course = ["AI", "2D", "Cyber Security", "CAD", "Python", "UI/UX", "Javascript"];

for (let courses of course){
    console.log(courses)
}

// Destructuring in an Array
// Destructuring is a shorter and cleaner way to do the samething in just one line.

let Fruits = ["Mango", "Orange", "Apple", "Banana", "Pawpaw"];

// without destructuring

// let first = Fruits[0];
// let second = Fruits[1]

// console.log(first)

// with destructuring 

let [first, second, third ] = Fruits;

let firsts = Fruits[0];

console.log(third);

// Swapping 
// Swapping without destructuring
let a = "watch"

let b = "Laptop"

let swap = a;

a = b;

b = swap;

console.log(a);

console.log(b);

// Swapping with destructuring 

[a, b] = [b, a];

// ...rest operator

let Fruivts = ["Mango", "Orange", "Apple", "Banana", "Pawpaw"];


let [firxt, ...remain] = Fruivts;

console.log(firxt);
console.log(remain);

// ...spread operator 
// The spread operator is just the three dot (...) you put before an array.

let Fruivtx = ["Mango", "Orange", "Apple", "Banana", "Pawpaw"];

console.log(...Fruivtx);


// copy an array without affecting the original one.

let colors = ["red", "blue", "green", "black", "Gold"];

let allItems = [...Fruivtx, ...colors];

console.log(allItems)


// adding an item to the array without changing the original
let moreColors = [...colors, "purple", "white"];

console.log(moreColors);


// using spread to split
let Course = "Javascript";

let word = [...Course];

console.log(word);