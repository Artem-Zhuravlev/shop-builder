export interface CountriesInterface {
	id: number;
	country: string | null | undefined;
	iso_code_2?: string | null;
	iso_code_3?: string | null;
	postcode_required?: boolean;
	status?: boolean;
}
