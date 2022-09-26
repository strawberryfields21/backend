import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const DesignExplorationDetailImage = db.define('explorationdetailimg',{
    image:DataTypes.STRING,
    explorationdetailid:DataTypes.STRING,
},{freezeTableName:true})

export default DesignExplorationDetailImage;
(async () => {
 await db.sync();
})();
