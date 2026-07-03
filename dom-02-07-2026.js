// Document Object Model (DOM)
// The browser sees html files as a document file.
// Dom is a way that javascript is able to interact with the HTML fo a webpage. It allows developers to manipulate the
// structure, style, and content of web  pages dynamically.

// selectors are methods that javascript  uses to access html elements, attributes, contents etc.

// getElementsByTagName()


// getElemetsByTagName
// getElementsByClassName
// getElementsById
// querySelector
// querySelectorAll

const paragraph = document.getElementsByTagName("p");
console.log(paragraph)

// innerHTML: returns everything inside an element including the child elements and their contents

const anchor1 = document.getElementsByClassName("about");
// textContent and inner Text are used to return the contents of an elements 

console.log(anchor1[1].textContent );
console.log(anchor1[0].innerText );

// the differece between innerText  and textContent is that innerText respects Css visibility  while textContent does not 

console.log(anchor1[2].innerText);
console.log(anchor1[2].textContent);

// getElementsById returns an element using its id.

const paragraph2 = document.getElementById("p2");
console.log(paragraph2.textContent);

//queryselector

const Course = document.querySelector("div")
console.log(Course.textContent);

const course2 = document.querySelector(".div2");
console.log(course2.textContent);

const p3 = document.querySelector("#ronaldo")
console.log(p3.outerHTML);


const list = document.querySelectorAll("li");
list.forEach((li) => {

    console.log(`When i went to the market, I bought ${li.textContent}`);

});


// Classwork

// Using Javascript without touching your HTML.
// Change all the contents of your list(li);

// Answers
const secondListFoods = ['Tea & Bread', 'Spaghetti', 'Potatoes', 'Plantain'];
const thirdListFoods = ['Abacha', 'Okpa', 'Ukwa', 'Fio-fio', 'Agbugbu']

list.forEach((item, index) => {
    if (thirdListFoods[index]) {
        item.textContent = thirdListFoods[index];
    }
});


// Miss Oluomachi
// Modify Elements
// Create Elements

const chief = document.createElement("p");

chief.textContent = "We are Developers";

document.body.appendChild(chief);


const  contain  = document.getElementById("contain");

const P =  document.createElement("p");

P.textContent = 'A child of the section';

contain.appendChild(P);


// removeElement()

const hi = document.getElementById('hello');
hi.remove();


const test = document.getElementById("coco");

test.style.color = "blue";

