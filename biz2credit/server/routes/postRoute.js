import { Router } from "express";

import { postController } from "../controller";
import { PostValidator } from "../validator";
import { Auth } from "../utils";

const router = Router();

router.post("/", PostValidator, Auth, postController.create);
router.get("/", Auth, postController.getAll);
router.put("/:id", Auth, postController.update);
router.delete("/:id", Auth, postController.delete);

export default router;
