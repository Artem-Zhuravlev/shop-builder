import type { AdminSettingsTableItem } from '@/components/entities/Admin/ui/settings';
import type { SettingsInterface } from '@interfaces/settings';

interface SettingsResponse {
	message: string;
}
/**
 * Creates the settings in the API.
 *
 * @param {AdminSettingsTableItem} data - The settings data to be created.
 * @returns {Promise<SettingsResponse>} The response from the API after creating the settings.
 * @throws {Error} Throws an error if the create fails, containing the error message from the API.
 */
export const createApiSettings = async (
	data: SettingsInterface,
): Promise<SettingsResponse> => {
	const response = await fetch('/api/settings', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	console.log(response);

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to create settings');
	}

	return (await response.json()) as SettingsResponse;
};
