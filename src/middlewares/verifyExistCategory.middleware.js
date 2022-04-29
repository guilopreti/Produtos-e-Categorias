import database from "../database";

const verifyExistCategoryMiddleware = async (request, response, next) => {
  const { name } = request.body;

  try {
    const res = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (res.rows.length) {
      return response.status(400).json({ message: "Category already exist" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export default verifyExistCategoryMiddleware;
