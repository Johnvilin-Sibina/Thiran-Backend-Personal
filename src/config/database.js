import { Sequelize } from "sequelize";
import config from "./config.cjs";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

export default sequelize;