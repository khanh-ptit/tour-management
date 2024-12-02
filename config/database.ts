const Sequelize = require("sequelize");

import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME, // Tên db
    process.env.DB_USERNAME, // username
    process.env.DB_PASSWORD, // password
    {
    host: process.env.DB_HOST, // link hosting
    dialect: 'mysql'
    }
);


sequelize.authenticate().then(() => {   
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


export default sequelize