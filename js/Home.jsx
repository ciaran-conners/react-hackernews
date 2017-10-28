import React from 'react';
import axios from 'axios';
import Story from './Story';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      sortByScore: true,
      sortByTimestamp: false,
      sortByKarma: false,
    };
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  componentDidMount() {
    const stories = [];
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => {
        const storyIDs = response.data.slice(0, 10);
        const axiosPromises = [];
        storyIDs.forEach((el) => {
          axiosPromises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`))
        });
        Promise.all(axiosPromises)
          .then((responses) => {
            const responsePromises = [];
            responses.forEach((el) => {
              responsePromises.push(axios.get(`https://hacker-news.firebaseio.com/v0/user/${el.data.by}.json`))
            });
            Promise.all(responsePromises).then((responses2) => {
              for (let i = 0; i < responses.length; i++) {
                const s = responses[i];
                const karma = responses2[i].data.karma;
                const story = {};
                story.title = s.data.title;
                story.timestamp = new Date(s.data.time * 1000);
                story.URL = s.data.url;
                story.score = s.data.score;
                story.authorId = s.data.by;
                story.authorKarma = karma;
                stories.push(story);
              }
              this.setState({
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

  render() {
    return (
      <div>
        Sort by:
        <button
          id='sort-by-score'
          onClick={this.handleSortClick}
          className={this.state.sortByScore ? 'highlight' : null}>Score
        </button>
        <button
          id='sort-by-karma' onClick={this.handleSortClick}
          onClick={this.handleSortClick}
          className={this.state.sortByKarma ? 'highlight' : null}>Author Karma
        </button>
        <button
          id='sort-by-timestamp'
          onClick={this.handleSortClick}
          className={this.state.sortByTimestamp ? 'highlight' : null}>Timestamp
        </button>
        <div className="container">
          {this.state.stories.map((story) => <Story story={story} key={story.title} />)}
        </div>
      </div>
    );
  }

  handleSortClick(e) {
    if (e.target.innerHTML === 'Score') {
      this.setState({
        sortByKarma: false,
        sortByScore: true,
        sortByTimestamp: false,
        stories: this.state.stories.sort((a, b) => {
          if (a.score > b.score) {
            return 1;
          } else if (b.score > a.score) {
            return -1;
          }
          return 0;
        })
      });
    } else if (e.target.innerHTML === 'Author Karma') {
       this.setState({
        sortByKarma: true,
        sortByScore: false,
        sortByTimestamp: false,
        stories: this.state.stories.sort((a, b) => {
          if (a.authorKarma > b.authorKarma) {
            return 1;
          } else if (b.authorKarma > a.authorKarma) {
            return -1;
          }
          return 0;
        })
      });
    } else if (e.target.innerHTML === 'Timestamp') {
       this.setState({
        sortByKarma: false,
        sortByScore: false,
        sortByTimestamp: true,
        stories: this.state.stories.sort((a, b) => {
          if (a.timestamp > b.timestamp) {
            return 1;
          } else if (b.timestamp > a.timestamp) {
            return -1;
          }
          return 0;
        })
      });
    }
  }


}

export default Home;
