function UserCard({ user }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold text-xl">
        {user.name}
      </h2>

      <p>ID: {user.userId}</p>

      <p>{user.contact}</p>

      <p>{user.adress}</p>
    </div>
  );
}

export default UserCard;