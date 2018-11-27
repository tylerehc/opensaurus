const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../../models/Task');
const Member = require('../../models/Member');

// @route   GET api/tasks
// @desc    Get All tasks
// @access  Public
router.get('/tasks/', (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks));
});

// @route   POST api/tasks
// @desc    Create a task
// @access  Public
router.post('/tasks/', (req, res) => {
  const newTask = new Task({
    name: req.body.name,
    tokenValue: req.body.tokenValue
  });
  newTask.save().then(task => res.json(task));
});

// @route   DELETE api/tasks
// @desc    Delete a task
// @access  Public
router.delete('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

// @route   UPDATE api/tasks
// @desc    Update a task
// @access  Public
router.put('/tasks/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, {owner: req.body.owner}, { new: true })
    .then(task => res.status(201).json(task));
});

// @route   GET api/tasks
// @desc    Get All tasks
// @access  Public
router.get('/members/', (req, res) => {
  Member.find()
    .then(members => res.json(members));
});

// @route   POST api/tasks
// @desc    Create a task
// @access  Public
router.post('/members/', (req, res) => {
  const newMember = new Member({
    name: req.body.name,
  });
  newMember.save().then(member => res.json(member));
});

// @route   DELETE api/tasks
// @desc    Delete a task
// @access  Public
router.delete('/members/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(member => member.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;
