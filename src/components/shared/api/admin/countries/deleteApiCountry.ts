import { apiBaseUrl } from '@/utils/fetchApi';
import type { CountriesInterface } from '@interfaces/index';

/**
 * Deletes countries from the API based on the provided IDs.
 *
 * @param {number[]} ids - An array of country IDs to be deleted.
 * @returns {Promise<CountriesInterface[]>} - A promise that resolves to an array of deleted country objects.
 * @throws {Error} - Throws an error if the input is invalid or if the API request fails.
 */
export const deleteApiCountry = async (
	ids: number[],
): Promise<CountriesInterface[]> => {
	try {
		if (!Array.isArray(ids) || ids.length === 0) {
			throw new Error('Invalid input: Please provide an array of country IDs.');
		}

		const response = await fetch(`${apiBaseUrl}/api/countries`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ids),
		});

		if (!response.ok) {
			throw new Error(`Error deleting country: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to delete country: ${error.message}`);
		}
		throw new Error('An unknown error occurred while deleting country.');
	}
};
