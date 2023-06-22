const express = require('express');
const pagenotfound = require('./controller/controller404');
const mongoConnection = require('./util/mongodb');
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


//mongoConnection(client => {
    //console.log(client);
    app.listen(7070);
//});

