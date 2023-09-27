const Product = require("../models/Product");


class ProductController {

  //FIND A SINGLE USER
  async findOne(req, res) {
    let { _id } = req.params;

    try {
      const product = await Product.findOne({ _id: _id });
      res.send({ok: true, data: product});
    } catch (error) {
      res.send(error);
    }
  }

  //FIND ALL USERS
  async findAll(req, res) {
    try {
      const products = await Product.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  }

  //FIND AND DELETE USER
  async findOneAndDelete(req, res) {
    let { _id } = req.params;

    try {
      const product = await Product.findOneAndDelete({ _id: _id });
      res.send({ok: true, data: 'user deleted'});
    } catch (error) {
      res.send(error);
    }
  }

  //FIND AND UPDATE USER
  async findOneAndUpdate(req, res) {
    let { _id, updatedProduct } = req.params;

    try {
      const product = await Product.findOneAndUpdate({ _id: _id },updatedProduct);
      res.send({ok: true, data: product});
    } catch (error) {
      res.send(error);
    }
  }


  async createProduct(req, res) {
    let { artist, title, releaseDate, label, price, picture } = req.body;

    let newProduct = {
        artist,
        title,
        releaseDate,
        label,
        price,
        picture,
    }

    try {
      const product = await Product.create(newProduct);
      res.send({ok: true, data: newProduct });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new ProductController();
