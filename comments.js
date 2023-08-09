// Create web server
// 1. Create web server
// 2. Create route for /comments
// 3. Return a list of comments
// 4. Test with curl

// 1. Create web server
// 2. Create route for /comments
// 3. Return a list of comments
// 4. Test with curl

const express = require('express');
const app = express();

const comments = [
  { username: 'Tam', comment: 'Hello World' },
  { username: 'Tom', comment: 'Hello World' },
  { username: 'Tim', comment: 'Hello World' },
  { username: 'Tum', comment: 'Hello World' },
  { username: 'Tem', comment: 'Hello World' },
];

// 2. Create route for /comments
app.get('/comments', (req, res) => {
  // 3. Return a list of comments
  res.json(comments);
});

// 1. Create web server
app.listen(3000, () => {
  console.log('Server started');
});

// 4. Test with curl
// curl http://localhost:3000/comments 
