import { getDatabaseConnection } from '../../config/data-source';
import { Settings } from '../../entities/Settings';
import type { RequestSettingsInterface } from './interfaces/settings.interface';

export const getSettings = async (
	data?: RequestSettingsInterface,
	id?: number,
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

export const getByIdSettings = async (id: number): Promise<Settings | null> => {
	const connection = await getDatabaseConnection();

	try {
		const settingsRecord = await connection.manager.findOne(Settings, {
			where: { id },
		});

		return settingsRecord ?? null;
	} catch (error) {
		console.error('Error fetching settings by ID:', error);
		return null;
	}
};
