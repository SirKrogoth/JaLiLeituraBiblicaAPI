import { Sequelize } from "sequelize";

const dbName = process.env.POSTGRES_NAME!;
const dbUser = process.env.POSTGRES_USER!;
const dbHost = process.env.POSTGRES_HOST;
const dbPass = process.env.POSTGRES_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'postgres',
    host: dbHost,
    logging: false
});

export default sequelize;