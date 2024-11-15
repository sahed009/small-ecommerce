# GadgetHeaven✨

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets! This e-commerce platform allows users to explore, filter, and purchase various gadgets while providing a smooth and engaging user experience.

## Live Demo

[Live Website Link](https://gadget-heaven-sahed009.netlify.app/)

## Documentation

[Requirement Document](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## Project Overview

The **GadgetHeaven** platform was developed to showcase a range of gadgets based on a structured Figma design. The website features a detailed navigation system, product categories, individual product pages, and key functionalities like a shopping cart and wishlist. The project also includes dynamic filtering and sorting for enhanced usability.

## Key Features

1. **Structured Navigation Bar**: Includes links to the Dashboard and Stats, with active route indication.
2. **Product Category Sidebar**: Displays gadgets in categories like laptops, phones, and more.
3. **Gadget Cards on Home Page**: Show each gadget with details like image, price, and a “Details” button.
4. **Cart and Wishlist**: Allows adding items to the cart or wishlist, with unique handling to prevent duplicates.
5. **Sorting and Filtering**: Users can sort items by price and filter products by category.

## Technologies and Concepts

- **React Fundamentals**: Components and state management are used extensively.
- **Context API**: Manages cart and wishlist data across the application.
- **React Router**: Handles routing for seamless navigation.
- **LocalStorage**: Provides persistence for the cart and wishlist.

## Data Management

Data is handled using the Context API, with LocalStorage used to persist cart and wishlist data across sessions. This structure ensures efficient data management and responsiveness.

## React Concepts Used

- **useContext**: For managing shared cart and wishlist states.
- **useLocation**: To implement background color changes based on page.
- **useNavigate**: For smooth navigation after actions like purchases.
- **useEffect**: To handle data persistence with LocalStorage.

## Dynamic Page Titles

Each page in the **GadgetHeaven** app has a dynamic title that is updated using the `react-helmet-async` package. This ensures that users always see a relevant and descriptive title on each page. For example:
  
- **Home Page**: "Gadget Heaven | Explore Latest Gadgets"
- **Product Page**: "Product Details | {product.name}"
- **Dashboard**: "Dashboard | Gadget Heaven"
