const User = require("../models/User");

const argon2 = require("argon2");

class UserController {

  async createUser(req, res) {

    let { name, surname, emailAddress, password, address, birthDate } =
      req.body;

    const hash = await argon2.hash(password);

    let newUser = {
      name,
      surname,
      emailAddress,
      password: hash,
      address,
      birthDate
    };

    try {
      const user = await User.create(newUser);
      res.send({ ok: true, data: newUser });
    } catch (error) {
      res.send(error);
    }
  }

  //FIND USER
  async findOne(req, res) {
    let { _id } = req.body;

    try {
      const user = await User.findOne({ _id: _id });
      res.send({ ok: true, data: user });
    } catch (error) {
      res.send(error);
    }
  }

  //________________________LOGIN USER _________________________________

  async loginUser(req, res) {
    let { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      res.send({
        ok: false,
        message: "E-mail and password must be provided.",
      });
    }

    try {
      const user = await User.findOne({ emailAddress });

      if (user) {
        const match = await argon2.verify(user.password, password);

        if (match) {
          const token = jwt.sign({ emailAddress: emailAddress }, jwt_secret, {
            expiresIn: "1h",
          });

          res.json({
            ok: true,
            message: "You're logged in.",
            token,
            emailAddress,
            // user????
            user,
          });
        } else {
          res.json({ ok: false, message: "Wrong credentials" });
        }
      } else {
        res.json({ ok: false, message: "Wrong credentials" });
      }
    } catch (error) {

      res.json({ ok: false, error });
    }
  }

  //--------------------END LOGIN USER----------------------------

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
