import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    const [product] = res.rows;

    return { message: "Product deleted", product };
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
