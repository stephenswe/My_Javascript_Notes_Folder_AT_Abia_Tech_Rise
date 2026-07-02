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

let displayAllstudents  = (students) => {
    console.log(students);
}

displayAllstudents(students)



//solution 2


let passedStudents = (students) => {
    let checkPassedStudents = students.filter(student => student.score >= 50);

    checkPassedStudents.forEach(student =>{
        console.log(`${student.name}, Age: ${student.age}, Score: ${student.score}, Department: ${student.department}`)
    })
}

passedStudents(students)

// solution three : Display only students who failed

const failedStudents = (students) =>{
    let checkFailedStudents = students.filter (student => student.score <= 50);


    checkFailedStudents.forEach(student =>{
        console.log(`${student.name}, Age: ${student.age}, Score: ${student.score}, Department: ${student.department}`)
    })

}


failedStudents(students)



// solution four: count how many student passed 

let countpassedStudents = (students) => {
    let checkPassedStudents = students.filter(student => student.score >= 50);
        console.log(checkPassedStudents.length);
}

countpassedStudents(students)

// solution five: count how many student failed 

let countFailedStudents = (students) => {
    let checkFailedStudents = students.filter(student => student.score <= 50);
        console.log(checkFailedStudents.length);
}

countFailedStudents(students)


// solution six: the student with the highest score.



// solution eight: average score


function averageScore() {
    let total = students.reduce((sum, student) => {
        return sum + student.score;
    }, 0);

    let average = total / students.length;

    console.log(`Average score is: ${average}`);
}

averageScore();

// 9. Search for a student by name
function searchStudent(name) {
    const student = students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );

    if (student) {
        console.log(student);
    } else {
        console.log("Student not found.");
    }
}

searchStudent("Mary")