import { Meta, StoryFn } from '@storybook/react';
import { ContactsInfo } from './ContactsInfo';

export default {
  title: 'Entities/Contacts/ContactsInfo',
  component: ContactsInfo,
} as Meta<typeof ContactsInfo>;

const Template: StoryFn<typeof ContactsInfo> = (args) => {
  return <ContactsInfo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  phones: ['+1234567890', '+1234567890'],
  emails: ['XzR0V@example.com', 'XzR0V@example.com'],
  locations: ['New York, USA', 'New York, USA'],
};
