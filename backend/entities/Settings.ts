import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'settings' })
export class Settings {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		name: 'data',
		type: 'jsonb',
		array: false,
		nullable: false,
		default: {},
	})
	data!: {};
}
