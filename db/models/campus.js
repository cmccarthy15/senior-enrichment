const Sequelize = require('sequelize');
const {STRING, TEXT} = Sequelize;
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: STRING, // look up options
    allowNull: false,
    defaultValue: 'https://cdn4.iconfinder.com/data/icons/the-essentials/52/question-mark-circle-symbol-128.png'
  },
  darkside: {
    type: TEXT
  },
  sunside: {
    type: TEXT
  }
}, {
  hooks: {
    beforeValidate: (campus) => {
      if (campus.image === ''){
        campus.image = 'https://pbs.twimg.com/profile_images/599535734865797122/HtkgkbNv_400x400.jpg';
      }
    }
  },
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('student')
      }]
    })
  }
}
);

/*
images for campuses came from : https://www.appannie.com/en/apps/google-play/app/com.Horoscope.LibraLiveWallpaper/
*/

module.exports = Campus;
