import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const ExperienceRespon = db.define('users',{
    name: DataTypes.STRING,
    workingexperienceid : DataTypes.INT
},{freezeTableName:true})

export default ExperienceRespon;
(async () => {
 await db.sync();
})();