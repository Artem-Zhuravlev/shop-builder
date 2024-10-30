import { apiBaseUrl } from '@/utils/fetchApi';
import type { LanguagesInterface } from '@interfaces/index';

/**
 * Fetches a language by its ID from the API.
 *
 * @param {number} id - The ID of the language to fetch.
 * @returns {Promise<CountriesInterface>} A promise that resolves to the language data.
 * @throws {Error} Throws an error if the fetch operation fails or if the response is not valid.
 *
 * @example
 * const language = await getApiLanguage(1);
 * console.log(language);
 */
export const getApiLanguage = async (
	id: number,
): Promise<LanguagesInterface> => {
	try {
		const response = await fetch(`${apiBaseUrl}/api/languages/${id}`, {
			method: 'GET',
		});

		if (!response.ok) {
			throw new Error(`Error fetching language: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch language: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching language.');
	}
};
