import { Router } from "express";

import CategoriesController from "../controllers/categories.controller";

import verifyCategoryNameMiddleware from "../middlewares/verifyCategoryName.middleware";

const categoriesController = new CategoriesController();

const router = Router();

router.post("", verifyCategoryNameMiddleware, categoriesController.store);
router.get("", categoriesController.index);

router.get("/:id");
router.patch("/:id");
router.delete("/:id");

export default router;
