import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'languages' })
export class Languages {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		name: 'name',
		type: 'varchar',
		nullable: true,
	})
	name?: string | null;

	@Column({
		name: 'code',
		type: 'varchar',
		nullable: false,
	})
	code!: string;

	@Column({
		name: 'locale',
		type: 'varchar',
		nullable: false,
	})
	locale!: string;

	@Column({
		name: 'sort_order',
		type: 'boolean',
		nullable: true,
		default: false,
	})
	sort_order?: boolean | null;

	@Column({
		name: 'status',
		type: 'boolean',
		nullable: true,
		default: true,
	})
	status?: boolean | null;
}
