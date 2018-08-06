const express = require('express');
const morgan = require('morgan');
const api = require('./api');

const app = express();

app.use(morgan('tiny'));

app.get('/dist/*.js', (req, res, next) => {
  if (process.env.NODE_ENV !== 'development') {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

app.use(express.static('public'));
app.use(express.static('dist'));

app.use('/api', api);

module.exports = app;
