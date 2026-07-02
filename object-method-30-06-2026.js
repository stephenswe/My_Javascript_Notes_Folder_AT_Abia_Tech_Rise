// OBJECTS
// They are data types that stores information in key value pairs. // OR
// An object is a data structure used to store related 
// information about a single item using, key value pairs.
// Object syntax:
// let objectName = {
//     key1 : value1,
//     key2 : value2,
//     key3 : value3,
// }

// EXAMPLE
let Student = {
    Name: "Abdulahim Adamma",
    Age: 45,
    State: "Adamawa",
    Complexion : "Dark",
    LGA : "Yola South"
}

// How to Access Object Properties
// 1). dot notation (.)
console.log (Student.Name);
console.log (Student.Complexion);

// 2). bracket notation []
console.log(Student["LGA"]);
console.log(Student["Age"])


// object entries(): it returns an array containing all the key value pairs of an object as an array.
console.log(Object.entries(student));

// Changing values in objects

// Normal way to change a value
let school = "JavaScript"
school = "CAD & CAM"
console.log(school);

// Changing values using objects
Student.Name = "Temple";
console.log(Student)

// Delete or remove a property in object
delete Student.age;
console.log(Student);

// Adding new properties in object
Student.Course = "JavaScript";
console.log(Student);

// Adding an array inside an object
Student.Score = [70, 95, 60];
console.log(Student)

// Accessing your array
console.log(Student.Score);
console.log(Student.Score[0]);

// Nested objects
// It means an object inside another object.
let staff = {
    name: "Chiamaka",
    age: 29,
    position: "Manager",
    state: "Anambra",
    address: {
        city: "Ojoto",
        LGA: "Idemili South"
    }
}
console.log(staff.address.city);          // using dot (.) notation
console.log(staff["address"]["city"]);    // using bracket [] notation
console.log(staff.address["city"]);       // using both dot(.) and bracket[] notation


// OBJECT METHOD
// It is a function that lives inside an object.
let players = {
    name: "Messi",
    greet: function(){
        return "Hi! The Greatest player in history is Messi"
    }
}
console.log(players.greet());

// changing the name 
let player = {
    name: "Messi",
    greet: function(){
        return "Hi! The Greatest player in history is "
        + this.name
    }
}
console.log(player);
player.name = "Pele";
console.log(player.greet());

// this() keyword
// It's a keyword that refers to the object that is currently executing a code.
// It refers to the value of the object you're trying to change.

// Loop in object
// for....in loop: It is used when you want to loop through an object.
// syntax:
// for ( let newObjectName in objectName){
//     code execution
// }

player.nationality = "Brazil";
player.age = 75;
player.complexion = "Dark";
player.age = "Deceased";
delete player.complexion;
console.log(player);


player.nationality = "Nigerian";

players.age="36";

player.Complexion = "dark";

player.age="50";

delete player.Complexion;
console.log(!player.complexion);

// for (let key in)

for (let key in player){
    console.log(key); //returned only the keys in the object
    // console.log(player[key]); //returned only the values in the object

    console.log(key + ": " + player[key]); //for both key and value
}

// Destructuring of an object
// It's used to assign variables to each key in an object.

// without destructuring
// let playerName = player.name;

// with destructuring

let {name, age, nationality} = player;

console.log(age);
console.log(name);
console.log(nationality);

// Renaming while destructuring

let {age: playerAge} = player;

