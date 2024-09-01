import type { AdminSettingsTableItem } from '@/components/entities/Admin/ui/settings';
import { fetchApi } from '@/utils/fetchApi';

/**
 * Fetches the application settings from the API.
 *
 * @returns {Promise<any>} - A promise that resolves with the settings data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */
export const getApiSettings = async (): Promise<AdminSettingsTableItem[]> => {
	try {
		const response: AdminSettingsTableItem[] = await fetchApi('/settings', {
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
