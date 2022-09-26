import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const DesignExplorationDetail = db.define('explorationdetail',{
    header:DataTypes.STRING,
    subheader:DataTypes.STRING,
    description:DataTypes.STRING,
    tag:DataTypes.STRING
},{freezeTableName:true})

export default DesignExplorationDetail;
(async () => {
 await db.sync();
})();
