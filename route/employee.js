const express = require('express');
const router = express.Router();

// employee model
const Employee = require('../model/employee');

// get employee
router.get('/', (req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.json(404).json({ noEmployee: 'No employee found' }));
});

// create employee
router.post('/', (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    birth: req.body.birth,
    gender: req.body.gender,
    salary: req.body.salary,
  });

  newEmployee
    .save()
    .then(employee => res.json(employee))
    .catch(err => res.status(404).json(err));
});

// delete employee
router.delete('/:id', (req, res) => {
  Employee.findById(req.params.id).then(employee =>
    employee
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ noEmployee: 'Employee not found' }))
  );
});

// update employee
router.patch('/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then(_ => {
      const newEmployee = new Employee({
        _id: req.params.id,
        name: req.body.name,
        salary: req.body.salary,
        birth: req.body.birth,
        gender: req.body.gender,
      });

      Employee.updateOne({ _id: req.params.id }, newEmployee)
        .then(_ => res.json({ updateSuccess: 'update sucess' }))
        .catch(err => res.status(400).json({ updateError: err }));
    })
    .catch(err => res.status(404).json({ noEmployee: 'Employee not found' }));
});

module.exports = router;
