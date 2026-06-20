const orderModel = require("../models/order.model");

const createOrder = async (orderData) => {
  if (!orderData.userId) {
    throw new Error("User ID is required");
  }

  if (!orderData.productId) {
    throw new Error("Product ID is required");
  }

  return await orderModel.createOrder(orderData);
};

const getAllOrders = async () => {
  return await orderModel.getAllOrders();
};

const getOrderById = async (id) => {
  return await orderModel.getOrderById(id);
};

const updateOrder = async (id, data) => {
  return await orderModel.updateOrder(id, data);
};

const deleteOrder = async (id) => {
  return await orderModel.deleteOrder(id);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};