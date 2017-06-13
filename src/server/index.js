const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const api = require('./api');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/api', api);

app.listen(PORT, () => {
  winston.info('Server started on port:', PORT);
});
