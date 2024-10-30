import type { LanguagesInterface } from '@interfaces/index';
import { getDatabaseConnection } from '../../config/data-source';
import { Languages } from '../../entities/Languages';

export const createLanguage = async (
	data: LanguagesInterface,
): Promise<Languages> => {
	const connection = await getDatabaseConnection();
	const newLanguageRecord = connection.manager.create(
		Languages,
		data as Partial<Languages>,
	);

	try {
		await connection.manager.save(newLanguageRecord);
		return newLanguageRecord;
	} catch (error) {
		// Handle the error appropriately
		console.error('Error saving language record:', error);
		throw new Error('Failed to add language record');
	}
};
