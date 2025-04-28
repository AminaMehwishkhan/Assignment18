alert("Welcome to our shop!");

let item = prompt("Enter the name of the item:");
let price = parseFloat(prompt("Enter the price of the item (in PKR):"));
let quantity = parseInt(prompt("Enter the quantity:"));

let subtotal = price * quantity;

alert(`You bought ${quantity} ${item}s.\nSubtotal: PKR ${subtotal.toFixed(2)}`);
