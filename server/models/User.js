const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
      emailAddress: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: {type: String, required: true},
      surname: {type: String, required: true},
      address: { type: String, required: true },
      birth: {type: Number, required: true},
      newsletter: {type: Boolean}


    }
  );

  module.exports = mongoose.model("UserModel", UserSchema);