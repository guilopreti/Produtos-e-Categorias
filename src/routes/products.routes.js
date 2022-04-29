import { Router } from "express";

import ProductsController from "../controllers/products.controller";

import verifyProductBodyMiddleware from "../middlewares/verifyProductBody.middleware";

const productsController = new ProductsController();

const router = Router();

router.post("", verifyProductBodyMiddleware, productsController.store);
router.get("", productsController.index);

router.get("/:id");
router.patch("/:id");
router.delete("/:id");

router.get("/category/:category_id");

export default router;
