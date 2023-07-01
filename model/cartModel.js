const getDb = require('../util/mongodb').getDb;
const mongodb = require('mongodb');

const user = [];

module.exports= class userModel {

    constructor(email, username, password, phone, address) {
        
        this.email = email;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    saveUser() {
        const db = getDb();
        return db
        .collection('cart')
        .insertOne(this)
        .then(result =>{
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }

    static fetchAllUsers() {
        const db = getDb();
        return db
        .collection('cart')
        .find()
        .toArray()
        .then(carts => {
            console.log(carts);
            return carts;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteCartItem(cartId) {
        const db = getDb();
        return db
        .collection('users')
        .deleteOne({_id: new mongodb.ObjectId(userid)})
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findCartItemById(cartId) {
        const db = getDb();
        return db
        .collection('cart')
        .find({_id: new mongodb.ObjectId(cartId)})
        .next()
        .then(cart => {
            console.log(cart);
            return cart;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static updateCart(userid, email, username, password, phone, address) {
        console.log('in update product ', userid);
        const db = getDb();
        return db
        .collection('users')
        .updateOne(
            {_id: new mongodb.ObjectId(userid)},
            { $set: {email: email, username: username, password: password, phone: phone, address:address}}
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