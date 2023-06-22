const products = [];

module.exports= class ProductModel {

    constructor(title) {
        this.title = title;
    }

    saveProducts() {
        console.log('in model');
        console.log(this);
        products.push(this);
        console.log('products');
        console.log(products);
    }

    static fetchAll() {
        return products;
    }

}

