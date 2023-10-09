const Product = require("../models/Product");


class ProductController {

  //FIND A SINGLE USER
  async findOne(req, res) {

    let { _id } = req.params;

    try {
      const product = await Product.findOne({ _id: _id });
      res.send({ok: true, data: product});
    } catch (error) {
      console.log(error)
      res.send({ok: false, error});
    }
  }

  //FIND ALL PRODUCTS
  async findAll(req, res) {
    try {
      const products = await Product.find({});

      res.send({ok: true, data: products});

    } catch (error) {
      res.send(error);
    }
  }

  //FIND AND DELETE USER
  async findOneAndDelete(req, res) {
    let { _id } = req.body;

    try {
      const product = await Product.findOneAndDelete({ _id: _id});
      res.send({ok: true, data: product});
    } catch (error) {
      res.send(error);
    }
  }

  //FIND AND UPDATE USER
  async findOneAndUpdate(req, res) {

    let { _id, updatedProduct } = req.body;
console.log(updatedProduct);
    try {
      const product = await Product.findOneAndUpdate({ _id: _id },updatedProduct);
      res.send({ok: true, data: product});
    } catch (error) {
      res.send(error);
    }
  }

  //CREATE NEW PRODUCT
  async createProduct(req, res) {
    let { artist, title, releaseDate, label, price, genres, instock } = req.body;

    let newProduct = {
        artist,
        title,
        releaseDate,
        label,
        price,
        genres,
        instock

    }

    try {
      const product = await Product.create(newProduct);
      res.send({ok: true, data: product });
    } catch (error) {
      res.send({ok: false, data: error});
    }
  }
}



module.exports = new ProductController();

