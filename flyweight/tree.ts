class treeType {
    private _name: string;
    private _height: number;
    private _color: string;
    private texture: string;
    constructor(name: string, height: number, color: string, texture: string) {
        this._name = name;
        this._height = height;
        this._color = color;
        this.texture = texture;
    }
    public getName(): string {
        return this._name;
    
    }
    public getHeight(): number {
        return this._height;
    }
    public getColor(): string {
        return this._color;
    }
    public getTexture(): string {
        return this.texture;
    }
    public setTexture(texture: string): void {
        this.texture = texture;
    }
    draw(position_x: number, position_y: number): void {
        console.log(`Drawing ${this._name} tree at (${position_x}, ${position_y}) with height ${this._height}, color ${this._color}, and texture ${this.texture}`);
    }
}
class treeFactory {
    private static treeTypes: { [key: string]: treeType } = {};

    public static getTreeType(name: string, height: number, color: string, texture: string): treeType {
        const key = `${name}-${height}-${color}-${texture}`;
        if (!this.treeTypes[key]) {
            this.treeTypes[key] = new treeType(name, height, color, texture);
        }
        return this.treeTypes[key];
    }
}
class forest {
    private trees: { [key: string]: treeType } = {};

    public addTree(name: string, height: number, color: string, texture: string, x: number, y: number): void {
        const treeType = treeFactory.getTreeType(name, height, color, texture);
        this.trees[`${x}-${y}`] = treeType;
        treeType.draw(x, y);
    }

    public getTree(x: number, y: number): treeType | undefined {
        return this.trees[`${x}-${y}`];
    }
    draw(): void {
        for (const key in this.trees) {
            const [x, y] = key.split('-').map(Number);
            this.trees[key].draw(x, y);
        }
    }
}
// Example usage
const myForest = new forest();
myForest.addTree('Oak', 20, 'Green', 'Rough', 10, 20);
myForest.addTree('Pine', 15, 'Dark Green', 'Smooth', 15, 25);
myForest.addTree('Oak', 20, 'Green', 'Rough', 30, 40); // Reuses existing Oak tree type
myForest.addTree('Birch', 12, 'White', 'Smooth', 5, 10);
myForest.draw();