module.exports = (app) =>{
    const contactdetails = require("../controller/contact.controller.js");
    app.post("/api/createcontact",contactdetails.create)
}