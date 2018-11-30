const express = require('express');
const router = express.Router();


const Task = require('../../models/Task');
const Member = require('../../models/Member');
const Token = require('../../models/Token');


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
    tokenValue: req.body.tokenValue,
    dollarValue: req.body.dollarValue,
    project: req.body.project,
    hours: req.body.hours,
    complete: req.body.complete
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
  Task.findByIdAndUpdate(req.params.id,
    req.body.owner ? { owner: req.body.owner } : { hours: req.body.hours }, { new: true })
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      console.log('Our error', err)
    })
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

// @route   GET api/tokens
// @desc    Get All tokens
// @access  Public
router.get('/tokens/', (req, res) => {
  Token.find()
    .sort({ date: -1 })
    .then(tokens => res.json(tokens));
});

// @route   POST api/tokens
// @desc    Create a token
// @access  Public
router.post('/tokens/', (req, res) => {
  const newToken = new Token({
    tokenOwner: req.body.tokenOwner,
    project: req.body.project
  });
  newToken.save().then(token => res.json(token));
});

module.exports = router;
