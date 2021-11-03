module.exports = (sequelize,Sequelize) =>{
  const JobDetails = sequelize.define("JobDetails",{
      Job_Id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Job_Title:{
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        Job_Description:{
          type: "LONGTEXT",
          allowNull: false,
        },
        Job_Prefered_Skill:{
          type: "LONGTEXT",
          allowNull: true,
        },
        Job_IsActive: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        
        
  });
  return JobDetails;
}