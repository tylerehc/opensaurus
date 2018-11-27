const express = require('express');
const router = express.Router();

// Task Model
const Member = require('../../models/Member');

// @route   GET api/tasks
// @desc    Get All tasks
// @access  Public
router.get('/', (req, res) => {
  Member.find()
    .then(members => res.json(members));
});

// @route   POST api/tasks
// @desc    Create a task
// @access  Public
router.post('/', (req, res) => {
  const newMember = new Member({
    name: req.body.name,
  });
  newMember.save().then(member => res.json(member));
});

// @route   DELETE api/tasks
// @desc    Delete a task
// @access  Public
router.delete('/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(member => member.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
