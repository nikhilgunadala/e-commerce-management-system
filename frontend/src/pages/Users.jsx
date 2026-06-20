import { useEffect, useState } from "react";
import api from "../api";

function Users() {

const [users, setUsers] = useState([]);

const [search, setSearch] = useState("");


const [formData, setFormData] = useState({
userId: "",
name: "",
contact: "",
adress: "",
});

const fetchUsers = async () => {
try {
const response = await api.get("/users");
setUsers(response.data.data);
} catch (error) {
console.log(error);
}
};

useEffect(() => {
fetchUsers();
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const createUser = async (e) => {
e.preventDefault();


try {
  await api.post("/users", formData);

  setFormData({
    userId: "",
    name: "",
    contact: "",
    adress: "",
  });

  fetchUsers();
} catch (error) {
  console.log(error);
}


};

const deleteUser = async (id) => {

const confirmDelete =
window.confirm(
"Are you sure you want to delete this user?"
);

if (!confirmDelete) return;

try {


await api.delete(`/users/${id}`);

fetchUsers();


} catch (error) {


console.log(error);


}

};


return ( <div className="max-w-7xl mx-auto p-8">


  <div className="bg-white rounded-xl shadow p-6">

    <h1 className="text-3xl font-bold mb-6">
      User Management
    </h1>

    <form
      onSubmit={createUser}
      className="grid md:grid-cols-4 gap-4"
    >

      <input
        type="number"
        name="userId"
        placeholder="User ID"
        value={formData.userId}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="number"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <input
        type="text"
        name="adress"
        placeholder="Address"
        value={formData.adress}
        onChange={handleChange}
        className="border p-3 rounded"
      />

      <button
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
      >
        Add User
      </button>

    </form>

  </div>

  <div className="bg-white rounded-xl shadow p-6 mt-8">

    <h2 className="text-2xl font-bold mb-4">
      Users List
    </h2>

    <div className="mb-4">

<input
type="text"
placeholder="Search User..."
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

          <th className="p-3">User ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Contact</th>
          <th className="p-3">Address</th>
          <th className="p-3">Action</th>

        </tr>

      </thead>

      <tbody>

        {users
.filter((user) =>
user.name
.toLowerCase()
.includes(search.toLowerCase())
)
.map((user) => (


          <tr
            key={user._id}
            className="border-b text-center"
          >

            <td className="p-3">
              {user.userId}
            </td>

            <td className="p-3">
              {user.name}
            </td>

            <td className="p-3">
              {user.contact}
            </td>

            <td className="p-3">
              {user.adress}
            </td>

            <td className="p-3">

              <button
                onClick={() =>
                  deleteUser(user._id)
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

export default Users;
