module.exports = (sequelize,Sequelize) =>{
    const Contact =sequelize.define("ContactDetails",{
        Id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        Name:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
        Email:{
            type:Sequelize.STRING(150),
            allowNull:false
        },
        Subject:{
            type:Sequelize.STRING(300),
            allowNull:false
        },
        YourMessage:{
            type:Sequelize.STRING(2000),
            allowNull:false
        }
    });
    return Contact;
}