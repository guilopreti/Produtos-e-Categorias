import { Router } from "express";

import CategoriesController from "../controllers/categories.controller";
import verifyCategoryIdMiddleware from "../middlewares/verifyCategoryId.middleware";

import verifyCategoryNameMiddleware from "../middlewares/verifyCategoryName.middleware";
import verifyExistCategoryMiddleware from "../middlewares/verifyExistCategory.middleware";

const categoriesController = new CategoriesController();

const router = Router();

router.post(
  "",
  verifyCategoryNameMiddleware,
  verifyExistCategoryMiddleware,
  categoriesController.store
);
router.get("", categoriesController.index);

router.get("/:id", verifyCategoryIdMiddleware, categoriesController.show);
router.patch(
  "/:id",
  verifyCategoryIdMiddleware,
  verifyCategoryNameMiddleware,
  verifyExistCategoryMiddleware,
  categoriesController.update
);
router.delete("/:id", verifyCategoryIdMiddleware, categoriesController.delete);

export default router;
