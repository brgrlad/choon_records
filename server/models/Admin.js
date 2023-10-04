const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema(
  {
    emailAddress: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    isAdmin: {type: Boolean, required: true}
  }
);

module.exports = mongoose.model("AdminModel", AdminSchema);
