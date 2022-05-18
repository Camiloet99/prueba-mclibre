const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 5000;

//const itemsRoutes = require("./routes/items");

app.get("/api/items", async (req, res) => {
  const objectToSearch = req.query.q;
  try {
    const response = await axios({
      url: `https://api.mercadolibre.com/sites/MLA/search?q=${objectToSearch}`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(port, () => console.log(`Server is up at port ${port}.`));
