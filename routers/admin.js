const express = require('express');

const adminControllers = require('../controller/product');

const routes = express.Router();

//const products = [];

routes.post('/saveproduct', adminControllers.saveProductController);

routes.get('/addproduct', adminControllers.addProductController);


exports.routes = routes;
//exports.products = products;