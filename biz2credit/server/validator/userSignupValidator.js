import { check, body, validationResult } from "express-validator";

import { userSchema } from "../schema";

const userSignupValidator = [
  check("name")
    .notEmpty()
    .bail()
    .withMessage({ message: "name cannot be empty" })
    .isAlpha()
    .bail()
    .withMessage("name should contain only alphabets")
    .isLength({ min: 3 })
    .bail()
    .withMessage("very short")
    .isLength({ max: 20 })
    .bail()
    .withMessage("Too long"),

  check("email")
    .notEmpty()
    .bail()
    .withMessage("Email cannot be empty")
    .isEmail()
    .bail()
    .withMessage("Please enter a valid email"),
  body("email").custom((value) => {
    return userSchema.findOne({ email: value }).then((user) => {
      if (user) return Promise.reject("Email already exists!");
    });
  }),

  check("password")
    .not()
    .isEmpty()
    .bail()
    .withMessage("Password cannot be empty")
    .isAlphanumeric()
    .bail()
    .withMessage(
      "Password should contains only alpha-numeric characters (a-z, A-Z, 0-9)"
    )
    .isLength({ min: 8 })
    .bail()
    .withMessage("Password should contains at least 8 characters")
    .isLength({ max: 20 })
    .bail()
    .withMessage("Password should not contains more than 20 characters"),

  check("phone")
    .not()
    .isEmpty()
    .bail()
    .withMessage("Enter the phone Number")
    .isLength({ min: 10 })
    .bail()
    .withMessage("Invalid Number")
    .isLength({ max: 10 })
    .bail()
    .withMessage("Invalid Number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Errrrrrrrrrrr", errors);
      return res.status(400).json({ error: errors.errors[0].msg });
    }
    return next();
  },
];

export default userSignupValidator;
