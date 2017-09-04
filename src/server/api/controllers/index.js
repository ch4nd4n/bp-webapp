const winston = require('winston');
const models = require('../../models');

module.exports = {
  users: (req, res, next) => {
    req.resData = {
      body: models.User.list
    };
    next();
  },
  createUser: (req, res, next) => {
    req.resData = {
      body: { user: models.User.create },
      httpStatus: 201
    };
    next();
  },
  postLocation: (req, res, next) => {
    winston.debug('loc: ', req.query);
    req.resData = {
      body: { success: true }
    };
    next();
  }
};
