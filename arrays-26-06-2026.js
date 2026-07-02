// ARRAYS
// syntax
// let arrayName = [value1, value2, value3];
// example of an Array:

let student = ["Francis", "Olivia", "Temple", "Stanley", "Excel", 
    "Mmesoma", "Samuel", "Divine", "Precious", "Prisca"];
console.log(student[7]);

// index
// Note: Array index refers to how many arrays you count and it starts from 0, 1, 2, 3, etc.
    console.log(student[7]);
// .length() is gives you the number of items are in an array.
    console.log(student.length);

// Array Methods

// Instance Methods
// .push(): it adds an item at the end of an array.
    let fruits = ["Mango", "Orange", "Apple", "Banana", "PawPaw",];
        fruits.push("Watermelon", "Pear");
    console.log(fruits);

// .unshift(): It adds an item at the beginning of an array.
    fruits.unshift("Strawberry", "Plum")
    console.log(fruits);

// .pop(): It removes the last item in an array.
    let remove = fruits.pop();
    console.log(remove);
    console.log(fruits);

// .shift(): It removes the first item in an array.
    console.log(fruits.shift());

// .include(): It checks if an item exists in an array. 
//  It returns a boolean (true or false).
    console.log(fruits.includes("Strawberry"));

// .indexOf(): It shows the position of an item, in an array.
    console.log(fruits.indexOf("Mango"));

// .join(): It turns the array into a string.
    console.log(typeof(fruits.join(", ")));

// .reverse(): It changes the order of the array, by flipping it.
    console.log(fruits.reverse());
    
// .sort(): It arranges it alphabetically.
    console.log(fruits.sort());

// .slice(): It copies part of an array and doesn't affect the original.
    console.log(fruits.slice(1,4));

// .splice(): It removes or inserts an item in array and affects the original.
// syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...);
    console.log(fruits.splice(1,1));
    // using splice to replace an item.
    fruits.splice(2, 1, "Coconut");
    console.log(fruits)
    // using splice to replace multiple items.
    let Remove = fruits.splice(2, 4, "Guava", "");
    console.log(Remove);

// Classwork 1 (Using the student variable listed above):
// a). Remove Excel. 
// b). Add a name at the end of the array
// c). Remove index 7 and add a name.
// d). Arrange them alphabetically.
// e). Give length of the item.
// f). Convert them to string.

// Solution
let students = ["Francis", "Olivia", "Temple", "Stanley", "Excel", 
    "Mmesoma", "Samuel", "Divine", "Precious", "Prisca"];
// a).
    students.splice(4, 1); // Removes Excel.
    console.log(students);
// b).
    students.push("Queen"); // Adds the name "Queen", at the end of the array
    console.log(students);
// c).
    students.splice(7, 1, "Miracle"); // It removes index 7 (Precious) and adds "Miracle"
    console.log(students);
// d).
    students.sort(); // It arranges them alphabetically.
    console.log(students);
// e).
    students.length; // It gives the length of the Items.
    console.log(students);
// f).
    students.join(", "); // It converts them to a string.
    console.log(students);

// Classwork 2
// Create an array called Students with these names: 
// ["Tunde", "Ada", "Emeka", "Ngozi", "Victor"]
// a). Check if "Ada" is in the array: display 'true' or 'false'.
// b). Find the index of "Emeka" and display it.
// c). Use join() to display all the names as one sentence separated by |.

// Solution
let Students =  ["Tunde", "Ada", "Emeka", "Ngozi", "Victor"];
// a).
    console.log(Students.includes("Ada"));
// b).
    console.log(Students.indexOf("Emeka"));
    //          or              //
    console.log(Students[2])

// c).
    console.log(Students.join(" | "));

//        ---          Classwork 3       ---          //
// You are managing a small shop inventory and you have this array to work with:
// let inventory = ["rice", "beans", "garri", "sugar", "salt", "flour"];

// Task 1
// 1a). Check if garri is in the inventory. 
// 1b). Display its index position if found, or display "Item not found".

// Task 2
// 
// 2a). A new item "palm oil" just arrived. Add it to the end of the inventory. 
// 2b). Then "pepper" also arrived and it must go first on the list.
// 2c). Display the updated inventory.

// Task 3
// Display the total number of items, currently in the inventory.

// Task 4
// The last item on the list got finished and needs to be removed.
// 4a). Display it's name with this message "is out of stock".

// Task 5
// 5a). Find the index of "sugar" and use that index to remove it using splice().
// 5b). Display the removed item and the updated inventory.

// Task 6
// Display all remaining items as one sentence like this:
// "Available items: pepper, rice, beans, garri, salt, palm oil"

//     ----     Solution     ----     //
let inventory = ["rice", "beans", "garri", "sugar", "salt", "flour"];

// Task 1
console.log(inventory.includes("garri"));       //  (1a)
if (inventory.includes("garri") === true) {     //  (1b)
    console.log(inventory.indexOf("garri"));
}   else {
    console.log("Item not found")
}

// Task 2
inventory.push("palm oil");      // (2a)
inventory.unshift("pepper");     // (2b)
console.log(inventory);          // (2c)

// Task 3
console.log(inventory.length)

// Task 4
let removePalmO = inventory.pop();
console.log(`${removePalmO} is out of stock.`);

// Task 5
console.log(inventory.indexOf("sugar"));     
let removeSugar = inventory.splice(4, 1);       // (5a)
console.log(removeSugar);
console.log(inventory);                         // (5b)

// Task 6
console.log("Available items: " + inventory.join(", "));



// ASSIGNMENT
// Read up on:
// a). map
// b). reviews
// c). filter
// d). for of 
// e). forEach


// ASSIGNMENT (For Class A, Optional for you.)
// 1). Create a code where you tell the user to input a first number, 
// an operator (addition or subtraction) and a last number. 
// 2). Add/subtract(or whatever operator you want) the numbers 
// using the user's inputs and display the results. 
// 3). Display both the calculations and the results, simultaneously.

// Question
const students = [
    {
        name: "John",
        age: 18,
        score: 75,
        department: "Frontend"
    },
    {
        name: "Mary",
        age: 20,
        score: 45,
        department: "Backend"
    },
    {
        name: "James",
        age: 19,
        score: 90,
        department: "Frontend"
    },
    {
        name: "Grace",
        age: 22,
        score: 60,
        department: "Design"
    },
    {
        name: "David",
        age: 17,
        score: 35,
        department: "Frontend"
    }
    ];

// Using this data above, write separate functions that will do each of the following:
// 1. Display all students.
// 2. Display only students who passed (score ≥ 50).
// 3. Display only students who failed.
// 4. Count how many students passed.
// 5. Count how many students failed.
// 6. Find the student with the highest score.
// 7. Find the student with the lowest score.
// 8. Calculate the average score.
// 9. Search for a student by name.

// Meaning you are to write 9 different functions for each of these tasks.
// Use all we've taught you so far to do this.

//              Solution                //

//solution 1

displayAllstudents = displayStudents = (students) => {
    console.log(students)
}