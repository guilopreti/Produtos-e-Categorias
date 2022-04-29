const verifyProductBodyMiddleware = async (request, response, next) => {
  const { name, price } = request.body;

  if (!name || !price) {
    return response.status(400).json({ message: "Incorrectly filled data" });
  }

  next();
};

export default verifyProductBodyMiddleware;
