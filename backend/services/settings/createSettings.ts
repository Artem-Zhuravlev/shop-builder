import type { DeepPartial } from 'typeorm';
import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { SettingsInterface } from './interfaces/settings.interface';

export const createSettings = async (
	data: SettingsInterface,
): Promise<Settings> => {
	const connection = await getDatabaseConnection();

	const settingsRecord = connection.manager.create(
		Settings,
		data as DeepPartial<Settings>,
	);

	await connection.manager.save(settingsRecord);

	return settingsRecord;
};