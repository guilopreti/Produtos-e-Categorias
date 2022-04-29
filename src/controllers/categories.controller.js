import createCategoryService from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import showCategoryService from "../services/categories/showCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";

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

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    try {
      const updated = await updateCategoryService({ name, id });

      return response.json(updated);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

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
