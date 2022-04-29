import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import updateProductService from "../services/products/updateProduct.service";

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

  async show(request, response) {}

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

  async delete(request, response) {}
}

export default ProductsController;
