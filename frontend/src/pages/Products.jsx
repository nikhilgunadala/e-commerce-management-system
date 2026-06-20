import { useEffect, useState } from "react";
import api from "../api";

function Products() {

  const [search, setSearch] = useState("");


const [products, setProducts] = useState([]);

const [formData, setFormData] = useState({
productId: "",
name: "",
type: "",
price: "",
});

const fetchProducts = async () => {
try {
const response = await api.get("/products");
setProducts(response.data.data);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
fetchProducts();
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const createProduct = async (e) => {
e.preventDefault();


try {
  await api.post("/products", formData);

  setFormData({
    productId: "",
    name: "",
    type: "",
    price: "",
  });

  fetchProducts();
} catch (error) {
  console.log(error);
}


};

const deleteProduct = async (id) => {

const confirmDelete =
window.confirm(
"Are you sure you want to delete this product?"
);

if (!confirmDelete) return;

try {


await api.delete(`/products/${id}`);

fetchProducts();


} catch (error) {

console.log(error);


}

};


return ( <div className="max-w-7xl mx-auto p-8">


  <div className="bg-white rounded-xl shadow p-6">

    <h1 className="text-3xl font-bold mb-6">
      Product Management
    </h1>

    <form
      onSubmit={createProduct}
      className="grid md:grid-cols-4 gap-4"
    >

      <input
        type="number"
        name="productId"
        placeholder="Product ID"
        value={formData.productId}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="text"
        name="type"
        placeholder="Product Type"
        value={formData.type}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <button
        className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
      >
        Add Product
      </button>

    </form>

  </div>

  <div className="bg-white rounded-xl shadow p-6 mt-8">

    <h2 className="text-2xl font-bold mb-4">
      Products List
    </h2>

    <div className="mb-4">

<input
type="text"
placeholder="Search Product..."
value={search}
onChange={(e) =>
setSearch(e.target.value)
}
className="border p-3 rounded w-full"
/>

</div>


    <table className="w-full">

      <thead>

        <tr className="border-b">

          <th className="p-3">Product ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Type</th>
          <th className="p-3">Price</th>
          <th className="p-3">Action</th>

        </tr>

      </thead>

      <tbody>

        {products
.filter((product) =>
product.name
.toLowerCase()
.includes(search.toLowerCase())
)
.map((product) => (


          <tr
            key={product._id}
            className="border-b text-center"
          >

            <td className="p-3">
              {product.productId}
            </td>

            <td className="p-3">
              {product.name}
            </td>

            <td className="p-3">
              {product.type}
            </td>

            <td className="p-3">
              ₹ {product.price}
            </td>

            <td className="p-3">

              <button
                onClick={() =>
                  deleteProduct(product._id)
                }
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>


);
}

export default Products;
