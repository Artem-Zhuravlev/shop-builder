import type { CountriesInterface } from '@interfaces/index';

/**
 * Updates a country resource on the server.
 *
 * Sends a PUT request to the `/api/countries/{id}` endpoint to update
 * the country data with the provided `data` object.
 *
 * @param {CountriesInterface} data - The country data to be updated.
 * @param {number} id - The ID of the country resource to update.
 * @returns {Promise<CountriesInterface>} - A promise that resolves to the updated country data.
 * @throws {Error} Throws an error if the update request fails or the response is not OK.
 */

export const updateApiCountry = async (
	data: CountriesInterface,
	id: number,
): Promise<CountriesInterface> => {
	try {
		const response = await fetch(`/api/countries/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Failed to update country');
		}

		return await response.json();
	} catch (error) {
		console.error('Error updating country:', error);
		throw new Error('An error occurred while updating country.');
	}
};
