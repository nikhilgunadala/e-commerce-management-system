import { useEffect, useState } from "react";
import api from "../api";

function Home() {

const [usersCount, setUsersCount] = useState(0);
const [productsCount, setProductsCount] = useState(0);
const [ordersCount, setOrdersCount] = useState(0);

const loadData = async () => {
try {

  const usersRes = await api.get("/users");
  const productsRes = await api.get("/products");
  const ordersRes = await api.get("/orders");

  setUsersCount(usersRes.data.data.length);
  setProductsCount(productsRes.data.data.length);
  setOrdersCount(ordersRes.data.data.length);

} catch (error) {
  console.log(error);
}


};

useEffect(() => {
loadData();
}, []);

return ( <div className="max-w-7xl mx-auto p-8">

  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-10 shadow-lg">

    <h1 className="text-5xl font-bold">
      E-Commerce Dashboard
    </h1>

    <p className="mt-4 text-xl">
      Manage Users, Products and Orders
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-10">

    <div className="bg-white rounded-xl shadow p-8 text-center">

      <h2 className="text-2xl font-bold">
        Total Users
      </h2>

      <p className="text-5xl mt-4 text-blue-600 font-bold">
        {usersCount}
      </p>

    </div>

    <div className="bg-white rounded-xl shadow p-8 text-center">

      <h2 className="text-2xl font-bold">
        Total Products
      </h2>

      <p className="text-5xl mt-4 text-green-600 font-bold">
        {productsCount}
      </p>

    </div>

    <div className="bg-white rounded-xl shadow p-8 text-center">

      <h2 className="text-2xl font-bold">
        Total Orders
      </h2>

      <p className="text-5xl mt-4 text-orange-600 font-bold">
        {ordersCount}
      </p>

    </div>

  </div>

</div>


);
}

export default Home;
