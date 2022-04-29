import database from "../database";

const verifyProductIdMiddleware = async (request, response, next) => {
  const { id } = request.params;

  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (!res.rows.length) {
      return response.status(400).json({ message: "Product not found" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export default verifyProductIdMiddleware;
