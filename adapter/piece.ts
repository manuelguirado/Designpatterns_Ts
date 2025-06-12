class roundHola {
    private radius : number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius() : number {
        return this.radius;
    }
    fits(radius: number) : boolean {
        return this.radius >= radius;
    }
}
class roundPeg {
    private radius : number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius() : number {
        return this.radius;
    }
}
class squarePeg{
    private width : number;
    constructor(width: number) {
        this.width = width;
    }
    getWidth() : number {
        return this.width;
    }
}
class squarePegAdapter {
    private peg : squarePeg;
    constructor(peg: squarePeg) {
        this.peg = peg;
    }
    getRadius() : number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
    fits(peg: roundHola) : boolean {
        return peg.fits(this.getRadius());
    }
}

// Example usage
const roundHole = new roundHola(5);
const RoundPeg = new roundPeg(5);
const SquarePeg = new squarePeg(5);
const SquarePegAdapter = new squarePegAdapter(SquarePeg);
console.log("Round peg fits in round hole:", RoundPeg.getRadius() <= roundHole.getRadius());
console.log("Square peg fits in round hole:", SquarePegAdapter.fits(roundHole));
console.log("Square peg radius:", SquarePegAdapter.getRadius());