const Sequelize = require("sequelize");

const sequelize = new Sequelize("online_shop","root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.sync();
module.exports = sequelize;