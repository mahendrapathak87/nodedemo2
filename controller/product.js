const prodModel = require('../model/productModel');

//const products = [];

exports.shopController = (req, res, next) => {
  const prods = prodModel.fetchAll();
  console.log('products ==== ',prods);
  res.render("frontend/shop", {
    title: "Customer App",
    content: "Hi Customer app router file",
    active: "shop",
    products: prods,
  });
};


exports.saveProductController = (req,res,next) => {
    const prodObj = new prodModel(req.body.name);
    prodObj.saveProducts();
   // console.log('admin js',prodModel.prodsArr);
    res.redirect('/');
};

exports.addProductController = (req, res, next)=> {
    res.render('admin/addproduct',{
      title: "add product page",
      active: "addproduct",
    });
};
