module.exports = (sequelize, Sequelize) => {
    const JobPost = sequelize.define("JobPost", {
        Id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Job_Id: {
            type: Sequelize.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        Job_StartDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Job_EndDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Job_Location: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Job_Type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Job_Experience: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Job_Salary: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Job_IsActive: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    })
    return JobPost;
}