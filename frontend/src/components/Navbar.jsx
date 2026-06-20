import { Link } from "react-router-dom";
import { FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";

function Navbar() {
return ( <nav className="bg-slate-900 text-white shadow-lg"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


    <h1 className="text-3xl font-extrabold text-cyan-400">
      E-Commerce Dashboard
    </h1>

    <div className="flex gap-6">

      <Link
        to="/"
        className="hover:text-cyan-400 transition duration-300"
      >
        Home
      </Link>

      <Link
        to="/users"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaUsers />
        Users
      </Link>

      <Link
        to="/products"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaBoxOpen />
        Products
      </Link>

      <Link
        to="/orders"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaShoppingCart />
        Orders
      </Link>

    </div>

  </div>
</nav>


);
}

export default Navbar;
