import type { LanguagesInterface } from '@interfaces/index';

/**
 * Updates a language resource on the server.
 *
 * Sends a PUT request to the `/api/languages/{id}` endpoint to update
 * the language data with the provided `data` object.
 *
 * @param {LanguagesInterface} data - The language data to be updated.
 * @param {number} id - The ID of the language resource to update.
 * @returns {Promise<LanguagesInterface>} - A promise that resolves to the updated language data.
 * @throws {Error} Throws an error if the update request fails or the response is not OK.
 */

export const updateApiLanguage = async (
	data: LanguagesInterface,
	id: number,
): Promise<LanguagesInterface> => {
	try {
		const response = await fetch(`/api/languages/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Failed to update language');
		}

		return await response.json();
	} catch (error) {
		console.error('Error updating language:', error);
		throw new Error('An error occurred while updating language.');
	}
};
