import { getDatabaseConnection } from '../../config/data-source';
import { Countries } from '../../entities/Countries';
import { In } from 'typeorm';

export const deleteCountry = async (id: number[]): Promise<Countries[]> => {
	const connection = await getDatabaseConnection();

	const countryRecords = await connection.manager.find(Countries, {
		where: { id: In(id) },
	});

	if (countryRecords.length === 0) {
		throw new Error(`Countries with ids ${id.join(', ')} not found.`);
	}

	await connection.manager.remove(Countries, countryRecords);

	return countryRecords;
};
