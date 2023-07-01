const prodModel = require("../model/productModel");

exports.loginController = (req, res, next) => {
  res.setHeader('Set-Cookie',[
    'isLoggedIn=true'
  ])
  res.render('frontend/login',{
    title: "Login",
    content: "Login page",
    active: "login",
  });
}

exports.shopController = (req, res, next) => {
  const prods = prodModel.fetchAll().then((products) => {
    //console.log("products ==== ", products);
    res.render("frontend/shop", {
      title: "Customer App",
      content: "Hi Customer app router file",
      active: "shop",
      products: products,
    });
  });
};

exports.saveProductController = (req, res, next) => {
  
  if (req.body.productid) {
    //for updating product
    console.log("in save controller");
    const prodid = req.body.productid;
    console.log("product id");
    const updatedProduct = prodModel.updateProduct(
      prodid,
      req.body.name,
      req.body.price,
      req.body.description,
      req.body.imageurl
    );
    console.log(updatedProduct);
    updatedProduct.then((updateResp) => {
      res.redirect("/admin/listproducts");
    });
  } else {
    //for creating new product
    const prodObj = new prodModel(
      req.body.name,
      req.body.price,
      req.body.description,
      req.body.imageurl
    );
    prodObj.saveProducts();
    // console.log('admin js',prodModel.prodsArr);
    res.redirect("/admin/listproducts");
  }
};

exports.addProductController = (req, res, next) => {
  res.render("admin/addproduct", {
    title: "add product page",
    active: "admin/addproduct",
    action: "/admin/saveproduct",
    productData: "",
  });
};

exports.viewProduct = (req, res, next) => {
  const productId = req.params.productId;
  const productData = prodModel.findById(productId);
  console.log(productData);
  productData.then((data) => {
    console.log(data);
    res.render("frontend/productview", {
      title: data.title,
      content: data.description,
      productInfo: data,
    });
  });
};

exports.adminListController = (req, res, next) => {
  const prods = prodModel.fetchAll().then((products) => {
    //console.log("products ==== ", products);
    res.render("admin/adminproductlist", {
      title: "Admin products list",
      content: "Admin shop controller",
      active: "adminlist",
      products: products,
    });
  });
};

exports.deleteProductController = (req, res, next) => {
  console.log(req.body);
  const productId = req.body.prodid;
  console.log(productId);
  const deleteResponse = prodModel.deleteProduct(productId);
  console.log(deleteResponse);
  deleteResponse.then((deleteResp) => {
    res.redirect("/admin/listproducts");
  });
};

exports.updateProductController = (req, res, next) => {
  console.log("in update controller");
  const productId = req.params.productId;
  const productData = prodModel.findById(productId);
  console.log(productData);
  productData.then((data) => {
    console.log(data);
    res.render("admin/addproduct", {
      title: "Update Products",
      content: "Admin Update controller",
      action: "/admin/saveproduct",
      productData: data,
    });
  });
};

exports.saveUpdatedProduct = (req, res, next) => {
  console.log("in save controller");
  const prodid = req.body.productid;
  console.log("product id");
  const updatedProduct = prodModel.updateProduct(
    prodid,
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.imageurl
  );
  console.log(updatedProduct);
  updatedProduct.then((updateResp) => {
    res.redirect("/admin/listproducts");
  });
};
