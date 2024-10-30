export interface LanguagesInterface {
	id: number;
	name: string | null | undefined;
	code?: string | null;
	locale?: string | null;
	sort_order?: number;
	status?: boolean;
}
