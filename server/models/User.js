const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
      name: {type: String, required: true},
      surname: {type: String, required: true},
      emailAddress: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      address: { type: String, required: false },
      birth: {type: Number, required: true},
      newsletter: {type: Boolean, required: false}


    }
  );

  module.exports = mongoose.model("UserModel", UserSchema);