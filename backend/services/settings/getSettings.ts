import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { SettingsInterface } from '@interfaces/settings';

export const getSettings = async (): Promise<object | null> => {
	const connection = await getDatabaseConnection();

	const settingsRecords = await connection.manager.find(Settings);

	if (settingsRecords.length > 0) {
		return settingsRecords[0].data as SettingsInterface;
	}

	return null;
};
