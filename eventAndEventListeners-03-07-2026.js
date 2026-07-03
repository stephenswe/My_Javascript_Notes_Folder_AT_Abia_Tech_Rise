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

const button = document.querySelector("button")

button.addEventListener("click", ()=> {alert("This button was clicked")})