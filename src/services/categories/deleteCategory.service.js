import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    const [category] = res.rows;

    return { message: "Category deleted", category };
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
