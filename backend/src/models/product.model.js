const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const productCollections = () => {
  return getDB().collection("product");
};

const createProduct = async (productData) => {
  return await productCollections().insertOne(productData);
};

const getAllProducts = async () => {
  return await productCollections().find().toArray();
};

const getProductById = async (id) => {
  return await productCollections().findOne({
    _id: new ObjectId(id),
  });
};

const updateProduct = async (id, data) => {
  return await productCollections().updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: data },
  );
};

const deleteProduct = async (id) => {
  return await productCollections().deleteOne({
    _id: new ObjectId(id),
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};