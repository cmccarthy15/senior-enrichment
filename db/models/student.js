const Sequelize = require('sequelize');
const {STRING} = Sequelize;
const db = require('../index');

const Student = db.define('student', {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING, // is there more specific?
    allowNull: false,
    validate: {
      isEmail: true
    } // is that a thing?
  }
}, {
  hooks: {
    beforeValidate: (user) => {
      if (user.email.indexOf('.') < 0){
        user.email = user.email.concat('.com');
      }
    }
  },
  defaultScope: {
    include: [{model: db.model('campus')}]
  },
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('campus')
      }]
    })
  }
}
);

module.exports = Student;
