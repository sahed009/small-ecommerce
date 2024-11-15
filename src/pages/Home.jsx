import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch('/gadgets.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const categories = ['All', ...new Set(products.map(product => product.category))];
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="relative pb-8">
            <Helmet>
                <title>Gadget Heaven | Explore Latest Gadgets</title> 
            </Helmet>
            <Banner />

            
            <div className="container mx-auto mt-32 md:mt-96 relative z-10 px-4">
            <h1 className='text-black font-bold text-2xl md:text-4xl text-center mt-72 mb-0 sm:mb-12'>Explore Cutting-Edge Gadgets</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    <Sidebar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-0 md:mt-0">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
