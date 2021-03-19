const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  country: String,
  buisness: String,
  plan: String,
});

module.exports = model('User', userSchema);
