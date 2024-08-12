import { Dialect, Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
	process.env.DATABASE_NAME || 'db_name',
	process.env.DATABASE_USER || 'postgres',
	process.env.DATABASE_PASSWORD || 'password',
	{
		host: process.env.DATABASE_HOST || 'localhost',
		port: +(process.env.DATABASE_PORT || 5432),
		dialect: <Dialect>(process.env.DATABASE_DIALECT || 'postgres'),
		logging: true,
	}
);
