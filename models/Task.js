const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tokenValue: {
    type: Number,
  },
  owner: {
    type: String,
    default: 'Unclaimed'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);
