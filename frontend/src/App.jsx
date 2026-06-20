import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
return ( <BrowserRouter>


  <Navbar />

  <div className="min-h-screen bg-slate-100">

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/users"
        element={<Users />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />

    </Routes>

  </div>

</BrowserRouter>


);
}

export default App;
