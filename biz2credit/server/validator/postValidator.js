import { check, validationResult } from "express-validator";

const postValidator = [
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
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).son({ error: errors.errors[0].msg });
    }
    return next();
  },
];

export default postValidator;
