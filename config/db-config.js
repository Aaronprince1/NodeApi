const env = require('./env.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.jobdetails = require("../model/jobdetails.model.js")(
    sequelize,
    Sequelize
);
db.jobposts = require("../model/jobpost.model.js")(
    sequelize,
    Sequelize
);
db.contactdetails = require("../model/contact.model.js")(
    sequelize,
    Sequelize
);

// db.jobposts.belongsTo(db.jobdetails,{})
// db.jobposts.belongsToMany(db.jobdetails,{through:'Job_Id'});
// db.jobdetails.belongsToMany(db.jobposts,{through:'Job_Id'});

// db.jobposts.hasMany(db.jobdetails, {foriegnKey:'Job_Id'})
// db.jobdetails.belongsTo(db.jobposts, {targetKey:'JOB_ID',foriegnKey:'JOB_ID'})

// db.jobdetails.sync();
// db.jobposts.sync();

module.exports = db; 