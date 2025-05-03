const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.render('index', { employees });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Show form to create new employee
router.get('/employees/new', (req, res) => {
  res.render('create');
});

// Create new employee
router.post('/employees', async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      address: req.body.address,
      salary: req.body.salary,
      gender: req.body.gender
    });
    
    await newEmployee.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Show form to edit employee
router.get('/employees/edit/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    res.render('edit', { employee });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Update employee
router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    
    employee.name = req.body.name;
    employee.address = req.body.address;
    employee.salary = req.body.salary;
    employee.gender = req.body.gender;
    
    await employee.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete employee
router.delete('/employees/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;