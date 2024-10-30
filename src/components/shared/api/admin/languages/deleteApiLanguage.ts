import { apiBaseUrl } from '@/utils/fetchApi';
import type { LanguagesInterface } from '@interfaces/index';

/**
 * Deletes languages from the API based on the provided IDs.
 *
 * @param {number[]} ids - An array of language IDs to be deleted.
 * @returns {Promise<LanguagesInterface[]>} - A promise that resolves to an array of deleted language objects.
 * @throws {Error} - Throws an error if the input is invalid or if the API request fails.
 */
export const deleteApiLanguage = async (
	ids: number[],
): Promise<LanguagesInterface[]> => {
	try {
		if (!Array.isArray(ids) || ids.length === 0) {
			throw new Error(
				'Invalid input: Please provide an array of language IDs.',
			);
		}

		const response = await fetch(`${apiBaseUrl}/api/languages`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ids),
		});

		if (!response.ok) {
			throw new Error(`Error deleting language: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to delete language: ${error.message}`);
		}
		throw new Error('An unknown error occurred while deleting language.');
	}
};
