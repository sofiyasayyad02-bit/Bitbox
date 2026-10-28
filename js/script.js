// console.log('Welcome to Bitebox...!');

let rest = 'BiteBox';
// console.log('Welcome to ' + rest + '..!!');

let customer = prompt('Welcome to '+rest+'..!! \n\nWhat is Your Name?');

alert('Hello ' +customer+'..!! \n\nWelcome to '+rest+'..!!');

let explore = confirm('Would You Like To Explore Our Menu?');

if (explore) {
 
    alert("Great! Let's explore the BiteBox menu.");
 
}
 
else {
 
    alert("No problem! You can explore the menu anytime.");
 
}

let choice = prompt( "Choose a BiteBox category:\n" +
    "1. Pizza\n" +
    "2. Burgers\n" +
    "3. Pasta\n" +
    "4. Desserts"
);

switch (choice) {
    case "1":
        alert("You selected Pizza!");
        break;
    case "2":
        alert("You selected Burgers!");
        break;
    case "3":
        alert("You selected Pasta!");
        break;
    case "4":
        alert("You selected Desserts!");
        break;
    default:
        alert("Sorry Invalid category selection.");
}

for (let i = 1; i <= 3; i++) {
    let food = prompt("Enter food item " + i);
    let quantity = prompt("Enter quantity for " + food +'?' );
    console.log(food + " - Quantity: " + quantity);
}