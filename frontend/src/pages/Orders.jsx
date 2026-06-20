import { useEffect, useState } from "react";
import api from "../api";

function Orders() {
const [search, setSearch] = useState("");
const [orders, setOrders] = useState([]);
const [users, setUsers] = useState([]);
const [products, setProducts] = useState([]);

const [formData, setFormData] = useState({
userId: "",
productId: "",
quantity: 1,
status: "Pending",
});

const fetchOrders = async () => {
try {
const response = await api.get("/orders");
setOrders(response.data.data);
} catch (error) {
console.log(error);
}
};

const fetchUsers = async () => {
try {
const response = await api.get("/users");
setUsers(response.data.data);
} catch (error) {
console.log(error);
}
};

const fetchProducts = async () => {
try {
const response = await api.get("/products");
setProducts(response.data.data);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
fetchOrders();
fetchUsers();
fetchProducts();
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const createOrder = async (e) => {
e.preventDefault();

try {
  await api.post("/orders", formData);

  setFormData({
    userId: "",
    productId: "",
    quantity: 1,
    status: "Pending",
  });

  fetchOrders();
} catch (error) {
  console.log(error);
}


};

const deleteOrder = async (id) => {

const confirmDelete =
window.confirm(
"Delete this order?"
);

if (!confirmDelete) return;

try {


await api.delete(`/orders/${id}`);

fetchOrders();


} catch (error) {


console.log(error);


}

};


return ( <div className="max-w-7xl mx-auto p-8">


  <div className="bg-white rounded-xl shadow p-6">

    <h1 className="text-3xl font-bold mb-6">
      Order Management
    </h1>

    <form
      onSubmit={createOrder}
      className="grid md:grid-cols-4 gap-4"
    >

      <select
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        className="border p-3 rounded"
      >
        <option value="">
          Select User
        </option>

        {users.map((user) => (
          <option
            key={user._id}
            value={user._id}
          >
            {user.name}
          </option>
        ))}
      </select>

      <select
        name="productId"
        value={formData.productId}
        onChange={handleChange}
        className="border p-3 rounded"
      >
        <option value="">
          Select Product
        </option>

        {products.map((product) => (
          <option
            key={product._id}
            value={product._id}
          >
            {product.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="border p-3 rounded"
      >
        <option>Pending</option>
        <option>Confirmed</option>
        <option>Shipped</option>
        <option>Delivered</option>
      </select>

      <button
        className="bg-orange-600 text-white p-3 rounded hover:bg-orange-700"
      >
        Create Order
      </button>

    </form>

  </div>

  <div className="bg-white rounded-xl shadow p-6 mt-8">

    <h2 className="text-2xl font-bold mb-4">
      Orders List
    </h2>
    <div className="mb-4">

<input
type="text"
placeholder="Search Order Status..."
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

          <th className="p-3">User</th>
          <th className="p-3">Product</th>
          <th className="p-3">Quantity</th>
          <th className="p-3">Status</th>
          <th className="p-3">Action</th>

        </tr>

      </thead>

      <tbody>

        {orders
.filter((order) =>
order.status
.toLowerCase()
.includes(search.toLowerCase())
)
.map((order) => (


          <tr
            key={order._id}
            className="border-b text-center"
          >

           

            <td className="p-3">

{
users.find(
(user) =>
user._id === order.userId
)?.name || "Unknown User"
}

</td>

<td className="p-3">

{
products.find(
(product) =>
product._id === order.productId
)?.name || "Unknown Product"
}

</td>


            <td className="p-3">
              {order.quantity}
            </td>

            <td className="p-3">
              {order.status}
            </td>

            <td className="p-3">

              <button
                onClick={() =>
                  deleteOrder(order._id)
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

export default Orders;
