const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    artist: { type: String, required: true , unique:true },
    title: { type: String, required: true },
    releaseDate: { type: Number, required: true },
    label: {type: String, required: true},
    price: {type: Number, required: true},
    genres: [{type: String, required: true}]
    // picture: {type: String, required: true},
    // audio: {type: String, required: true}

  }
);

module.exports = mongoose.model("ProductModel", ProductSchema);