import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputDatePicker } from './InputDatePicker';
import "react-datepicker/dist/react-datepicker.css";

export default {
  title: 'inputs/InputDatePicker',
  component: InputDatePicker,
} as Meta<typeof InputDatePicker>;

const Template: StoryFn<typeof InputDatePicker> = (args) => {
  const [dateValue, setDateValue] = useState(args.selected);

  return (
    <div style={{ width: '300px' }}>
      <InputDatePicker
        {...args}
        selected={dateValue}
        onChange={(date: Date | null) => {
          setDateValue(date);
        }}
      />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  selected: new Date() as Date,
  placeholderText: 'Datepicker placeholder',
  dateFormat: 'MMMM d, yyyy h:mm aa'
};
