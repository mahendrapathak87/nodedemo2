const userModel = require("../model/userModel");

exports.adduser = (req, res, next) => {
  res.render("admin/adduser", {
    title: "Add Users",
    content: "Add user form",
    active: "add user",
    user: "",
  });
};

//insert and update new user
exports.saveUser = (req, res, next) => {
  if (req.body.userid) {
    //for updating product
    console.log("in save user");
    const userid = req.body.userid;
    console.log("user id");
    const updateRes = userModel.updateUser(
      userid,
      req.body.email,
      req.body.username,
      req.body.password,
      req.body.phonenumber,
      req.body.address
    );
    console.log(updateRes);
    updateRes.then((updatedata) => {
      res.redirect("/admin/userlist");
    });
  } else {
    const user = new userModel(
      req.body.email,
      req.body.username,
      req.body.password,
      req.body.phonenumber,
      req.body.address
    );
    user.saveUser();
    res.redirect("/admin/userlist");
  }
};

exports.userlist = (req, res, next) => {
  const userlist = userModel.fetchAllUsers().then((users) => {
    res.render("admin/allusers", {
      title: "Users list",
      content: "",
      users: users,
    });
  });
};

exports.deleteuser = (req, res, next) => {
  const userid = req.body.userid;
  console.log(userid);
  const deleteResponse = userModel.deleteUser(userid);

  deleteResponse.then((deleteResp) => {
    res.redirect("/admin/userlist");
  });
};

exports.updateusr = (req, res, next) => {
  const userid = req.params.userid;
  console.log(userid);
  userModel
    .findUserById(userid)
    .then((user) => {
      res.render("admin/adduser", {
        title: "Update User",
        content: "Add user form",
        active: "add user",
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
