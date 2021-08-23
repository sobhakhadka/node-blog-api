const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id", productController.getSingleProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
