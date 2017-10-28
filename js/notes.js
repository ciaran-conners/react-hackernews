          // to try => make the callback function async, and just await the get

          // responses.forEach((s) => {
          //   const story = {};
          //   story.title = s.data.title;
          //   story.timestamp = s.data.time;
          //   story.URL = s.data.url;
          //   story.score = s.data.score;
          //   story.authorId = s.data.by;

          //   (async function() {
          //       try {
          //         let r = await axios.get(`https://hacker-news.firebaseio.com/v0/user/${s.data.by}.json`);
          //         story.authorKarma = r.data.karma;
          //         console.log('STORY: ', story);
          //       } catch (err) {
          //         console.error(err);
          //       }
          //   })().then(() => stories.push(story));

          //   // const karmaPromise = axios.get(`https://hacker-news.firebaseio.com/v0/user/${s.data.by}.json`);

          //   // Promise.resolve(karmaPromise)
          //   //   .then((r) => {
          //   //     story.authorKarma = r.data.karma;
          //   //     stories.push(story);
          //   //   })
          //   //   .catch((e) => console.error(e));

          //   //  stories.push(story);
          // });

          // for (let i = 0; i < responses.length; i++) {
          //   const s = responses[i];
          //   const story = {};
          //   story.title = s.data.title;
          //   story.timestamp = s.data.time;
          //   story.URL = s.data.url;
          //   story.score = s.data.score;
          //   story.authorId = s.data.by;

          //   (async function() {
          //       try {
          //         await axios.get(`https://hacker-news.firebaseio.com/v0/user/${s.data.by}.json`)
          //           .then((r) => {
          //             story.karma = r.data.karma;
          //             console.log('story: ', story)
          //             //stories.push(story);
          //           });

          //         // console.log('r: ', r)
          //         // story.authorKarma = r.data.karma;
          //         // console.log('STORY: ', story);
          //       } catch (err) {
          //         console.error(err);
          //       }
          //   })();

          //   stories.push(story);