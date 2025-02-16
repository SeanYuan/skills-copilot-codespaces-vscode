//Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a comments route');
});

// Set the port
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// node comments.js
// Open your browser and go to http://localhost:3000
// You will see 'This is a comments route' on the screen