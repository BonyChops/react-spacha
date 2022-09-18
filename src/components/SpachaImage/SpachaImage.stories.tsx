import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpachaImage } from './SpachaImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spacha/SpachaImage',
  component: SpachaImage,
} as ComponentMeta<typeof SpachaImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpachaImage> = (args) => (
  <SpachaImage {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  price: 200,
};

export const WithPicture = Template.bind({});

const img = new Image();
img.src = 'https://github.com/bonychops.png';

const image = (WithPicture.args = {
  price: 200,
  user: {
    name: 'Bony_Chops',
    img,
  },
});

export const WithComment = Template.bind({});
WithComment.args = {
  price: 2000,
  message: 'Hello, Spacha!',
};
