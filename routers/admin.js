const express = require('express');

const adminControllers = require('../controller/product');
const userController = require('../controller/user');

const routes = express.Router();

//const products = [];

routes.post('/admin/saveproduct', adminControllers.saveProductController);
routes.get('/admin/addproduct', adminControllers.addProductController);

routes.get('/admin/listproducts', adminControllers.adminListController);
routes.post('/admin/deleteproduct', adminControllers.deleteProductController);
routes.get('/admin/updateproduct/:productId', adminControllers.updateProductController);
routes.post('/admin/updateproduct/', adminControllers.saveUpdatedProduct);

routes.get('/admin/adduser/',userController.adduser);
routes.get('/admin/updateuser/:userid',userController.updateusr);
routes.post('/admin/saveuser/',userController.saveUser);
routes.get('/admin/userlist/',userController.userlist);
routes.post('/admin/deleteuser/',userController.deleteuser);


exports.routes = routes;
//exports.products = products;