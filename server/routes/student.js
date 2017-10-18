const router = require('express').Router();
const Student = require('../../db/models/student');
const Campus = require('../../db/models/campus');

router.get('/', (req, res, next) => {
  Student.findAll({include: [{model: Campus}]})
  .then(students => {
    res.status(200).json(students);
  });
});

router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => {
    if (!student){ res.sendStatus(404); }
    else {
      res.status(200).json(student);
    }
  });
});

router.post('/add', (req, res, next) => {
  console.log('in backend route with req.body: ', req.body);
  Student.create(req.body)
  .then(student => student.reload(Student.options.scopes.populated()))
  .then(student => {
    if (!student){
      res.sendStatus(404);
    } else {
      res.status(201).json(student);
    }
  });
});

router.put('/', (req, res, next) => {
  Student.findOrCreate({where: {id: req.body.id}})
  .then(([student, _]) => {
    if (!student){
      res.sendStatus(404);
    } else {
      return student.update(req.body);
    }
  })
  .then(student => {
    res.status(200).json(student);
  });
});

router.delete('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Student.findById(studentId)
  .then(student => {
    if (!student) {
      res.sendStatus(404);
    } else {
      return student.destroy();
    }
  })
  .then(() => { res.sendStatus(200); });
});

module.exports = router;
