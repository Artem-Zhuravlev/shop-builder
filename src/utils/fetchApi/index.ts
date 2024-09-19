export const apiBaseUrl: string = process.env.NEXT_PUBLIC_VERCEL_URL || '';

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

	// Check if the response is OK (status code 200-299)
	if (!response.ok) {
		const errorText = await response.text(); // Get raw response text
		throw new Error(`Error: ${response.status} - ${errorText}`);
	}

	// Check if the response is JSON
	const contentType = response.headers.get('content-type');
	if (!contentType || !contentType.includes('application/json')) {
		throw new Error(`Expected JSON but received ${contentType}`);
	}

	return response.json() as Promise<T>;
};
