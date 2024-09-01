import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { RequestSettingsInterface } from './interfaces/settings.interface';

export const updateSettings = async (
	id: number,
	data: RequestSettingsInterface,
): Promise<Settings> => {
	const connection = await getDatabaseConnection();

	const settingsRecord = await connection.manager
		.createQueryBuilder()
		.select('settings')
		.from(Settings, 'settings')
		.where('settings.id = :id', { id })
		.getOne();

	if (settingsRecord) {
		Object.assign(settingsRecord, data);
		await connection.manager.save(settingsRecord);
		return settingsRecord;
	}

	throw new Error(`Settings with id ${id} not found.`);
};
