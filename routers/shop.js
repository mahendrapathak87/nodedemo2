const express = require('express');

//const admin = require('./admin');

const shopController = require('../controller/product');

const routes = express.Router();


routes.get('/',shopController.shopController);

module.exports = routes;