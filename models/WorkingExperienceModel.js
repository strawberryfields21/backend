import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const WorkingExperience = db.define('experience',{
    header:DataTypes.STRING,
    subheader:DataTypes.STRING,
    description:DataTypes.STRING
},{freezeTableName:true})

export default WorkingExperience;
(async () => {
 await db.sync();
})();
