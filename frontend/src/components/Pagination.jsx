import { useProduct } from "../context/ProductContext";
import React from "react";

const Pagination = () => {
  const { state, dispatch, getTotalPages } = useProduct();
  const totalPages = getTotalPages();

  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => handlePageChange(state.currentPage - 1)}
        disabled={state.currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            state.currentPage === page ? "bg-blue-500 text-white" : ""
          } cursor-pointer`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(state.currentPage + 1)}
        disabled={state.currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
