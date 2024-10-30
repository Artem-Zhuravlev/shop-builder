import { Languages } from '../../entities/Languages';
import type { PaginateInterface } from '@interfaces/index';
import { paginateService } from '../paginateService';

export const getLanguages = async (
	offset: number,
	limit: number,
): Promise<PaginateInterface<Languages>> => {
	return await paginateService(Languages, offset, limit, {
		order: {
			name: 'ASC',
		},
	});
};
