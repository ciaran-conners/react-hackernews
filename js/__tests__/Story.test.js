import React from 'react';
import { mount } from 'enzyme';
import Story from '../Story';

test('Story component renders a story correctly', () => {
  const story = {
    title: 'a test title',
    URL: 'a test URL',
    timestamp: new Date('10/28/2017'),
    authorId: 'a test author',
    authorKarma: 10,
  }
  const wrapper = mount(
    <Story story={story} />
  );

  const title = wrapper.find('.title');
  const URL = wrapper.find('.URL');
  const timestamp = wrapper.find('.timestamp');
  const authorId = wrapper.find('.authorID');
  const authorKarma = wrapper.find('.authorKarma');

  expect(title.text()).toBe(story.title);
  expect(URL.text()).toBe(story.URL);
  expect(timestamp.text()).toBe('10/28/2017, 00:00:00');
  expect(authorId.text()).toBe(`authorID: ${story.authorId}`);
  expect(authorKarma.text()).toBe(`authorKarma: ${story.authorKarma}`);
});