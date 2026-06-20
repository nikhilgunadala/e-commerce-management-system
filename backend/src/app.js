const express = require("express");
const cors = require("cors");

const userRoutes = require("./router/user.route");
const productRoutes = require("./router/product.route");
const orderRoutes = require("./router/order.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);



module.exports = app;