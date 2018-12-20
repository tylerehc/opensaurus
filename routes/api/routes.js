const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const { jwtSecret } = require('../../config/keys')

const Task = require('../../models/Task');
const Member = require('../../models/Member');
const Token = require('../../models/Token');

const JwtDecoder = (req, res, next) => {
  const token = req.headers.token
  if (token != undefined) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      next();
    });
  } else {
    res.send({error: 'Missing Token in headers'})
  }
}

// @route   GET api/tasks
// @desc    Get All tasks
// @access  Public
router.get('/tasks/', (req, res) => {
  //console.log('req.user', req.user);
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
// @access  Private
router.delete('/tasks/:id', JwtDecoder, (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

// @route   UPDATE api/tasks
// @desc    Update a task
// @access  Private
router.put('/tasks/:id', JwtDecoder, (req, res) => {
  let owner = req.body.owner;
  let hours = req.body.hours;
  let complete = req.body.complete;

  Task.findById(req.params.id, function (err, task) {
    if (err) return handleError(err);

    task.owner = owner || task.owner;
    task.hours = hours || task.hours;
    task.complete = complete || task.complete;

    task.save(function(err, updatedTask) {
        // if err return handleError(err);
        return res.send(updatedTask);
    });
  });
});

// @route   GET api/members
// @desc    Get All members
// @access  Public
router.get('/members/', (req, res) => {
  Member.find()
    .then(members => res.json(members));
});

// @route   POST api/members/regist
// @desc    Create a member
// @access  Public
router.post('/members/register', (req, res) => {
  bcrypt.hash(req.body.password, 8, function(err, hash) {
    req.body.password = hash;
    const newMember = new Member(req.body);
    newMember.save().then(member => {
      jwt.sign({email: req.body.email}, jwtSecret, (err, token) => {
        res.send({
          token,
          name: member.name
        });
      })
    });
  });
});

// @route   POST api/tasks
// @desc    Create a task
// @access  Public
router.post('/members/login', (req, res) => {
  Member.findOne({email: req.body.email}, (err, member) => {
    if (err) {
      res.send(err)
    } else if (!member) {
      res.send({error: 'Invalid Email/Password'});
    } else {
      bcrypt.compare(req.body.password, member.password, function(err, validPassword) {
        if (err) {
          res.send(err)
        } else if (validPassword) {
          jwt.sign({email: req.body.email}, jwtSecret, (err, token) => {
            res.send({
              token,
              name: member.name
            });
          })
        } else {
          res.send({error: 'Invalid Email/Password'})
        }
      });
    }
  });
});

// @route   DELETE api/tasks
// @desc    Delete a task
// @access  Private
router.delete('/members/:id', JwtDecoder, (req, res) => {
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
