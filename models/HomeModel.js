import sequelize, { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Home = db.define('home',{
    header:DataTypes.STRING,
    subheader:DataTypes.STRING,
    description:DataTypes.STRING
},{freezeTableName:true})

export default Home;
(async () => {
 await db.sync();
})();