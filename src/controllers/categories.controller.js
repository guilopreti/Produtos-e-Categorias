import createCategoryService from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import showCategoryService from "../services/categories/showCategory.service";

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

  async show(request, response) {
    const { id } = request.params;

    try {
      const category = await showCategoryService(id);

      return response.json(category);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async update(request, response) {}

  async delete(request, response) {
    const { id } = request.params;

    try {
      const deleted = await deleteCategoryService(id);

      return response.json(deleted);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }
}

export default CategoriesController;
