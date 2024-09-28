import { apiBaseUrl } from '@/utils/fetchApi';
import type { CountriesInterface } from '@interfaces/index';

/**
 * Fetches a country by its ID from the API.
 *
 * @param {number} id - The ID of the country to fetch.
 * @returns {Promise<CountriesInterface>} A promise that resolves to the country data.
 * @throws {Error} Throws an error if the fetch operation fails or if the response is not valid.
 *
 * @example
 * const country = await getApiCountry(1);
 * console.log(country);
 */
export const getApiCountry = async (
	id: number,
): Promise<CountriesInterface> => {
	try {
		const response = await fetch(`${apiBaseUrl}/api/countries/${id}`, {
			method: 'GET',
		});

		if (!response.ok) {
			throw new Error(`Error fetching country: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch country: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching country.');
	}
};
