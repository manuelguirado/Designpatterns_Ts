// Abstracción
abstract class Shape {
    protected color: Color; // implementación delegada

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): void;
}

// Implementación
interface Color {
    fill(): string;
}

// Implementaciones concretas
class RedColor implements Color {
    fill(): string {
        return "Rellenado en Rojo";
    }
}

class GreenColor implements Color {
    fill(): string {
        return "Rellenado en Verde";
    }
}

// Abstracciones refinadas
class Circle extends Shape {
    draw(): void {
        console.log(`Dibujando círculo. ${this.color.fill()}`);
    }
}

class Rectangle extends Shape {
    draw(): void {
        console.log(`Dibujando rectángulo. ${this.color.fill()}`);
    }
}

// Example usage
const red = new RedColor();
const green = new GreenColor();

const circle = new Circle(red);
circle.draw(); // Dibujando círculo. Rellenado en Rojo

const rectangle = new Rectangle(green);
rectangle.draw(); // Dibujando rectángulo. Rellenado en Verde
