import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { SettingsInterface } from './interfaces/updateSettings.interface';

export const updateSettings = async (
	data: SettingsInterface,
): Promise<Settings> => {
	const connection = await getDatabaseConnection();

	const { id } = data;
	let settingsRecord = await connection.manager.findOne(Settings, {
		where: { id },
	});

	if (!settingsRecord) {
		settingsRecord = new Settings();
	}

	Object.assign(settingsRecord, data);

	const savedSettings = await connection.manager.save(settingsRecord);
	return savedSettings;
};
