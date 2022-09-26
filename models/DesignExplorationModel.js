import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const DesignExploration = db.define('exploration',{
    header:DataTypes.STRING,
    subheader:DataTypes.STRING,
    description:DataTypes.STRING,
    image: DataTypes.STRING
},{freezeTableName:true})

export default DesignExploration;
(async () => {
 await db.sync();
})();
