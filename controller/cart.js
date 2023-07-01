const userModel = require("../model/cartModel");

exports.addtocart = (req, res, next) => {
  res.render("fronend/cart", {
    title: "Add to cart",
    content: "Add to cart",
    active: "cart",
  });
};