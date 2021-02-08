import { Router } from "express";

import { userController } from "../controller";
import { LoginValidator, SignupValidator } from "../validator";

const router = Router();

router.post("/", LoginValidator, userController.login);
router.post("/signup", SignupValidator, userController.signup);

export default router;
