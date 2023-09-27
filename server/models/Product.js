const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    artist: { type: String, required: true },
    title: { type: String, required: true },
    releaseDate: { type: Number, required: true },
    label: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String, required: true},
    genres: {type: String, required: true},

    // track snippets object????
    //genres arr???

  },
  { versionKey: false}
);

module.exports = mongoose.model("ProductModel", ProductSchema);