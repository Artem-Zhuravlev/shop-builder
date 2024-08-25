const apiBaseUrl: string = process.env.NEXT_PUBLIC_VERCEL_URL || '';

/**
 * A wrapper around the fetch API for making API requests.
 *
 * @template T - The type of the expected response data.
 * @param {string} endpoint - The relative path to the API endpoint.
 * @param {RequestInit} [config={}] - Optional configuration for the fetch request.
 * @returns {Promise<T>} - A promise that resolves with the response data.
 */
export const fetchApi = async <T>(
	endpoint: string,
	config: RequestInit = {},
): Promise<T> => {
	const response = await fetch(`${apiBaseUrl}/api${endpoint}`, config);

	return response.json() as Promise<T>;
};
