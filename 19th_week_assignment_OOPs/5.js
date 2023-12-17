class Product {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Product "${product.name}" added to the inventory.`);
    }

    deleteProduct(productName) {
        const index = this.products.findIndex(product => product.name === productName);

        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            console.log(`Product "${deletedProduct.name}" deleted from the inventory.`);
        } else {
            console.log(`Product "${productName}" not found in the inventory.`);
        }
    }
}

const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Book', 'Books', 20, 50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop');
