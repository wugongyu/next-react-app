import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import SearchResult, { SearchResultProps } from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

export default {
  title: 'utility/SearchResult',
  components: SearchResult,
  argTypes: {}
} as ComponentMeta<typeof SearchResult>;

const Template:ComponentStory<typeof SearchResult> = (args: JSX.IntrinsicAttributes & SearchResultProps) => {
  return (<SearchResult {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockSearchResultProps.base,
} as SearchResultProps;

