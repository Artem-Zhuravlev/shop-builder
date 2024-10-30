import type { LanguagesInterface } from '@interfaces/index';

/**
 * Creates the language in the API.
 *
 * @param {LanguagesInterface} data - The language data to be created.
 * @returns {Promise<LanguagesInterface>} The response from the API after creating  the language.
 * @throws {Error} Throws an error if the create fails, containing the error message from the API.
 */
export const createApiLanguage = async (
	data: LanguagesInterface,
): Promise<LanguagesInterface> => {
	try {
		const response = await fetch('/api/languages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Failed to create language');
		}

		return await response.json();
	} catch (error) {
		console.error('Error creating language:', error);
		throw new Error('An error occurred while creating language.');
	}
};
