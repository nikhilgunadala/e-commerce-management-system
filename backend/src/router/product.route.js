const express = require("express");
const router = express.Router();
const productHandler = require("../handlers/product.handler");

router.post("/", productHandler.createProduct);
router.get("/", productHandler.getAllProducts);
router.get("/:id", productHandler.getProductById);
router.put("/:id", productHandler.updateProduct);
router.delete("/:id", productHandler.deleteProduct);

module.exports = router;