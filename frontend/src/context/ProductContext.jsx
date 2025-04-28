import { createContext, useContext, useReducer, useEffect } from 'react';
import React from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  filteredProducts: [],
  loading: true,
  error: null,
  category: 'all',
  sortBy: 'default',
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 8
};

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload, currentPage: 1 };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload, currentPage: 1 };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'FILTER_PRODUCTS':
      let filtered = [...state.products];

      // Apply category filter
      if (state.category !== 'all') {
        filtered = filtered.filter(product => product.category === state.category);
      }

      // Apply search filter
      if (state.searchQuery) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      // Apply sorting
      switch (state.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'title-asc':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'title-desc':
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }

      return { ...state, filteredProducts: filtered };
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  }, [state.category, state.sortBy, state.searchQuery]);

  const value = {
    state,
    dispatch,
    getCurrentPageProducts: () => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.filteredProducts.slice(startIndex, endIndex);
    },
    getTotalPages: () => Math.ceil(state.filteredProducts.length / state.itemsPerPage),
    getCategories: () => {
      const categories = new Set(state.products.map(product => product.category));
      return ['all', ...categories];
    }
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
} 