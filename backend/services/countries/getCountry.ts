import { getDatabaseConnection } from '../../config/data-source';
import { Countries } from '../../entities/Countries';

export const getCountry = async (id: number): Promise<Countries | null> => {
	const connection = await getDatabaseConnection();

	const countryRecord = await connection.manager.findOne(Countries, {
		where: { id },
	});

	if (!countryRecord) {
		throw new Error(`Country with id ${id} not found.`);
	}

	return countryRecord;
};
