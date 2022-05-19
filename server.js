const { default: axios } = require("axios");
const express = require("express");
const itemController = require("./controller/itemController");

const app = express();
const port = 5000;

app.get("/api/items", async (req, res) => {
  const objectToSearch = req.query.q;
  await itemController
    .getItemsBySearch(objectToSearch)
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((e) => {
      console.log("e", e);
    });
});

app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  await itemController
    .getItemsById(id)
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((e) => {
      console.log("e", e);
    });
});

app.listen(port, () => console.log(`Server is up at port ${port}.`));
