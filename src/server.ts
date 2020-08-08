import express from 'express';

const app = express();

app.get('/users', (request, response) =>
  response.json({ message: 'kk eae men' }),
);

app.listen(3333);
