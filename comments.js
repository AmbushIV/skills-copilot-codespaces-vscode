// Create web server
// Run the server

const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.json(comments.getComments());
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server
// $ node comments.js
// Server is listening on port 3000

// Send a POST request to create a comment
// $ curl -X POST -H "Content-Type: application/json" -d '{"comment": "hello"}' http://localhost:3000/comments
// [{"comment":"hello"}]

// Send a GET request to retrieve the comment
// $ curl http://localhost:3000/comments
// [{"comment":"hello"}]

// Send a POST request to create another comment
// $ curl -X POST -H "Content-Type: application/json" -d '{"comment": "world"}' http://localhost:3000/comments
// [{"comment":"hello"},{"comment":"world"}]

// Send a GET request to retrieve both comments
// $ curl http://localhost:3000/comments
// [{"comment":"hello"},{"comment":"world"}]

// The comments are stored in memory, so if you restart the server, the comments will be lost.
// You can use a database to store the comments permanently.