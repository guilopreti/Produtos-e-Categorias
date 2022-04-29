import database from "../database";

const verifyProductIdMiddleware = async (request, response, next) => {
  const { id } = request.params;

  if (
    !id.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  ) {
    return response.status(400).json({ message: "Product not batata" });
  }

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
