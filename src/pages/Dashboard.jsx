import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { AiOutlineClose } from 'react-icons/ai';
import { ImSortAmountDesc } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
    const [activeTab, setActiveTab] = useState('cart');
    const [sortedCartItems, setSortedCartItems] = useState(cartItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const navigate = useNavigate();


    const totalPrice = sortedCartItems.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        setSortedCartItems(cartItems);
    }, [cartItems]);

    const handleSortByPrice = () => {
        const sorted = [...sortedCartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sorted);
    };

    const handlePurchase = () => {
        setPurchasePrice(totalPrice);
        setIsModalOpen(true);
        clearCart();
        toast.success("Purchase successful! Your cart has been cleared.");
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    const handleAddToCartFromWishlist = (item) => {
        if (item.inStock <= 0) {
            toast.error(`${item.name} is out of stock and cannot be added to your cart.`);
            return;
        }

        addToCart(item);
        removeFromWishlist(item.id);
        toast.success(`${item.name} has been added to your cart.`);
    };

    const handleRemoveFromCart = (item) => {
        removeFromCart(item.id);
        toast.error(`${item.name} has been removed from your cart.`);
    };

    const handleRemoveFromWishlist = (item) => {
        removeFromWishlist(item.id);
        toast.error(`${item.name} has been removed from your wishlist.`);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Helmet>
                <title>Dashboard ||  Gadget Heaven</title>
            </Helmet>
            <div className="bg-purple-600 text-white py-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="text-base mt-4 max-w-4xl text-center mx-auto px-3">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="flex justify-center mt-6 space-x-4">
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`px-8 py-2 rounded-full font-semibold ${activeTab === 'cart' ? 'bg-white text-purple-600 font-extrabold' : 'text-white border border-white'}`}
                        >
                            Cart
                        </button>
                        <button
                            onClick={() => setActiveTab('wishlist')}
                            className={`px-8 py-2 rounded-full font-semibold ${activeTab === 'wishlist' ? 'bg-white text-purple-600 font-extrabold' : 'text-white border border-white'}`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8">
                {activeTab === 'cart' && (
                    <div>
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
                            <h2 className="text-2xl font-bold">Cart</h2>
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <p className="font-bold text-2xl mr-2">Total cost: ${totalPrice.toFixed(2)}</p>
                                <button onClick={handleSortByPrice} className="bg-white text-purple-700 border border-purple-700 px-4 py-3 rounded-full hover:bg-purple-700 hover:text-white flex justify-center items-center gap-3">
                                    Sort by Price <ImSortAmountDesc />
                                </button>
                                <button
                                    onClick={handlePurchase}
                                    className={`bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={cartItems.length === 0}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {sortedCartItems.map((item) => (
                                <div key={item.id} className="grid grid-cols-3 gap-6 p-6 rounded-lg shadow-md bg-white relative">
                                    <button
                                        onClick={() => handleRemoveFromCart(item)}
                                        className="text-red-500 text-lg hover:text-red-700 absolute top-2 right-2 md:hidden border border-red-500 p-1 rounded-full"
                                    >
                                        <AiOutlineClose />
                                    </button>

                                    <button
                                        onClick={() => handleRemoveFromCart(item)}
                                        className="text-red-500 text-xl hover:text-red-700 absolute top-4 right-4 hidden md:block border border-red-500 p-2 rounded-full"
                                    >
                                        <AiOutlineClose />
                                    </button>

                                    <div className="col-span-3 md:col-span-2 order-2 md:order-1 flex flex-col md:flex-row  gap-10">
                                        <div className="h-40 md:w-[200px]  rounded overflow-hidden">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <div className="w-full h-full bg-gray-300" />
                                            )}
                                        </div>
                                        <div className=" text-center md:text-left">
                                            <h3 className="font-semibold text-2xl">{item.name}</h3>
                                            <p className="text-gray-500 text-base my-4">{item.details}</p>
                                            <p className="font-semibold text-xl mt-2 text-[#3A393F]">Price: ${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Wishlist Items</h2>
                        <div className="space-y-4">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-lg shadow-md bg-white relative">

                                    <button
                                        onClick={() => handleRemoveFromWishlist(item)}
                                        className="text-red-500 text-lg hover:text-red-700 absolute top-2 right-2 p-1 border border-red-500 rounded-full md:hidden"
                                    >
                                        <AiOutlineClose />
                                    </button>

                                    <button
                                        onClick={() => handleRemoveFromWishlist(item)}
                                        className="text-red-500 text-xl hover:text-red-700 absolute top-4 md:top-8 right-4 md:right-6 hidden md:block border border-red-500 p-2 rounded-full"
                                    >
                                        <AiOutlineClose />
                                    </button>

                                    <div className="flex flex-col md:flex-row  items-center max-w-4xl gap-4">
                                        <div className="h-40 w-[200px] rounded overflow-hidden">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <div className="w-full h-full bg-gray-300" />
                                            )}
                                        </div>

                                        <div className="text-center md:text-left max-w-5xl mx-auto">
                                            <h3 className="font-semibold text-2xl">{item.name}</h3>
                                            <p className="text-gray-500 my-4"><span className='font-semibold'>Description:</span>  {item.details}</p>
                                            <p className="font-semibold text-xl text-[#3A393F] mt-2">Price: ${item.price.toFixed(2)}</p>

                                            <button
                                                onClick={() => handleAddToCartFromWishlist(item)}
                                                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 w-full md:w-auto mt-4"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <Modal isOpen={isModalOpen} onClose={handleCloseModal} totalPrice={purchasePrice} />
            </div>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeButton={true}
                pauseOnHover={false} 
            />
        </div>
    );
};

export default Dashboard;
