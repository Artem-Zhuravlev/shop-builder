import { Meta, StoryFn } from '@storybook/react';
import { MapBase } from './MapBase';

export default {
  title: 'Shared/MapBase',
  component: MapBase,
} as Meta<typeof MapBase>;

const Template: StoryFn<typeof MapBase> = (args) => <MapBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  center: [49.4647755, 36.8515745],
  position: [49.4647755, 36.8515745],
  zoom: 13,
  scrollWheelZoom: false,
  height: '500px',
  popupText: 'A pretty CSS3 popup. <br /> Easily customizable.',
};
