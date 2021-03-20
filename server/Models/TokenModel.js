const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TokenSchema = new mongoose.Schema({
  email: { type: String, required: true },
  role: { type: String, required: true },
  token: { type: String, required: true },
  expireAt: { type: Date, default: Date.now, index: { expires: 60 * 60 * 3 } }
});

const TokenModel = mongoose.model('token', TokenSchema)

module.exports = TokenModel
