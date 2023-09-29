const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    artist: { type: String, required: true },
    title: { type: String, required: true },
    releaseDate: { type: String, required: true },
    label: {type: String, required: true},
    price: {type: Number, required: true},
    genres: {type: String, required: true},
    instock: {type: Boolean, required: true}
    // picture: {type: String, required: true},
    // audio: {type: String, required: true}

  }
);

module.exports = mongoose.model("ProductModel", ProductSchema);