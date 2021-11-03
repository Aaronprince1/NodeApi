const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());


app.use(cors());

// include database config file
const db = require('./config/db-config.js');
db.sequelize.sync();


// aplication routes
require("./routes/jobs-routes.js")(app);
require("./routes/jobpost.routes.js")(app);
require("./routes/contact-routes.js")(app);

app.use(express.json()); 

app.get("/",(req,res)=>{
    res.send("It's Working!!!!")
})

app.listen(port,()=>{
    console.log(`Current Server ${port}`);
})
// var server = app.listen(port, function () {
//     var host = server.address().address;
//     var port = server.address().port;
  
//     console.log("Application request listening at http://%s:%s", host, port);
//   });