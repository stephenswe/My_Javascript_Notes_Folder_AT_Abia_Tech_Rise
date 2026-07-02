// Loops

//-for: this is used when the number of time(condition) is known
// -for (initialization; condition; iteration)(increment or decrement{code execution}

for (let i = 0; i <=5; i++){
    console.log("hello world")
}

//the essence or the goal of our loop is to log "hello world" five times, in order to achieve this, we pass a certain condition (i<5), which
// i must satisfy because it executes the code. After each code is executed, the value of i is increased by adding +1 to it. 

for (let i=8; i>0; i--) {
    console.log("Thanks")
}

for (let y=1; y<=12; y++ ){
    console.log(`${y} * 2 = ${y * 2}`);
}

//-while : this is used when the number of conditon is not yet known
// initialization while(conditon){code execution; iteration. The condition is checked before the action is 
//checked
// 

let p=4;
while(p > 0){
    console.log(`while loop ${p}`);
    p--;
}


// class work - Log even numbers from 12 to 2 using for or while


for (let k = 12; k >= 2; k-- ){
    if (k % 2 ===0)
    console.log(`${k} is an even number`);
}

// -do while- It runs the actions atleast once before checking the condition


let age = 18;

do{
    console.log("Welcome")
}while(18 > 20)
//Despite age being less than 20 which is contrary to our condition that age must be less
// than 20."Welcome is still executed because in do while loop,the code execution takes place
// atleast once before the conditon is taken note of.

// Assignment

// continue

for (let v = 10; v <= 100; v += 10) {
  if (v === 50) {
    continue;
  }
  console.log(v);
}


//Break
// 
for (let x = 1; x <= 5; x++) {
  if (x === 3) {
    break; // Stops the loop entirely when i equals 3
  }
  console.log(x);
}

console.log("Loop stopped!");