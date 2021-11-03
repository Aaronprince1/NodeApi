const db = require("../config/db-config.js");
const JobDetails = require("../model/jobdetails.model.js")
const JobPost = db.jobposts;

exports.create = (req, res) => {
    JobPost.create({
        Job_Id: req.body.Job_Id,
        Job_StartDate: req.body.Job_StartDate,
        Job_EndDate: req.body.Job_EndDate,
        Job_Location: req.body.Job_Location,
        Job_Type: req.body.Job_Type,
        Job_Experience: req.body.Job_Experience,
        Job_Salary: req.body.Job_Salary,
        Job_IsActive: 0
    })
        .then((data) => {
            res.status(200).json({
                status: true,
                message: "Job Data Added Successfully!!!"
            });
        });
};

exports.view = (req, res) => {
    JobPost.findAll({where: { Job_IsActive: 0 },
        include: [{
            model:db.jobdetails,
            // as: 'JOB_ID',
            // required: true,
            where: { Job_IsActive: 0 }
            // where: { JOB_TITLE:2 }
        }],
        // where: { Job_IsActive: 0 }
    })
        .then((data) => {
            res.status(200).json({
                status: true,
                data: data
            });
        });
};

exports.viewById = (req, res) => {
    JobPost.findOne({
        where: {
            Id: req.params.id,
            Job_IsActive: 0
        }
    })
        .then((data) => {
            res.status(200).json({
                status: true,
                data: data
            })
        })
};

exports.update = (req, res) => {
    JobPost.update({
        Job_StartDate: req.body.Job_StartDate,
        Job_EndDate: req.body.Job_EndDate,
        Job_Location: req.body.Job_Location,
        Job_Type: req.body.Job_Type,
        Job_Experience: req.body.Job_Experience,
        Job_Salary: req.body.Job_Salary
    },
        {
            where: {
                Id: req.params.id
            }
        }).then(() => {
            res.status(200).json({
                status: true,
                message: "Jobpost Updated Successfully!!!"
            })
        })
};

exports.delete = (req, res) => {
    JobPost.update(
        { Job_IsActive: 1 },
        {
            where: {
                Id: req.params.id
            }
        }
    ).
        then(() => {
            res.status(200).json({
                status: true,
                message: "Data Deleted Successfully!!!"
            })
        })
}