import { shoes } from "./shoes";
let myShoes = new shoes(42, "red", "Nike");
let clonedShoes = myShoes.clone();
console.log("Original Shoes:");
console.log(`Size: ${myShoes.getSize()}, Color: ${myShoes.getColor()}, Brand: ${myShoes.getBrand()}`);
console.log("Cloned Shoes:");
console.log(`Size: ${clonedShoes.getSize()}, Color: ${clonedShoes.getColor()}, Brand: ${clonedShoes.getBrand()}`);