class coche {
    private wheels: number;
    private color: string;
    private brand: string;
    private static instance: coche;
    private constructor(wheels: number, color: string, brand: string) {
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
    }
    public static getInstance(wheels: number, color: string, brand: string): coche {
        if (!coche.instance) {
            coche.instance = new coche(wheels, color, brand);
        }
        return coche.instance;
    }
    public getWheels(): number {
        return this.wheels;
    }
    public getColor(): string {
        return this.color;
    }
    public getBrand(): string {
        return this.brand;
    }
    public setWheels(wheels: number): void {
        this.wheels = wheels;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public setBrand(brand: string): void {
        this.brand = brand;
    }
    public toString(): string {
        return `Coche: ${this.brand}, Color: ${this.color}, Wheels: ${this.wheels}`;
    }
}
let myCar = coche.getInstance(4, 'red', 'Toyota');
console.log(myCar.toString()); // Output: Coche: Toyota, Color: red, Wheels: 4