import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Story from './Story';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      sortBy: 'score',
    };
    this.sortStateBy = this.sortStateBy.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  componentDidMount() {
    this.getStories();
  }

  // fetch the data from the Hacker News API and set the state with stories sorted by score:

  getStories() {
    const stories = [];
    // set a boolean to allow render of a loading spinner while data comes in from the API
    this.setState({
      loading: true,
    });
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => {
        const storyIDs = response.data.slice(0, 10);
        const storyPromises = [];
        storyIDs.forEach((el) => {
          storyPromises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`))
        });
        Promise.all(storyPromises)
          .then((storyResponses) => {
            const authorPromises = [];
            storyResponses.forEach((el) => {
              authorPromises.push(axios.get(`https://hacker-news.firebaseio.com/v0/user/${el.data.by}.json`))
            });
            Promise.all(authorPromises).then((authorResponses) => {
              storyResponses.forEach((s, i) => {
                // access the authorKarma from authorPromises which resolved to authorResponses
                // because arrays are ordered, the order of storyResponses and authorResponses correspond:
                const karma = authorResponses[i].data.karma;
                const story = {};
                story.title = s.data.title;
                story.timestamp = new Date(s.data.time * 1000);
                story.url = s.data.url;
                story.score = s.data.score;
                story.authorId = s.data.by;
                story.authorKarma = karma;
                stories.push(story);
              });
              // clear the loading boolean; set stories in component state & default to sorted by score
              this.setState({
                loading: false,
                stories: stories.sort((a, b) => {
                  if (a.score > b.score) {
                    return 1;
                  } else if (b.score > a.score) {
                    return -1;
                  }
                  return 0;
                })
              });
            })
            .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }

  // handles sorting by input criteria and highlighting of selected button:

  handleSortClick(e) {
    if (e.target.id === 'sort-by-score') {
      this.sortStateBy('score');
    }
    if (e.target.id === 'sort-by-karma') {
      this.sortStateBy('authorKarma');
    }
    if (e.target.id === 'sort-by-timestamp') {
      this.sortStateBy('timestamp');
    }
  }

  sortStateBy(input) {
    this.setState({
      sortBy: input,
      stories: this.state.stories.sort((a, b) => {
        if (a[input] > b[input]) {
          return 1;
        } else if (b[input] > a[input]) {
          return -1;
        }
        return 0;
      })
    });
  }

  // render the sort buttons and story container with story components inside
  // includes a conditional to add a highlight class to a button when selected, removing the class from other buttons

  render() {
    if (this.state.loading === true) {
      return (
        <ReactLoading type={'spinningBubbles'} color={'blue'} className='loading' />
      );
    }
    return (
      <div className='stories'>
        Sort by:
        <button
          id='sort-by-score'
          onClick={this.handleSortClick}
          className={this.state.sortBy === 'score' ? 'highlight' : null}>Score
        </button>
        <button
          id='sort-by-karma'
          onClick={this.handleSortClick}
          className={this.state.sortBy === 'authorKarma' ? 'highlight' : null}>Author Karma
        </button>
        <button
          id='sort-by-timestamp'
          onClick={this.handleSortClick}
          className={this.state.sortBy === 'timestamp' ? 'highlight' : null}>Timestamp
        </button>
        <div className='stories-display'>
          {this.state.stories.map((story) => <Story story={story} key={story.title} />)}
        </div>
      </div>
    );
  }


}

export default Stories;
