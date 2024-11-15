import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    // Load wishlist items from localStorage on component mount
    useEffect(() => {
        const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        setWishlistItems(savedWishlistItems);
    }, []);

    // Save wishlist items to localStorage whenever wishlistItems changes
    useEffect(() => {
        if (wishlistItems.length > 0) {
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        }
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        if (!wishlistItems.some(existingItem => existingItem.id === item.id)) {
            setWishlistItems((prevItems) => [...prevItems, item]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
