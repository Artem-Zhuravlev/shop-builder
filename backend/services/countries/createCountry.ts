import type { CountriesInterface } from '@interfaces/index';
import { getDatabaseConnection } from '../../config/data-source';
import { Countries } from '../../entities/Countries';

export const createCountry = async (
	data: CountriesInterface,
): Promise<Countries> => {
	const connection = await getDatabaseConnection();
	const newCountry = connection.manager.create(
		Countries,
		data as Partial<Countries>,
	);

	try {
		await connection.manager.save(newCountry);
		return newCountry;
	} catch (error) {
		// Handle the error appropriately
		console.error('Error saving country:', error);
		throw new Error('Failed to add country');
	}
};
