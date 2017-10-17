var db = require('./db');
var Campus = require('./db/models/campus');
var Student = require('./db/models/student');

const campuses = [
  {name: 'Aries'},
  {name: 'Taurus'},
  {name: 'Gemini'},
  {name: 'Cancer'},
  {name: 'Leo'},
  {name: 'Virgo'},
  {name: 'Libra'},
  {name: 'Scorpio'},
  {name: 'Sagittarius'},
  {name: 'Capricorn'},
  {name: 'Aquarius'},
  {name: 'Pisces'}
];

const students = [
  {name: 'Caryn', email: 'caryn@signs.zodiac', campusId: 1}, //gemini
  {name: 'Eleni', email: 'eleni@signs.zodiac', campusId: 1}, //
  {name: 'Shannon', email: 'shannon@signs.zodiac', campusId: 1}, //cancer
  {name: 'Emily', email: 'emily@signs.zodiac', campusId: 5}, // pisces
  {name: 'Priya', email: 'priya@signs.zodiac', campusId: 5}, //taurus
  {name: 'Cara', email: 'cara@signs.zodiac', campusId: 5}, //leo
  {name: 'Satya', email: 'satya@signs.zodiac', campusId: 3} //taurus
];

console.log('campuses', campuses);
console.log('students', students);

const createdCampuses = campuses.map(campus => Campus.create(campus));
//const builtStudents = students.map(student => Student.build(student));

console.log('built campuses', createdCampuses);
//console.log('built students', builtStudents);

db.sync()
.then( () => {
  return Promise.all(createdCampuses)
  .then((campuses) => {
    console.log(campuses);
    const createdStudents = students.map(student => Student.create(student));
    return Promise.all(createdStudents);
  })
  .catch((err) => console.log('seeding unsuccessful', err));
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});

