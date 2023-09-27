const User = require("../models/User");

class UserController {
  async createUser(req, res) {
    let { emailAddress, password, name, surname, address, birth, newsletter } =
      req.body;

    let newUser = {
      emailAddress,
      password,
      name,
      surname,
      address,
      birth,
      newsletter,
    };

    try {
      const user = await User.create(newUser);
      res.sed({ ok: true, data: newUser });
    } catch (error) {
      res.send(error);
    }
  }

  async findOne(req, res) {
    let { _id } = req.body;

    try {
      const user = await User.findOne({ _id: _id });
      res.send({ ok: true, data: user });
    } catch (error) {
      res.send(error);
    }
  }

  async findAll(req, res) {
    try {
      const user = await User.find({});
      res.send({ ok: true, data: user });
    } catch (error) {
      res.send(error);
    }
  }

  async findOneAndDelete(req, res) {
    let { _id } = req.body;

    try {
      const user = await User.findOneAndDelete({ _id: _id });
      res.send({ ok: true, data: user });
    } catch (error) {
      res.send(error);
    }
  }

  async findOneAndUpdate(req, res) {
    let { _id, updatedUser } = req.body;
    console.log(updatedUser);

    try {
      const user = await User.findOneAndUpdate({ _id: _id }, updatedUser);
      res.send({ ok: true, data: user });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new UserController();
