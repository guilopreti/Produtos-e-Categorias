import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import updateProductService from "../services/products/updateProduct.service";
import showProductService from "../services/products/showProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsCategoryService from "../services/products/listProductsCategory.service";

class ProductsController {
  async store(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const product = await createProductService({ name, price, category_id });

      return response.status(201).json(product);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const products = await listProductsService();

      return response.json(products);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const product = await showProductService(id);

      return response.json(product);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async update(request, response) {
    const { name, price, category_id } = request.body;
    const { id } = request.params;

    try {
      const updated = await updateProductService({
        id,
        name,
        price,
        category_id,
      });

      return response.json(updated);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const deleted = await deleteProductService(id);

      return response.json(deleted);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async indexProductsCategory(request, response) {
    const { category_id } = request.params;

    try {
      const productsList = await listProductsCategoryService(category_id);

      return response.json(productsList);
    } catch (err) {
      if (
        (err.message = "There are no registered products in this category.")
      ) {
        return response.status(400).json(err.message);
      }

      return response.status(500).json(err.message);
    }
  }
}

export default ProductsController;
