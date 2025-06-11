class house {
    buildWalls( numberWalls : number ){
        if (numberWalls <= 0) {
            throw new Error("Number of walls must be greater than 0");
        }
        console.log("Building walls");
    }
    buildRoof(numberRoof : number){
        if (numberRoof <= 0) {
            throw new Error("Number of roofs must be greater than 0");
        }
        console.log("Building roof");
    }
    buildDoors(numberDoors : number){
        if (numberDoors <= 0) {
            throw new Error("Number of doors must be greater than 0");
        }
        console.log("Building doors");
    }
    buildWindows(numberWindows : number){
        if (numberWindows <= 0) {
            throw new Error("Number of windows must be greater than 0");
        }
        console.log("Building windows");
    }
    buildGarage(numberGarages : number){
        if (numberGarages <= 0) {
            throw new Error("Number of garages must be greater than 0");
        }
        console.log("Building garage");
    }
    buildGarden(){
        console.log("Building garden");
    }
    getResults(){
        return "House built with walls, roof, doors, windows, garage, and garden."; 
    }
}
export { house };