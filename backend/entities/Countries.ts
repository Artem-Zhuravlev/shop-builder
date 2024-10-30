import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'countries' })
export class Countries {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		name: 'country',
		type: 'varchar',
		nullable: true,
	})
	country?: string | null;

	@Column({
		name: 'iso_code_2',
		type: 'varchar',
		length: 2,
		nullable: true,
	})
	iso_code_2!: string;

	@Column({
		name: 'iso_code_3',
		type: 'varchar',
		length: 3,
		nullable: false,
	})
	iso_code_3!: string;

	@Column({
		name: 'postcode_required',
		type: 'boolean',
		nullable: true,
		default: false,
	})
	postcode_required?: boolean | null;

	@Column({
		name: 'status',
		type: 'boolean',
		nullable: true,
		default: true,
	})
	status?: boolean | null;
}
