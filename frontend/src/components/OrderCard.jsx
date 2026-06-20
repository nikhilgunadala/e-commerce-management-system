function OrderCard({ order }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2>
        User ID :
        {order.userId}
      </h2>

      <h2>
        Product ID :
        {order.productId}
      </h2>

      <p>
        Quantity :
        {order.quantity}
      </p>

      <p>
        Status :
        {order.status}
      </p>
    </div>
  );
}

export default OrderCard;