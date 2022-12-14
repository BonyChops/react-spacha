import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacha } from './Spacha';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spacha/Spacha',
  component: Spacha,
} as ComponentMeta<typeof Spacha>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spacha> = (args) => <Spacha {...args} />;

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
