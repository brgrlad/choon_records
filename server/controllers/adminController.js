const Admin = require("../models/Admin");

class AdminController {

  //CREATE ADMIN
  async createOne(req, res) {
    let { emailAddress, password } = req.body;

    let newAdmin = { emailAddress, password };
    console.log(newAdmin);

    try {
      const admin = await Admin.create(newAdmin);
      res.send({ ok: true, data: admin });
    } catch (error) {
      res.send(error.message);
    }
  }

  //LOGIN ADMIN
  async findOne(req, res) {

    let { emailAddress, password} = req.params

    try {
      const admin = await Admin.findOne({
        emailAddress,
        password
      });

      if(admin) {
        res.send({ ok: true, data: admin })

      } else {
        res.send({ ok: false, data: 'credentials not valid' })

      }

    } catch (error) {
      res.send(error);
    }
  }

  //LIST ALL ADMINS
  async findAll(req, res) {
    try {
      const admins = await Admin.find({});
      res.send(admins);
    } catch (error) {
      res.send(error);
    }
  }

  //DELETE ADMIN
  async findOneAndDelete(req, res) {
    let { _id } = req.body;

    try {
      const admin = await Admin.findOneAndDelete({
        _id: _id,
      });
      res.send(admin);
    } catch (error) {
      res.send(error);
    }
  }

  //UPDATE ADMIN
  async findOneAndUpdate(req, res) {
    let { _id, updatedAdmin } = req.body;
    console.log(updatedAdmin);
    try {
      const admin = await Admin.findOneAndUpdate({ _id: _id }, updatedAdmin);

      res.send({ ok: true, data: admin });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new AdminController();
