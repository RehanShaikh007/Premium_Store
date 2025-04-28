import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import ProductFilters from "../components/ProductFilters";
import Pagination from "../components/Pagination";
import ProductSkeleton from "../components/ProductSkeleton";
import React from "react";

const ProductList = () => {
  const { state, getCurrentPageProducts } = useProduct();

  if (state.loading) {
    return <ProductSkeleton />;
  }

  if (state.error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error: {state.error}</p>
      </div>
    );
  }

  const currentProducts = getCurrentPageProducts();

  return (
    <div>
      <ProductFilters />

      {currentProducts.length === 0 ? (
        <div className="text-center text-gray-600 p-8">
          <p>No products found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default ProductList;
