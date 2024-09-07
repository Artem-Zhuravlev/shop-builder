import type { SettingsInterface } from '@interfaces/settings';
import { fetchApi } from '@/utils/fetchApi';

/**
 * Fetches the application settings from the API.
 *
 * @returns {Promise<any>} - A promise that resolves with the settings data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */
export const getApiSettings = async (): Promise<SettingsInterface[]> => {
	try {
		const response: SettingsInterface[] = await fetchApi('/settings', {
			method: 'GET',
		});
		return response;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch settings: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching settings.');
	}
};