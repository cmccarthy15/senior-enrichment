const router = require('express').Router();
const Campus = require('../../db/models/campus');

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => {
    res.status(200).json(campuses);
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => {
    return campus.reload(Campus.options.scopes.populated());
  })
  .then(campus => {
    if (!campus){ res.sendStatus(404); }
    else {
      res.status(200).json(campus);
    }
  })
  .catch(next);
});

router.post('/add', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => {
    if (!campus){
      res.sendStatus(404);
    } else {
      res.status(201).json(campus);
    }
  })
  .catch(next);
});

router.put('/', (req, res, next) => {
  Campus.findOrCreate({where: {id: req.body.id}})
  .then(([campus, _]) => {
    if (!campus){
      res.sendStatus(404);
    } else {
      return campus.update(req.body);
    }
  })
  .then(campus => {
    res.status(200).json(campus);
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campus.findById(campusId)
  .then(campus => {
    if (!campus) {
      res.sendStatus(404);
    } else {
      return campus.destroy();
    }
  })
  .then(() => { res.sendStatus(200); })
  .catch(next);
});

module.exports = router;

