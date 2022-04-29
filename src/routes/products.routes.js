import { Router } from "express";

const router = Router();

router.post("");
router.get("");

router.get("/:id");
router.patch("/:id");
router.delete("/:id");

router.get("/category/:category_id");

export default router;
