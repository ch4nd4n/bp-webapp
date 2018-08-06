const app = require('./app');
const winston = require('winston');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  winston.info('Server started on port:', PORT);
});

module.exports = server;
