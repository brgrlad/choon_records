const User = require("../models/User");

class UserController {

    async findOne(req, res) {
        let { _id } = req.params;

        try {
          const user = await User.findOne({ _id: _id });
          res.send({ok: true, data: user});
        } catch (error) {
          res.send(error);
        }
    }

    async findAll(req, res) {
        try {
          const user = await User.find({});
          res.send({ok:true, data: user});
        } catch (error) {
          res.send(error);
        }
    }

    async findOneAndDelete(req, res) {
        let { _id } = req.params;

        try {
          const user = await User.findOneAndDelete({ _id: _id });
          res.send({ok: true, data : 'user deleted'});
        } catch (error) {
          res.send(error);
        }
      }

      async findOneAndUpdate(req, res) {
        let { _id, updatedUser } = req.params;

        try {
          const user = await User.findOneAndUpdate({ _id: _id },updatedUser);
          res.send({ok: true, data: user});
        } catch (error) {
          res.send(error);
        }
      }


}

module.exports = new UserController();