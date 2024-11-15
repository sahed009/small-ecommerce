import { useNavigate } from 'react-router-dom';


function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')   
    .replace(/[^\w-]+/g, '')   
    .replace(/--+/g, '-')     
    .replace(/^-+/, '')        
    .replace(/-+$/, '');       
}

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        const categorySlug = slugify(product.category);
        const nameSlug = slugify(product.name);
        navigate(`/${categorySlug}/${nameSlug}`);
    };

    return (
        <div className="bg-white border p-6 rounded-2xl relative">
            <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
            <h2 className="mt-6 mb-3 text-2xl font-semibold">{product.name}</h2>
            <p className='font-medium text-[#6C6B6F] mb-12'>Price: ${product.price.toFixed(2)}</p>
            <button
                onClick={handleDetailsClick}
                className="absolute bottom-4 left-6 text-purple-700 border border-purple-700 hover:text-white hover:bg-purple-700 duration-500 ease-in-out px-4 py-2 rounded-full"
            >
                View Details
            </button>
        </div>
    );
};

export default ProductCard;
