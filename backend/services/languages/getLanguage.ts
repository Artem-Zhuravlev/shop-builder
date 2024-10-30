import { getDatabaseConnection } from '../../config/data-source';
import { Languages } from '../../entities/Languages';

export const getLanguage = async (id: number): Promise<Languages | null> => {
	const connection = await getDatabaseConnection();

	const languageRecord = await connection.manager.findOne(Languages, {
		where: { id },
	});

	if (!languageRecord) {
		throw new Error(`Language record with id ${id} not found.`);
	}

	return languageRecord;
};
