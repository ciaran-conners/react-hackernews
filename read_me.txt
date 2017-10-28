Assignment to solve

JavaScript Test Assignment

This is a small assignment that will help us get some basic knowledge of your coding skills, creative abilities and technical understanding. The section below describes the basic requirements for this assignment, but feel free to add any extra functionality or features that you would like to showcase.

Please submit all source files and dependencies such that your code can be executed without any need for additional configuration. Please also include a small readme file that concisely documents what you have created and how it works. We are looking for structure, code testability and how you solve it, not that it is solved.

10 Hacker News

For this assignment we will utilize the open hacker news API provided by Ycombinator, specifically the following API endpoints:

Topstories: https://hacker-news.firebaseio.com/v0/topstories.json

Story info: https://hacker-news.firebaseio.com/v0/item/[id].json (replace [id] with story id) Author info: https://hacker-news.firebaseio.com/v0/user/[id].json (replace [id] with user id)
More information available at: https://github.com/HackerNews/API

To complete the assignment, use client side JavaScript to fetch ten stories at random from the top stories list. Then present these stories on a web page sorted by story score ascendingly. The presentation must include:

Story title

Story URL

Story timestamp

Story score

Author id

Author karma score.

You will need to call all three API endpoints to collect the data, and your website should not present any data until all is collected. You are required to use JavaScript for all API communication and data handling.