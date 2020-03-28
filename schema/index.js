const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
      first: String,
      last: String
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
        sparse: true
      }
    }
  });

 mongoose.model('User', UserSchema);


exports = {
  User

};