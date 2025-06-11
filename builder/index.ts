import { house } from "./house";
let myhouse = new house();
myhouse.buildWalls(4);
myhouse.buildRoof(1);
myhouse.buildDoors(2);
myhouse.buildWindows(6);
myhouse.buildGarage(1);
myhouse.buildGarden();
console.log(myhouse.getResults()); // Output: House built with walls, roof, doors, windows, garage, and garden.