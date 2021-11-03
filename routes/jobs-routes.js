module.exports = (app) =>{
    const jobdetails = require("../controller/jobdetails.controller.js");
    app.post("/api/createjob", jobdetails.create);
    app.get("/api/getjob", jobdetails.view);
    app.put("/api/updatejob/:id", jobdetails.update);
    app.put("/api/deletejob/:id", jobdetails.delete);
    app.get("/api/getjob/:id", jobdetails.viwById)
}