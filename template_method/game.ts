class game {
    // Template method defining the skeleton of the game loop
    turn(){
        this.collectResources();
        this.build();
        this.buildUnits();
        this.attack();
    }
    collectResources(){
        console.log("Collecting resources...");
        // Logic for collecting resources
        for (let i = 0; i < 5; i++) {
            console.log(`Resource ${i + 1} collected.`);
        }
    }
    build(){
        console.log("Building structures...");
        // Logic for building structures
        for (let i = 0; i < 2; i++) {
            console.log(`Structure ${i + 1} built.`);
        }
    }
    buildUnits(){
        console.log("Building units...");
        // Logic for building units
        for (let i = 0; i < 3; i++) {
            console.log(`Unit ${i + 1} built.`);
        }
    }
    attack(){
        console.log("Attacking enemy...");
        // Logic for attacking the enemy
        for (let i = 0; i < 2; i++) {
            console.log(`Attack ${i + 1} executed.`);
        }
    }
    sendScouts(position: string){
        console.log(`Sending scouts to ${position}...`);
        // Logic for sending scouts
        console.log(`Scouts sent to ${position}.`);
    }
    sendScoutsToEnemyBase(){
        console.log("Sending scouts to enemy base...");
        // Logic for sending scouts to the enemy base
        this.sendScouts("enemy base");
    }
    sendWarriorsToEnemyBase(){
        console.log("Sending warriors to enemy base...");
        // Logic for sending warriors to the enemy base
        this.sendScouts("enemy base");
    }
}
class orcs extends game {
    buildStructures(){
        console.log("Orcs are building structures...");
        // Orc-specific logic for building structures
        for (let i = 0; i < 3; i++) {
            console.log(`Orc structure ${i + 1} built.`);
        }
    }
    buildUnits(): void {
        console.log("Orcs are building units...");
        // Orc-specific logic for building units
        for (let i = 0; i < 4; i++) {
            console.log(`Orc unit ${i + 1} built.`);
        }
    }
    sendScouts(position: string): void {
        console.log(`Orcs are sending scouts to ${position}...`);
        // Orc-specific logic for sending scouts
        console.log(`Orc scouts sent to ${position}.`);
    }
    sendScoutsToEnemyBase(): void {
        console.log("Orcs are sending scouts to enemy base...");
        // Orc-specific logic for sending scouts to the enemy base
        this.sendScouts("enemy base");
    }
    sendWarriorsToEnemyBase(): void {
        console.log("Orcs are sending warriors to enemy base...");
        // Orc-specific logic for sending warriors to the enemy base
        this.sendScouts("enemy base");
    }
    attack(): void {
        console.log("Orcs are attacking enemy...");
        // Orc-specific logic for attacking the enemy
        for (let i = 0; i < 3; i++) {
            console.log(`Orc attack ${i + 1} executed.`);
        }
    }
}
class humans extends game {
    buildStructures(){
        console.log("Humans are building structures...");
        // Human-specific logic for building structures
        for (let i = 0; i < 2; i++) {
            console.log(`Human structure ${i + 1} built.`);
        }
    }
    buildUnits(): void {
        console.log("Humans are building units...");
        // Human-specific logic for building units
        for (let i = 0; i < 3; i++) {
            console.log(`Human unit ${i + 1} built.`);
        }
    }
    sendScouts(position: string): void {
        console.log(`Humans are sending scouts to ${position}...`);
        // Human-specific logic for sending scouts
        console.log(`Human scouts sent to ${position}.`);
    }
    sendScoutsToEnemyBase(): void {
        console.log("Humans are sending scouts to enemy base...");
        // Human-specific logic for sending scouts to the enemy base
        this.sendScouts("enemy base");
    }
    sendWarriorsToEnemyBase(): void {
        console.log("Humans are sending warriors to enemy base...");
        // Human-specific logic for sending warriors to the enemy base
        this.sendScouts("enemy base");
    }
    attack(): void {
        console.log("Humans are attacking enemy...");
        // Human-specific logic for attacking the enemy
        for (let i = 0; i < 2; i++) {
            console.log(`Human attack ${i + 1} executed.`);
        }
    }
    collectResources(): void {
        console.log("Humans are collecting resources...");
        // Human-specific logic for collecting resources
        for (let i = 0; i < 4; i++) {
            console.log(`Human resource ${i + 1} collected.`);
        }
    }
    build(): void {
        console.log("Humans are building structures...");
        // Human-specific logic for building structures
        for (let i = 0; i < 3; i++) {
            console.log(`Human structure ${i + 1} built.`);
        }
    }
   
   
}
// Example usage
const orcGame = new orcs();
orcGame.turn();
const humanGame = new humans();
humanGame.turn();
console.log("Orc scouts to enemy base:");
orcGame.sendScoutsToEnemyBase();
console.log("Human scouts to enemy base:");
humanGame.sendScoutsToEnemyBase();
console.log("Orc warriors to enemy base:");
orcGame.sendWarriorsToEnemyBase();
console.log("Human warriors to enemy base:");
humanGame.sendWarriorsToEnemyBase();
console.log("Orc attack:");
orcGame.attack();
console.log("Human attack:");
humanGame.attack();
console.log("Orc build structures:");
orcGame.buildStructures();
console.log("Human build structures:");
humanGame.buildStructures();
console.log("Orc build units:");
orcGame.buildUnits();
console.log("Human build units:");
humanGame.buildUnits();
console.log("Orc collect resources:");
orcGame.collectResources();
console.log("Human collect resources:");
humanGame.collectResources();