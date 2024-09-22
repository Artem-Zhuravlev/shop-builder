import type { SettingsInterface } from '@interfaces/index';
import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';

export const updateSettings = async (
	data: SettingsInterface,
): Promise<Settings> => {
	const connection = await getDatabaseConnection();

	const settingsRecords = await connection.manager.find(Settings);

	if (settingsRecords.length > 0) {
		const settingsToUpdate = settingsRecords[0];
		Object.assign(settingsToUpdate.data, data);
		await connection.manager.save(settingsToUpdate);
		return settingsToUpdate;
	}

	const newSettings = new Settings();
	newSettings.data = Object.assign({}, data);
	await connection.manager.save(newSettings);
	return newSettings;
};
