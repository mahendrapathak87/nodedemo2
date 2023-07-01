const express = require('express');

//const admin = require('./admin');

const shopController = require('../controller/product');

const routes = express.Router();


routes.get('/',shopController.shopController);

routes.get('/viewproduct/:productId',shopController.viewProduct);

routes.post('/frontend/addtocart',shopController.viewProduct);

routes.get('/frontend/login',shopController.loginController);

module.exports = routes;