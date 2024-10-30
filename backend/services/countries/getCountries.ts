import { Countries } from './../../entities/Countries';
import type { PaginateInterface } from '@interfaces/index';
import { paginateService } from '../paginateService';
import { type FindOptionsWhere, ILike } from 'typeorm';

export const getCountries = async (
	offset: number,
	limit: number,
	countryName?: string,
	isoCode2?: string,
	isoCode3?: string,
): Promise<PaginateInterface<Countries>> => {
	const filters: FindOptionsWhere<Countries> = {};

	if (countryName) {
		filters.country = ILike(`%${countryName}%`);
	}

	if (isoCode2) {
		filters.iso_code_2 = isoCode2;
	}

	if (isoCode3) {
		filters.iso_code_3 = isoCode3;
	}

	return await paginateService(Countries, offset, limit, {
		where: filters,
		order: {
			country: 'ASC',
		},
	});
};
