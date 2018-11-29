const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  tokenOwner: {
    type: String,
    required: true
  },
  dateMinted: {
    type: Date,
    default: Date.now
  },
  project: {
    type: String
  }
});

module.exports = Token = mongoose.model('token', TokenSchema);
