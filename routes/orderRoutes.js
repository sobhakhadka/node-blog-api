const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();

router.post("/", orderController.addOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);
router.get("/:id", orderController.getSingleOrder);
router.get("/", orderController.getAllOrders);

module.exports = router;
