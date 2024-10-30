import { apiBaseUrl } from '@/utils/fetchApi';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';
import type { PaginateInterface, LanguagesInterface } from '@interfaces/index';

/**
 * Fetches the application languages from the API using query parameters for pagination.
 *
 * @param {number} [offset=1] - The pagination offset, defaulting to 1.
 * @param {number} [limit=15] - The number of languages to fetch per page, defaulting to 15.
 * @returns {Promise<PaginateInterface<LanguagesInterface>>} - A promise that resolves with paginated languages data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */

export const getApiLanguages = async (
	offset?: number,
	limit?: number,
): Promise<PaginateInterface<LanguagesInterface>> => {
	try {
		const effectiveOffset = offset ?? 1;
		const effectiveLimit = limit ?? DEFAULT_ITEMS_PER_PAGE;

		const queryParams = new URLSearchParams({
			offset: effectiveOffset.toString(),
			limit: effectiveLimit.toString(),
		});

		const response = await fetch(
			`${apiBaseUrl}/api/languages?${queryParams.toString()}`,
			{
				method: 'GET',
			},
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch languages. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch languages: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching languages.');
	}
};
