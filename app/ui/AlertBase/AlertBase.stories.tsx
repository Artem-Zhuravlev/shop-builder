import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AlertBase } from './AlertBase';
import { AlertType } from './AlertItem';

export default {
  title: 'Alerts/AlertBase',
  component: AlertBase,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<typeof AlertBase>;

const Template: StoryFn<typeof AlertBase> = (args) => <AlertBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alerts: [
    {
      type: AlertType.SUCCESS,
      message: 'Form was submitted Form was submittedForm was submittedForm was submitted'
    },
    {
      type: AlertType.ERROR,
      message: 'Something went wrong'
    }
  ]
};

export const WithEmptyArray = Template.bind({});
WithEmptyArray.args = {
  alerts: []
};
