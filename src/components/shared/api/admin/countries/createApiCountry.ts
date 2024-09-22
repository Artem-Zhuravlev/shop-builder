import type { CountriesInterface } from '@interfaces/index';

/**
 * Creates the country in the API.
 *
 * @param {CountriesInterface} data - The country data to be created.
 * @returns {Promise<CountriesInterface>} The response from the API after creating  the country.
 * @throws {Error} Throws an error if the create fails, containing the error message from the API.
 */
export const createApiCountry = async (
	data: CountriesInterface,
): Promise<{ data: CountriesInterface }> => {
	try {
		const response = await fetch('/api/countries', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Failed to create country');
		}

		return await response.json();
	} catch (error) {
		console.error('Error creating country:', error);
		throw new Error('An error occurred while creating country.');
	}
};
