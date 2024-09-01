import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { ContactsInfo } from './ContactsInfo';

describe('ContactsInfo Component', () => {
	const emails = ['test1@example.com', 'test2@example.com'];
	const phones = ['123456789', '987654321'];
	const locations = ['Location 1', 'Location 2'];

	it('renders email addresses', () => {
		const { getByText } = customRender(
			<ContactsInfo emails={emails} phones={phones} locations={locations} />,
		);
		emails.forEach((email) => {
			const emailElement = getByText(email);
			expect(emailElement).toBeInTheDocument();
		});
	});

	it('renders phone numbers', () => {
		const { getByText } = customRender(
			<ContactsInfo emails={emails} phones={phones} locations={locations} />,
		);
		phones.forEach((phone) => {
			const phoneElement = getByText(phone);
			expect(phoneElement).toBeInTheDocument();
		});
	});

	it('renders locations', () => {
		const { getByText } = customRender(
			<ContactsInfo emails={emails} phones={phones} locations={locations} />,
		);
		locations.forEach((location) => {
			const locationElement = getByText(location);
			expect(locationElement).toBeInTheDocument();
		});
	});
});
