const express = require("express");
const orderController = require("../controller/orderController");

// middleware required
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, orderController.addOrder);
router.put("/:id", auth, orderController.updateOrder);
router.delete("/:id", auth, orderController.deleteOrder);
router.get("/:id", auth, orderController.getSingleOrder);
router.get("/", auth, orderController.getAllOrders);

module.exports = router;
