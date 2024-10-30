import { apiBaseUrl } from '@/utils/fetchApi';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';
import type { PaginateInterface, CountriesInterface } from '@interfaces/index';

/**
 * Fetches the application countries from the API using query parameters for pagination and filtering.
 *
 * @param {number} [offset=1] - The pagination offset, defaulting to 1.
 * @param {number} [limit=15] - The number of countries to fetch per page, defaulting to 15.
 * @param {string} [countryName] - Optional filter for the country name (case-insensitive).
 * @param {string} [isoCode2] - Optional filter for the 2-character ISO code of the country.
 * @param {string} [isoCode3] - Optional filter for the 3-character ISO code of the country.
 * @returns {Promise<PaginateInterface<CountriesInterface>>} - A promise that resolves with paginated countries data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */

export const getApiCountries = async (
	offset?: number,
	limit?: number,
	countryName?: string,
	isoCode2?: string,
	isoCode3?: string,
): Promise<PaginateInterface<CountriesInterface>> => {
	try {
		const effectiveOffset = offset ?? 1;
		const effectiveLimit = limit ?? DEFAULT_ITEMS_PER_PAGE;

		const queryParams = new URLSearchParams({
			offset: effectiveOffset.toString(),
			limit: effectiveLimit.toString(),
		});

		if (countryName) queryParams.append('country', countryName);
		if (isoCode2) queryParams.append('iso_code_2', isoCode2);
		if (isoCode3) queryParams.append('iso_code_3', isoCode3);

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
