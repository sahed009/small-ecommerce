import { useState } from 'react';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full md:w-2/3 mx-auto lg:w-1/4 mb-4 md:mb-0">
          
            <div className="lg:hidden mt-10 md:mt-0">
                <button
                    onClick={handleDropdownToggle}
                    className="bg-purple-600 text-white w-full p-3 rounded-lg text-left font-semibold"
                >
                    {selectedCategory}
                    <span className="float-right">{isDropdownOpen ? '▲' : '▼'}</span>
                </button>
                {isDropdownOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded-lg">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    onSelectCategory(category);
                                    setIsDropdownOpen(false); // Close dropdown after selection
                                }}
                                className={`block w-full p-3 text-left ${selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            
            <div className="hidden lg:block bg-white px-6 py-4 rounded-xl shadow-xl z-10">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectCategory(category)}
                        className={`w-full text-left p-3 my-2 shadow-md rounded-full font-semibold transition-colors duration-300 ${selectedCategory === category
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        <span className='ml-8'>{category}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
