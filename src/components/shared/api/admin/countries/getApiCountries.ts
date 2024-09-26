import { apiBaseUrl } from '@/utils/fetchApi';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';
import type { PaginateInterface, CountriesInterface } from '@interfaces/index';

/**
 * Fetches the application countries from the API using query parameters for pagination.
 *
 * @param {number} [offset=1] - The pagination offset.
 * @param {number} [limit=15] - The number of countries to fetch.
 * @returns {Promise<CountriesInterface[]>} - A promise that resolves with the countries data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */

export const getApiCountries = async (
	offset?: number,
	limit?: number,
): Promise<PaginateInterface<CountriesInterface>> => {
	try {
		const effectiveOffset = offset ?? 1;
		const effectiveLimit = limit ?? DEFAULT_ITEMS_PER_PAGE;

		const queryParams = new URLSearchParams({
			offset: effectiveOffset.toString(),
			limit: effectiveLimit.toString(),
		});

		const response = await fetch(
			`${apiBaseUrl}/api/countries?${queryParams.toString()}`,
			{
				method: 'GET',
			},
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch countries. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch countries: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching countries.');
	}
};
