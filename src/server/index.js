const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const api = require('./api');

const PORT = process.env.PORT || 3000;
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
app.use('/api', api);

app.listen(PORT, () => {
  winston.info('Server started on port:', PORT);
});
