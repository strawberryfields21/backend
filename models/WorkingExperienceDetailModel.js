import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const WorkingExperienceDetail = db.define('experiencedetail',{
    name:DataTypes.STRING,
    date:DataTypes.DATETIME,
},{freezeTableName:true})

export default WorkingExperienceDetail;
(async () => {
 await db.sync();
})();