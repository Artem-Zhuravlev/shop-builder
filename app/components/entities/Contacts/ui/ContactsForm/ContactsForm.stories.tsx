import { Meta, StoryFn } from '@storybook/react';
import { ContactsForm } from './ContactsForm';

export default {
  title: 'Entities/Contacts/ContactsForm',
  component: ContactsForm,
} as Meta<typeof ContactsForm>;

const Template: StoryFn<typeof ContactsForm> = (args) => {
  return <ContactsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  image: 'https://placehold.co/570x570?text=Mock+image',
};
