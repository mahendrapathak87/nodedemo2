const getDb = require('../util/mongodb').getDb;
const products = [];
const mongodb = require('mongodb');


module.exports= class ProductModel {

    constructor(title, price, description, imageurl) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageurl = imageurl;
    }

    saveProducts() {
        products.push(this);
        const db = getDb();
        db.collection('products')
        .insertOne(this)
        .then(result => {
            console.log('New product saved to mongo');
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => {
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(productId) {
        //const prodId = parseInt(productId);
        const db = getDb();
        return db
        .collection('products')
        .find({_id: new mongodb.ObjectId(productId)})
        .next()
        .then(product => {
            return product;
        })
        .catch(err => {
            console.log(err);
        })
    }

    static deleteProduct(productId) {
        const db = getDb();
        return db
        .collection('products')
        .deleteOne({_id: new mongodb.ObjectId(productId)})
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => {
            console.log(err);
        });

    }

    static updateProduct(productId, title, price, description, imageurl) {
        console.log('in update product ', productId);
        const db = getDb();
        return db
        .collection('products')
        .updateOne(
            {_id: new mongodb.ObjectId(productId)},
            { $set: {title: title, price: price, description: description, imageurl: imageurl}}
        )
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => {
            console.log(err);
        });
    }


}

