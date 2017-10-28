import React from 'react';
import { mount } from 'enzyme';
import Stories from '../Stories';

test('Stories component renders with initial state set correctly', async () => {
  const wrapper = mount(<Stories />);
  expect(wrapper.node.state.sortByScore).toBe(true);
  expect(wrapper.node.state.sortByTimestamp).toBe(false);
  expect(wrapper.node.state.sortByKarma).toBe(false);
  expect(Array.isArray(wrapper.node.state.stories)).toBe(true);
});
