import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import { FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [isWishlistDropdownOpen, setWishlistDropdownOpen] = useState(false);
    const cartRef = useRef(null);
    const wishlistRef = useRef(null);

    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const toggleCartDropdown = () => {
        setCartDropdownOpen((prev) => !prev);
        if (isWishlistDropdownOpen) setWishlistDropdownOpen(false);
    };

    const toggleWishlistDropdown = () => {
        setWishlistDropdownOpen((prev) => !prev);
        if (isCartDropdownOpen) setCartDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartDropdownOpen(false);
            }
            if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
                setWishlistDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleGoToDashboard = () => {
        navigate('/dashboard');
        setCartDropdownOpen(false); // Close the cart dropdown after redirection
        setWishlistDropdownOpen(false); // Close the wishlist dropdown after redirection
    };

    return (
        <nav className={`container mx-auto rounded-t-lg ${location.pathname === '/' || location.pathname === '/about' ? 'bg-[#9538E2] text-white' : 'bg-white text-black'} mt-4 sm:mt-8 relative`}>
            <div className="container p-4 flex justify-between items-center mx-auto">
                <div className="md:px-4 md:py-3 rounded-xl transition-colors duration-300 hover:bg-purple-700 hover:text-white">
                    <NavLink to="/" className="font-semibold text-xl block">
                        Gadget Heaven
                    </NavLink>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-purple-900 text-white' : 'hover:bg-purple-800 hover:text-white'}`}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-purple-900 text-white' : 'hover:bg-purple-800 hover:text-white'}`}>Stats</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-purple-900 text-white' : 'hover:bg-purple-800 hover:text-white'}`}>Dashboard</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-purple-900 text-white' : 'hover:bg-purple-800 hover:text-white'}`}>About</NavLink>
                </div>

                {/* Icons */}
                <div className="flex items-start gap-1 mr-10">
                    {/* Cart Dropdown */}
                    <div className="relative" ref={cartRef}>
                        <button onClick={toggleCartDropdown} className="flex items-center">
                            <FaShoppingCart className="text-2xl" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                        {isCartDropdownOpen && (
                            <div className="absolute -right-20 mt-4 w-72 bg-white shadow-lg rounded-2xl max-h-60 overflow-y-auto z-50">
                                <div className="p-4">
                                    <h3 className="font-bold text-xl text-black mb-6">{cartItems.length} items in Cart</h3>
                                    <p className="font-medium text-purple-700">Subtotal: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                                </div>
                                <div className="p-2 ">
                                    <button onClick={handleGoToDashboard} className="px-4 py-3 rounded-full bg-purple-700 text-white">Dashboard</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Wishlist Dropdown */}
                    <div className="relative ml-4" ref={wishlistRef}>
                        <button onClick={toggleWishlistDropdown} className="flex items-center text-2xl">
                            <FaHeart />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </button>
                        {isWishlistDropdownOpen && (
                            <div className="absolute -right-10 mt-4 w-72 bg-white shadow-lg rounded-2xl max-h-60 overflow-y-auto z-50">
                                <div className="p-4">
                                    <h3 className="font-bold text-xl text-black mb-6">{wishlistItems.length} items in Wishlist </h3>
                                </div>
                                <div className="p-4">
                                    <button onClick={handleGoToDashboard} className="px-4 py-3 rounded-full bg-purple-700 text-white">Dashboard</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        className="md:hidden text-2xl z-50 absolute top-4 right-4"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <AiOutlineClose /> : <FaBars />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden fixed top-6 right-1 w-2/3 h-1/2 bg-[#9538E2]/90 backdrop-blur-sm text-white z-40 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out transform rounded-xl">
                        <NavLink to="/" className="text-xl font-semibold" onClick={toggleMobileMenu}>Home</NavLink>
                        <NavLink to="/statistics" className="text-xl font-semibold" onClick={toggleMobileMenu}>Stats</NavLink>
                        <NavLink to="/dashboard" className="text-xl font-semibold" onClick={toggleMobileMenu}>Dashboard</NavLink>
                        <NavLink to="/about" className="text-xl font-semibold" onClick={toggleMobileMenu}>About</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
