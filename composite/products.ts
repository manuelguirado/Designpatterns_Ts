// Componente base
export interface ProductComponent {
  getName(): string;
  getPrice(): number;
}

// Hoja (Leaf): Producto individual
export class Product implements ProductComponent {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

// Compuesto (Composite): Caja que contiene otros productos
export class Box implements ProductComponent {
  private children: ProductComponent[] = [];

  constructor(private name: string) {}

  add(component: ProductComponent) {
    this.children.push(component);
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  getContents(): ProductComponent[] {
    return this.children;
  }
}
