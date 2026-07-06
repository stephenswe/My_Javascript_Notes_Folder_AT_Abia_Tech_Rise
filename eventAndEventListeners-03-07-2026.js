// Event is anything that happens on the Browser that Javascript reponds or listens to.
//  It is what calls the attention of Javascript

// Events can be grouped into three
// -mouse - click, mousehover, mouseenter, mouseout, submit, drag
// -keboard - Keypress, Keyup, keydown, change, focus
// - form - submit, input

// 3 parts of EventListener

// -element - button
// event - click
// eventhandler - function\


// => element.addEventListener (event, event handler)

// => add EventListner 
// - removeEventListener

const button = document.querySelector("button");

button.addEventListener("click", ()=> {alert("This button was clicked")});

const hoverButton = document.getElementById("hv");

const hoverFn = ()=>{
    hoverButton.style.backgroundColor = "blue";
    };
    hoverButton.addEventListener("mouseover", hoverFn);
    hoverButton.addEventListener("mouseout", () => {
        hoverButton.style.backgroundColor = "white";
    });

// removeEventListener: It is used to remove an event, but this can only be 
// used after an addEventListener has been used.

const btn3 = document.querySelector("#button3");
const AlertFn = () => alert("click me again");
btn3.addEventListener("click", AlertFn)

// removeEventListener is used to disable or remove an even listener

// setTimeout (() => {
//     btn3.removeEventListener("ckick", AlertFn);
// }, 5000);