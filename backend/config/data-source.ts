import 'reflect-metadata';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Settings } from '../entities/Settings';
import { Countries } from '../entities/Countries';
import { Languages } from '../entities/Languages';
import 'dotenv/config';

const config = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: 5432,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	synchronize: false,
	namingStrategy: new SnakeNamingStrategy(),
	logging: false,
	entities: [Settings, Countries, Languages],
};

export const AppDataSource = new DataSource({
	...config,
	migrations: ['backend/database/migrations/*'],
} as DataSourceOptions);

const dataSource = new DataSource(config as DataSourceOptions);

export const getDatabaseConnection = async () => {
	if (!dataSource.isInitialized) {
		await dataSource.initialize();
	}
	return dataSource;
};
