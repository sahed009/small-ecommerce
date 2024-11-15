import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating-stars-component';
import { FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { Helmet } from 'react-helmet-async';
import NotFound from './NotFound';
const ProductDetails = () => {
    const { category, name } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => {
                const formattedCategory = category.replace(/-/g, ' ');
                const formattedName = name.replace(/-/g, ' ');
                const foundProduct = data.find(
                    item => item.category.toLowerCase() === formattedCategory.toLowerCase() &&
                        item.name.toLowerCase() === formattedName.toLowerCase()
                );
                setProduct(foundProduct);
            })
            .catch(err => console.error('Error fetching product:', err));
    }, [category, name]);

    const handleAddToCart = () => {
        if (product && product.inStock) {
            addToCart(product);
            toast.success(`${product.name} added to cart!`);
        } else {
            toast.error(`Could not add ${product.name} to cart. Please try adding it to the wishlist.`);
        }
    };

    const handleAddToWishlist = () => {
        if (product) {
            addToWishlist(product);
            toast.info(`${product.name} added to wishlist!`);
        }
    };

    if (!product) return <div>
        <NotFound />
    </div>;

    return (
        <div className="min-h-screen">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeButton={true}
                pauseOnHover={false}
            />
            <Helmet>
                <title>{product.name} || Gadget Heaven</title>
            </Helmet>
            <div className="bg-purple-600 text-white pt-10 pb-72 text-center relative">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-semibold my-4">Product Details</h1>
                    <p className="my-2 px-4 text-sm md:text-lg max-w-3xl mx-auto">
                        Explore the latest gadgets that will take your experience to the next level.
                    </p>
                </div>
            </div>

            <div className="container mx-auto -mt-[250px] relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-center mx-auto max-w-7xl">
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img src={product.image} alt={product.name} className="h-60 md:h-96 w-full object-contain rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                        <h2 className="text-xl md:text-3xl font-semibold mb-3">{product.name}</h2>
                        <p className="text-base md:text-xl text-[#3A393F] font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
                        <p className={`${product.inStock ? "bg-green-100 text-green-600 border border-green-700" : "bg-red-100 text-red-600 border border-red-700"} inline-block px-3 py-1 rounded-full font-medium my-4`}>
                            {product.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                        <p className="text-gray-600 mb-4">{product.details}</p>

                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Specification:</h3>
                            <ol className="list-decimal list-inside text-gray-500 text-lg">
                                {product.specifications && product.specifications.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ol>
                        </div>

                        <div className="flex items-center gap-2 font-bold text-lg mb-3">Rating <Rating
                            count={1}
                            value={1}
                            size={24}
                            activeColor="#ffd700"
                        /></div>
                        <div className="flex flex-col md:flex-row md:items-center mb-4">
                            <Rating
                                count={5}
                                value={product.rating}
                                size={28}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="text-lg font-medium ml-2">{product.rating} based on {product.ratingCount} Reviews</p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                            <button
                                onClick={handleAddToCart}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-3"
                            >
                                Add To Cart <FiShoppingCart />
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className="text-red-500 hover:text-red-700 text-2xl flex items-center"
                            >
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
