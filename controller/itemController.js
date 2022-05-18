const controller = {};

controller.getById = (req, res) => {
  const { id } = req.params;
  res.json("hola");
};

controller.searchByQuery = (req, res) => {
  const { query } = req.params;
  res.json("search");
};
