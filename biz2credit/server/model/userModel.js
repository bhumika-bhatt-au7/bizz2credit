import { userSchema } from "../schema";
import { hashPassword, comparePassword } from "../utils";

class User {
  login = (user) => {
    return new Promise(async (res, rej) => {
      userSchema.findOne({ email: user.email }, async (err, info) => {
        if (err) {
          rej(err);
        } else {
          const User = await comparePassword(user.password, info.password);
          res(User);
        }
      });
    });
  };

  signup = (user) => {
    return new Promise(async (res, rej) => {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: await hashPassword(user.password),
        gender: user.gender,
      };

      userSchema.create(newUser, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };
}

export default new User();
