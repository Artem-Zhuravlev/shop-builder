import type { AdminSettingsTableItem } from '@entities/Admin/ui/settings';
import { fetchApi } from '@utils/fetchApi';

/**
 * Fetches the application settings for a specific ID from the API.
 *
 * @param {number} id - The ID of the settings to fetch.
 * @returns {Promise<any>} - A promise that resolves with the settings data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */
export const getApiSettingsById = async (id: number) => {
	try {
		const response = await fetch(`/api/settings/${id}`, { method: 'GET' });
		return response;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch settings: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching settings.');
	}
};
