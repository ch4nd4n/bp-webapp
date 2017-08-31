const express = require('express');
const controllers = require('./controllers');
const winston = require('winston');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, msg: 'Done' });
});

router.route('/users')
  .get(controllers.users, handleResponse)
  .post(controllers.createUser, handleResponse);

module.exports = router;

function handleResponse(req, res) {
  if (req.resData) {
    const httpStatus = req.resData.httpStatus || 200;
    res.status(httpStatus).json(req.resData.body);
  } else {
    winston.error('errHandleResponse: Response Data not found');
  }
}
