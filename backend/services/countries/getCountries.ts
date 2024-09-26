import { Countries } from './../../entities/Countries';
import type { PaginateInterface } from '@interfaces/index';
import { paginateService } from '../paginateService';

export const getCountries = async (
	offset: number,
	limit: number,
): Promise<PaginateInterface<Countries>> => {
	return await paginateService(Countries, offset, limit);
};
