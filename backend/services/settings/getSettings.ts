import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { RequestSettingsInterface } from './interfaces/settings.interface';

export const getSettings = async (
	data?: RequestSettingsInterface,
): Promise<Settings[]> => {
	const connection = await getDatabaseConnection();

	let settingsRecords: Settings[];

	if (data?.id) {
		const { id } = data;
		const settingsRecord = await connection.manager.findOne(Settings, {
			where: { id },
		});
		settingsRecords = settingsRecord ? [settingsRecord] : [];
	} else {
		settingsRecords = await connection.manager.find(Settings);
	}

	return settingsRecords;
};
