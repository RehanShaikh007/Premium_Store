# FakeStore E-Commerce App

A modern e-commerce application built with React, Vite, and Tailwind CSS that fetches and displays products from the FakeStore API.

## Features

- Product listing page with responsive grid layout
- Product detail page with comprehensive product information
- Advanced filtering and sorting capabilities
- Real-time search functionality
- Client-side pagination
- Loading skeletons for enhanced user experience
- Responsive design for all screen sizes
- Clean and modern UI with Tailwind CSS
- State management using React Context and useReducer

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx
  │   ├── ProductFilters.jsx
  │   ├── Pagination.jsx
  │   └── ProductSkeleton.jsx
  ├── context/
  │   └── ProductContext.jsx
  ├── pages/
  │   ├── ProductList.jsx
  │   └── ProductDetail.jsx
  ├── App.jsx
  └── main.jsx
```

## Technologies Used

- React
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling
- React Context API for state management
- useReducer for complex state logic

## Features in Detail

### Product Listing
- Responsive grid layout that adapts to different screen sizes
- Loading skeletons during data fetching
- Error handling for API failures
- Pagination with Previous/Next navigation

### Filtering and Sorting
- Filter products by category
- Sort products by:
  - Price (Low to High / High to Low)
  - Title (A to Z / Z to A)
- Real-time search functionality

### Product Details
- Comprehensive product information display
- Responsive image gallery
- Product rating and reviews
- Easy navigation back to product list

### State Management
- Centralized state management using Context API
- Complex state logic handled by useReducer
- Efficient filtering and sorting operations
- Pagination state management

## Data Fetching Strategy

The application uses the native `fetch` API to make HTTP requests to the FakeStore API. Data is fetched when components mount using the `useEffect` hook, and loading/error states are managed using React's state management system. The application implements client-side filtering, sorting, and pagination for optimal performance.

## Styling

The application uses Tailwind CSS for styling, providing a utility-first approach to building responsive and modern user interfaces. The styling is consistent across all components and follows a mobile-first design approach. Loading skeletons provide a smooth user experience during data fetching.

## Future Improvements

- Add to cart functionality
- User authentication
- Product reviews and ratings system
- Wishlist feature
- Advanced filtering options
- Dark mode support
- Performance optimizations
- Unit testing with Jest and React Testing Library
- TypeScript implementation
