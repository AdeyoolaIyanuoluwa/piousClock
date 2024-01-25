import React from 'react';
import { StoryFn } from "@storybook/react";
import Indicator, { IndicatorProps } from '../components/Indicator';

export default {
  title: 'Components/Indicator',
  component: Indicator,
};

const Template = (args: any) => <Indicator {...args}/>;

export const Default: StoryFn<IndicatorProps> = Template.bind({});

// Default.args = {
//   statusIndicator: 'uploaded',
// };
