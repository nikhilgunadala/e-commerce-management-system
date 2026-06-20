function ProductCard({ product }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold text-xl">
        {product.name}
      </h2>

      <p>{product.type}</p>

      <p className="text-green-600 font-bold">
        ₹ {product.price}
      </p>
    </div>
  );
}

export default ProductCard;