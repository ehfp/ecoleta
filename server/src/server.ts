import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Eggo',
    'Daniel',
    'Natalia'
  ]);
});

app.listen(7777);