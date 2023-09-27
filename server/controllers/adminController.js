const Admin = require("../models/Admin");


class AdminController {
    async findOne(req, res) {
        let { emailAddress } = req.params;

        try {
          const admin = await Admin.AdminModel.findOne({ emailAddress: emailAddress });
          res.send({ok: true, data: admin});
        } catch (error) {
          res.send(error);
        }


    }

    async findAll(req, res) {
        try {
          const admins = await Admin.find({});
          res.send(admins);
        } catch (error) {
          res.send(error);
        }
      }

     async findOneAndDelete(req, res) {
        let { emailAddress } = req.params;

        try {
          const admin = await Admin.findOneAndDelete({ emailAdress: emailAddress });
          res.send('admin deleted');
        } catch (error) {
          res.send(error);
        }
    }

    async findOneAndUpdate(req, res) {
        let { emailAddress } = req.params;

        try {
          const admin = await Admin.findOneAndUpdate({ emailAddress: emailAddress });
          res.send({ok: true, data: 'updated'});
        } catch (error) {
          res.send(error);
        }
      }






}

module.exports = new AdminController();