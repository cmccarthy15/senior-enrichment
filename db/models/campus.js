const Sequelize = require('sequelize');
const {STRING} = Sequelize;
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: STRING// look up options
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('student')
      }]
    })
  }
}
);

module.exports = Campus;
