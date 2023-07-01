const express = require('express');
const pagenotfound = require('./controller/controller404');
const mongoConnection = require('./util/mongodb').mongoConnect;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const shopRoute = require('./routers/shop');
const adminData = require('./routers/admin');

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views','views');
app.use(adminData.routes);
app.use(shopRoute);

//404 page not found
app.use(pagenotfound.page404);


 mongoConnection(() => {
    app.listen(7070);
});


/*mongoose
.connect('URI')
.then(res => {
    app.listen(7070);
})
.catch(err => {
    console.log(err);
});*/

