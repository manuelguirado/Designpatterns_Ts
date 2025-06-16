// Clase abstracta base
abstract class VisitorShape {
    constructor(public x: number, public y: number, public color: string) {}

    abstract move(pos_x: number, pos_y: number): void;
    abstract draw(): void;
    abstract accept(visitor: ShapeVisitor): void;
}

// Clases concretas
class Dot extends VisitorShape {
    constructor(x: number, y: number, color: string) {
        super(x, y, color);
    }

    move(pos_x: number, pos_y: number): void {
        this.x = pos_x;
        this.y = pos_y;
    }

    draw(): void {
        console.log(`Drawing a dot at (${this.x}, ${this.y}) with color ${this.color}`);
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitDot(this);
    }
}

class VisitorCircle extends VisitorShape {
    constructor(x: number, y: number, public radius: number, color: string) {
        super(x, y, color);
    }

    move(pos_x: number, pos_y: number): void {
        this.x = pos_x;
        this.y = pos_y;
    }

    draw(): void {
        console.log(`Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius} and color ${this.color}`);
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}

class VisitorRectangle extends VisitorShape {
    constructor(x: number, y: number, public width: number, public height: number, color: string) {
        super(x, y, color);
    }

    move(pos_x: number, pos_y: number): void {
        this.x = pos_x;
        this.y = pos_y;
    }

    draw(): void {
        console.log(`Drawing a rectangle at (${this.x}, ${this.y}) with size ${this.width}x${this.height} and color ${this.color}`);
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }
}

class Triangle extends VisitorShape {
    constructor(x: number, y: number, public base: number, public height: number, color: string) {
        super(x, y, color);
    }

    move(pos_x: number, pos_y: number): void {
        this.x = pos_x;
        this.y = pos_y;
    }

    draw(): void {
        console.log(`Drawing a triangle at (${this.x}, ${this.y}) with base ${this.base}, height ${this.height}, and color ${this.color}`);
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitTriangle(this);
    }
}

// Interfaz del Visitor
interface ShapeVisitor {
    visitDot(dot: Dot): void;
    visitCircle(circle: VisitorCircle): void;
    visitRectangle(rectangle: VisitorRectangle): void;
    visitTriangle(triangle: Triangle): void;
}

// Visitor concreto para exportar a XML
class XMLExportVisitor implements ShapeVisitor {
    visitDot(dot: Dot): void {
        console.log(`<dot><x>${dot.x}</x><y>${dot.y}</y><color>${dot.color}</color></dot>`);
    }

    visitCircle(circle: VisitorCircle): void {
        console.log(`<circle><x>${circle.x}</x><y>${circle.y}</y><radius>${circle.radius}</radius><color>${circle.color}</color></circle>`);
    }

    visitRectangle(rectangle: VisitorRectangle): void {
        console.log(`<rectangle><x>${rectangle.x}</x><y>${rectangle.y}</y><width>${rectangle.width}</width><height>${rectangle.height}</height><color>${rectangle.color}</color></rectangle>`);
    }

    visitTriangle(triangle: Triangle): void {
        console.log(`<triangle><x>${triangle.x}</x><y>${triangle.y}</y><base>${triangle.base}</base><height>${triangle.height}</height><color>${triangle.color}</color></triangle>`);
    }
}

// Clase Exportadora
class Exporter {
    constructor(private shapes: VisitorShape[]) {}

    exportToXML(visitor: ShapeVisitor): void {
        this.shapes.forEach(shape => shape.accept(visitor));
    }
}

// Fábrica de formas
class ShapeFactory {
    static createShape(type: 'dot' | 'circle' | 'rectangle' | 'triangle'): VisitorShape {
        switch (type) {
            case 'dot':
                return new Dot(1, 2, 'red');
            case 'circle':
                return new VisitorCircle(3, 4, 5, 'blue');
            case 'rectangle':
                return new VisitorRectangle(5, 6, 7, 8, 'green');
            case 'triangle':
                return new Triangle(2, 3, 4, 5, 'yellow');
            default:
                throw new Error(`Unknown shape type: ${type}`);
        }
    }
}

// Uso del código
const shapes: VisitorShape[] = [
    ShapeFactory.createShape('dot'),
    ShapeFactory.createShape('circle'),
    ShapeFactory.createShape('rectangle'),
    ShapeFactory.createShape('triangle')
];

const xmlVisitor = new XMLExportVisitor();
const shapeExporter = new Exporter(shapes);

// Exportar a XML
shapeExporter.exportToXML(xmlVisitor);
// Resultado esperado:

