const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('./index.html', {root :path.join(__dirname, './public')});
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});