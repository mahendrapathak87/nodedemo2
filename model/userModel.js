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
        .collection('users')
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
        .collection('users')
        .find()
        .toArray()
        .then(users => {
            console.log(users);
            return users;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteUser(userid) {
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

    static findUserById(userid) {
        const db = getDb();
        return db
        .collection('users')
        .find({_id: new mongodb.ObjectId(userid)})
        .next()
        .then(users => {
            console.log(users);
            return users;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static updateUser(userid, email, username, password, phone, address) {
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