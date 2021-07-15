const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;
