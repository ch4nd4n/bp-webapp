// Fake model and responses.
// This can be replaced with references to actual DBMS models, like Mongoose

module.exports = {
  User: {
    list: [
      { id: 1, username: 'john' },
      { id: 2, username: 'tom' }
    ],
    create: { id: 3, username: 'admin' }
  }
};
