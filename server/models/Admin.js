const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema(
  {
    emailAdress: { type: String, required: true },
    password: { type: String, required: true }
  },
  { versionKey: false}
);

module.exports = mongoose.model("AdminModel", AdminSchema);
