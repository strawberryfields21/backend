import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const ExperienceAchievements = db.define('experienceachievements',{
    name: DataTypes.STRING,
    workingexperienceid : DataTypes.INT
},{freezeTableName:true})

export default ExperienceAchievements;
(async () => {
 await db.sync();
})();