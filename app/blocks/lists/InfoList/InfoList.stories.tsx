import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InfoList, Availability } from './InfoList';

export default {
  title: 'Lists/InfoList',
  component: InfoList,
} as Meta<typeof InfoList>;

const Template: StoryFn<typeof InfoList> = (args) => {
  return (
    <div
      style={{ maxWidth: '300px' }}
    >
      <InfoList {...args} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  item: {
    brand: {
      name: 'HTC',
      url: '/htc'
    },
    viewed: 23211,
    reward_points: 400,
    availability: Availability.IN_STOCK 
  }
};

export const OutOfStock = Template.bind({});
OutOfStock.args = {
  item: {
    brand: {
      name: 'HTC',
      url: '/htc'
    },
    viewed: 23211,
    reward_points: 400,
    availability: Availability.OUT_OF_STOCK 
  }
};


export const WithoutRewardPoints = Template.bind({});
WithoutRewardPoints.args = {
  item: {
    brand: {
      name: 'HTC',
      url: '/htc'
    },
    viewed: 23211,
    availability: Availability.OUT_OF_STOCK 
  }
};


export const WithoutAvailability = Template.bind({});
WithoutAvailability.args = {
  item: {
    brand: {
      name: 'HTC',
      url: '/htc'
    },
    viewed: 23211
  }
};
