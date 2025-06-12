import { Product,Box } from "./products";

let shop = new Box("Shop");
shop.add(new Product("Laptop", 1000));
shop.add(new Product("Smartphone", 800));

let electronicsBox = new Box("Electronics");
electronicsBox.add(new Product("TV", 1500));
electronicsBox.add(new Product("Headphones", 200));

shop.add(electronicsBox);

shop.getContents().forEach(item => {
  console.log(`Product: ${item.getName()}, Price: $${item.getPrice()}`);
}
);
console.log(`Total Price: $${shop.getPrice()}`);