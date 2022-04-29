import database from "../../database";

const listProductsCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name category FROM products p INNER JOIN categories c ON p.category_id = c.id WHERE p.category_id = $1",
      [category_id]
    );

    if (!res.rows.length) {
      throw new Error("There are no registered products in this category.");
    }

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsCategoryService;
