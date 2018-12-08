const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello test.');
});

app.get('/api/v1/todos', (req, res) => {
  res.send({
    todos: [
      {
        todo: "Homework",
        completed: false
      },
      {
        todo: "Walk the dog",
        completed: false
      }
    ]
  });
});

app.get('/api/v1/users', (req, res) => {
  res.send({
    users: [
      {
        name: "Kentaro",
        age: 23
      },
      {
        name: "Cindy",
        age: 24
      }
    ]
  });
});

app.get('/test', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000.');
})

module.exports.app = app;
