module.exports = (app) => {

    const jobpost = require("../controller/jobpost.controller.js");
    app.post("/api/jobpost", jobpost.create);
    app.get("/api/getjobspost", jobpost.view);
    app.get("/api/getjobspost/:id", jobpost.viewById);
    app.put("/api/updatejobspost/:id", jobpost.update)
    app.put("/api/deletepost/:id", jobpost.delete);
}