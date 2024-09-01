import type { SettingsInterface } from '@interfaces/settings';
import type { FindOperator } from 'typeorm';

export interface RequestSettingsInterface
	extends Omit<SettingsInterface, 'id'> {
	id: number | FindOperator<number> | undefined;
}
