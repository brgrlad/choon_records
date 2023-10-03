const Admin = require("../models/Admin");

//HASH THE PASSWORD
const argon2 = require("argon2");

//VERIFY AND PROVIDE TOKEN
const jwt = require("jsonwebtoken");
const jwt_secret = "abc";

class AdminController {
  //CREATE ADMIN
  async createOne(req, res) {
    let { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      res.send({ ok: false, message: "Please provide the credentials" });
    }

    try {
      const user = await Admin.findOne({ emailAddress });

      if (user) {
        return res.send({
          ok: false,
          message: "E-mail address already registered in the database.",
        });
      }

      const hash = await argon2.hash(password);

      let newAdmin = {
        emailAddress,
        password: hash,
      };

      await Admin.create(newAdmin);
      res.send({ ok: true, message: `Successfully registered` });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error });
    }
  }

  async loginAdmin(req, res) {
    let { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      res.send({
        ok: false,
        message: "E-mail and password must be provided.",
      });
    }

    try {

      const admin = await Admin.findOne({ emailAddress });

      if (admin) {
        const match = await argon2.verify(admin.password, password);

        if (match) {
          const token = jwt.sign({ emailAddress: emailAddress }, jwt_secret, {
            expiresIn: "1h",
          });

          res.json({
            ok: true,
            message: "You're logged in!",
            token,
            emailAddress,
          });
        } else {
          res.json({ ok: false, message: "Wrong credentials" });
        }
      } else {
        res.json({ ok: false, message: "Wrong credentials" });
      }
    } catch (error) {
      console.log(error);
      res.json({ ok: false, error });
    }
  }

  //TOKEN VERIFYER
  verify_token = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    jwt.verify(token, jwt_secret, (err, succ) => {
      err
        ? res.json({ ok: false, message: "Token is corrupted" })
        : res.json({ ok: true, succ });
    });
  };

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
