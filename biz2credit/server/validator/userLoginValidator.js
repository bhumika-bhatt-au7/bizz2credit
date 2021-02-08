import { check, validationResult } from "express-validator";

const userLoginValidator = [
  check("email")
    .notEmpty()
    .bail()
    .withMessage("Email cannot be empty")
    .isEmail()
    .bail()
    .withMessage("Please enter a valid email"),

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
    .withMessage("Password should contains at least 6 characters")
    .isLength({ max: 20 })
    .bail()
    .withMessage("Password should not contains more than 20 characters"),

  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).son({ error: errors.errors[0].msg });
    }
    return next();
  },
];

export default userLoginValidator;
