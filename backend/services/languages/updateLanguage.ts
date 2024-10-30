import type { LanguagesInterface } from '@interfaces/index';
import { getDatabaseConnection } from '../../config/data-source';
import { Languages } from '../../entities/Languages';

export const updateLanguage = async (
	id: number,
	data: LanguagesInterface,
): Promise<Languages | null> => {
	const connection = await getDatabaseConnection();

	const languageRecord = await connection.manager.findOne(Languages, {
		where: { id },
	});

	if (!languageRecord) {
		throw new Error(`Language record with id ${id} not found.`);
	}

	Object.assign(languageRecord, data);
	await connection.manager.save(languageRecord);
	return languageRecord;
};
