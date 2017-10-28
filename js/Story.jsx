import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

const Story = (props) => (
  <div className='story'>
    <div className='title'>{props.story.title}</div>
    <a className='URL' href={props.story.URL}>{props.story.URL}</a>
    <div className='timestamp'>{moment(props.story.timestamp).format('MMMM Do YYYY, hh:MM:ss')}</div>
    <div className='score'>Score: {props.story.score}</div>
    <div className='authorID'>authorID: {props.story.authorId}</div>
    <div className='authorKarma'>authorKarma: {props.story.authorKarma}</div>
  </div>
);

Story.propTypes = {
  story: PropTypes.shape({
      title: PropTypes.string,
      URL: PropTypes.string,
      timestamp: PropTypes.date,
      score: PropTypes.number,
      authorId: PropTypes.string,
      authorKarma: PropTypes.number,
  }).isRequired,
};

export default Story;
