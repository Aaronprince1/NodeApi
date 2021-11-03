const db = require('../config/db-config.js');
const JobDetails = db.jobdetails;

exports.create = (req, res) => {
    JobDetails.create({
        Job_Id: req.body.Job_Id,
        Job_Title: req.body.Job_Title,
        Job_Description: req.body.Job_Description,
        Job_Prefered_Skill:req.body.Job_Prefered_Skill,
        Job_IsActive: 0
    }).then((data) => {
        res.status(200).json({
            status: true,
            message: "Job details Added Successfully!!"
        });
    });
};

exports.view = (req, res) => {
    JobDetails.findAll({ where: { Job_IsActive: 0 } }).then((data) => {
        res.status(200).json({
            status: true,
            data: data
        })
    })
};

exports.viwById =(req,res)=>{
    JobDetails.findOne({
        where:{
            Job_Id:req.params.id,
            Job_IsActive: 0
        }
    })
    .then((data)=>{
        res.status(200).json({
            status: true,
            data:data
        })
    })
}
exports.update = (req, res) => {
    JobDetails.update({
        Job_Title: req.body.Job_Title,
        Job_Description: req.body.Job_Description,
        Job_Prefered_Skill: req.body.Job_Prefered_Skill
    },
        {
            where: {
                Job_Id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                status: true,
                message: "JobDetails Updated Successfully!!!"
            })
        })
};

exports.delete = (req, res) => {
    JobDetails.update(
        { Job_IsActive: 1 },
        {
            where: {
                Job_Id: req.params.id
            }
        }).then(()=>{
            res.status(200).json({
                status:true,
                message: "Data Deleted Successfully!!!"
            })
        })
};

