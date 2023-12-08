import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import CatCard, { CatCardProps } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  components: CatCard,
  argTypes: {}
} as ComponentMeta<typeof CatCard>;

const Template:ComponentStory<typeof CatCard> = (args: JSX.IntrinsicAttributes & CatCardProps) => {
  return (<CatCard {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockCatCardProps.base,
} as CatCardProps;

