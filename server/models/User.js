const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
      emailAdress: { type: String, required: true },
      password: { type: String, required: true },
      name: {type: String, required: true},
      address: { type: String, required: true },
      birth: {type: Number, required: true},
      newsletter: {type: Boolean}


    },
    { versionKey: false}
  );

  module.exports = mongoose.model("UserModel", UserSchema);