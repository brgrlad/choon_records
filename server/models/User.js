const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
      {
      name: {type: String, required: true},
      surname: {type: String, required: true},
      emailAddress: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      address: { type: String, required: false },
      birthDate: {type: String, required: true},
      isAdmin:{type:Boolean, required: true}
    }
  );

  module.exports = mongoose.model("UserModel", UserSchema);