import type { EntityTarget, ObjectLiteral } from 'typeorm';
import { getDatabaseConnection } from '../config/data-source';

export const paginateService = async <T extends ObjectLiteral>(
	entity: EntityTarget<T>,
	offset: number,
	limit: number,
) => {
	const connection = await getDatabaseConnection();

	const skip = (offset - 1) * limit;

	const [data, total] = await connection.manager.findAndCount(entity, {
		skip,
		take: limit,
	});

	return {
		data,
		total,
	};
};
