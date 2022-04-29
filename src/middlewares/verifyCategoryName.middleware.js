const verifyCategoryNameMiddleware = async (request, response, next) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).json("Incorrectly filled data");
  }

  next();
};

export default verifyCategoryNameMiddleware;
