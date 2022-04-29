import { Router } from "express";

import ProductsController from "../controllers/products.controller";

import verifyProductBodyMiddleware from "../middlewares/verifyProductBody.middleware";
import verifyProductIdMiddleware from "../middlewares/verifyProductId.middleware";

const productsController = new ProductsController();

const router = Router();

router.post("", verifyProductBodyMiddleware, productsController.store);
router.get("", productsController.index);

router.get("/:id", verifyProductIdMiddleware, productsController.show);
router.patch("/:id", verifyProductIdMiddleware, productsController.update);
router.delete("/:id", verifyProductIdMiddleware, productsController.delete);

router.get("/category/:category_id", productsController.indexProductsCategory);

export default router;
