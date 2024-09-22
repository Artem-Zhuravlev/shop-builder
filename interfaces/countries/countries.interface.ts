export interface CountriesInterface {
	id: number;
	country_name: string | null;
	iso_code_2?: string | null;
	iso_code_3?: string | null;
	postcode_required?: boolean;
	status?: boolean;
}
