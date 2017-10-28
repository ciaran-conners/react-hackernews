import React from 'react';
import PropTypes from 'prop-types';

// this could be a separate module:

const convertDateObject = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  // if hours is a single digit, append a 0 to format:
  if (hours.toString().length === 1) {
    hours = `0${hours}`
  }
  let minutes = date.getMinutes();
  // if minutes is a single digit, append a 0 to format:
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`
  }
  let seconds = date.getSeconds();
  // if seconds is a single digit, append a 0 to format:
  if (seconds.toString().length === 1) {
    seconds = `0${seconds}`
  }
  return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}

const Story = (props) => (
  <div className='story'>
    <div className='title'><b>{props.story.title}</b></div>
    <a className='URL' href={props.story.URL}>{props.story.URL}</a>
    <div className='timestamp'>{convertDateObject(props.story.timestamp)}</div>
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
