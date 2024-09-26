import type { NextRequest } from 'next/server';

/**
 * Retrieves and validates pagination parameters from the request query parameters.
 *
 * @param {NextRequest} request - The incoming request object.
 * @param {number} [defaultOffset=1] - The default value for offset if not provided in query params.
 * @param {number} [defaultLimit=15] - The default value for limit if not provided in query params.
 * @returns {{ offset: number, limit: number }} An object containing the validated offset and limit.
 * @throws {Error} Throws an error if the offset or limit values are invalid (NaN or less than 1).
 */
export const getPaginationParams = (
	request: NextRequest,
	defaultOffset = 1,
	defaultLimit = 15,
) => {
	const { searchParams } = new URL(request.url);

	const offsetParam = searchParams.get('offset');
	const limitParam = searchParams.get('limit');

	const offset = offsetParam ? Number.parseInt(offsetParam, 10) : defaultOffset;
	const limit = limitParam ? Number.parseInt(limitParam, 10) : defaultLimit;

	if (Number.isNaN(offset) || Number.isNaN(limit) || offset < 1 || limit < 1) {
		throw new Error('Invalid offset or limit values.');
	}

	return { offset, limit };
};
