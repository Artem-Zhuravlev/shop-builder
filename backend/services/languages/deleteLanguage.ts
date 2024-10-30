import { getDatabaseConnection } from '../../config/data-source';
import { Languages } from '../../entities/Languages';
import { In } from 'typeorm';

export const deleteLanguage = async (id: number[]): Promise<Languages[]> => {
	const connection = await getDatabaseConnection();

	const languageRecords = await connection.manager.find(Languages, {
		where: { id: In(id) },
	});

	if (languageRecords.length === 0) {
		throw new Error(`Languages with ids ${id.join(', ')} not found.`);
	}

	await connection.manager.remove(Languages, languageRecords);

	return languageRecords;
};
