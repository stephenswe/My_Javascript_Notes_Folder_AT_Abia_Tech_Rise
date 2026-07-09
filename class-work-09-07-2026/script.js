const user = {
    name: "Chichi",
    age: 35,
    address: "No. 3, Adamu Street, Umuahia, Abia State"
}

const {name, age, address} = user


console.log(user.name);
console.log(user.age);
console.log(user.address);

const display = document.getElementById("displayHTML")

display.innerHTML = `
    <h2>User Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Address:</strong> ${address}</p>
`;