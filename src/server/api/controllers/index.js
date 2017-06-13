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
  }
};
