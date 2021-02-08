import jwt from "jsonwebtoken";

import { User } from "../model";

const userController = {
  login: async (req, res) => {
    try {
      const user = await User.login(req.body);
      if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        const { _id, name, email } = user;
        res.status(200).send({
          token,
          _id,
          name,
          email,
        });
      } else {
        res.status(404).send("User not found! Create new account");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  signup: async (req, res) => {
    try {
      const user = await User.signup(req.body);
      if (user) {
        res.status(200).json({
          message: "Registered successfully! Please continue to login",
        });
      }
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
