import type { CountriesInterface } from '@interfaces/index';
import { getDatabaseConnection } from '../../config/data-source';
import { Countries } from '../../entities/Countries';

export const updateCountry = async (
	id: number,
	data: CountriesInterface,
): Promise<Countries | null> => {
	const connection = await getDatabaseConnection();

	const countryRecord = await connection.manager.findOne(Countries, {
		where: { id },
	});

	if (!countryRecord) {
		throw new Error(`Country with id ${id} not found.`);
	}

	Object.assign(countryRecord, data);
	await connection.manager.save(countryRecord);
	return countryRecord;
};
