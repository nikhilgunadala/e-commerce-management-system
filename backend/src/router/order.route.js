const express = require("express");

const router = express.Router();

const orderHandler = require("../handlers/order.handler");

router.post("/", orderHandler.createOrder);

router.get("/", orderHandler.getAllOrders);

router.get("/:id", orderHandler.getOrderById);

router.put("/:id", orderHandler.updateOrder);

router.delete("/:id", orderHandler.deleteOrder);

module.exports = router;