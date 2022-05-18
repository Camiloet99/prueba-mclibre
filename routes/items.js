const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

router.get("/:id", itemController.getById);

router.get("?q=", itemController.searchByQuery);
