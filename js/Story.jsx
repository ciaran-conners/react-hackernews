import React from 'react';
import PropTypes from 'prop-types';

const Story = (props) => (
  <div className='story'>
    <div className='title'><b>{props.story.title}</b></div>
    <a className='URL' href={props.story.url}>{props.story.url}</a>
    <div className='timestamp'>{props.story.timestamp.toLocaleString()}</div>
    <div className='score'>Score: {props.story.score}</div>
    <div className='authorID'>authorID: {props.story.authorId}</div>
    <div className='authorKarma'>authorKarma: {props.story.authorKarma}</div>
  </div>
);

Story.propTypes = {
  story: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      timestamp: PropTypes.date,
      score: PropTypes.number,
      authorId: PropTypes.string,
      authorKarma: PropTypes.number,
  }).isRequired,
};

export default Story;
