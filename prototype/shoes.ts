class shoes {
    private size : number;
    private color : string;
    private brand : string;
    constructor(size: number, color: string, brand: string) {
        this.size = size;
        this.color = color;
        this.brand = brand;
    }
    public getSize(): number {
        return this.size;
    }
    public getColor(): string {
        return this.color;
    }
    public getBrand(): string {
        return this.brand;
    }
    public setSize(size: number): void {
        this.size = size;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public setBrand(brand: string): void {
        this.brand = brand;
    }
    clone(): shoes {
        return new shoes(this.size, this.color, this.brand);
    }
}
export { shoes };