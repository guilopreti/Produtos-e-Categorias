import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";

class CategoriesController {
  async store(request, response) {
    const { name } = request.body;

    try {
      const category = await createCategoryService(name);

      return response.status(201).json(category);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const categories = await listCategoriesService();

      return response.json(categories);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async show(request, response) {}

  async update(request, response) {}

  async delete(request, response) {}
}

export default CategoriesController;
