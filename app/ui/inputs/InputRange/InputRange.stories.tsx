import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputRange } from './InputRange';

export default {
  title: 'inputs/InputRange',
  component: InputRange,
} as Meta<typeof InputRange>;

const Template: StoryFn<typeof InputRange> = (args) => {
  const [value, setValue] = useState(args.value)
  return (
    <div style={{ width: '300px' }}>
      <InputRange
        {...args}
      />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  range: true,
  defaultValue: [0, 50],
  disabled: false,
  autoFocus: false,
  count: 0,
  min: 0,
  max: 100,
  step: 5,
  pushable: true
};


