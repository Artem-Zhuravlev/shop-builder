import type { CountriesInterface } from '@interfaces/index';

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
