import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"; // Add your image path here

const Banner = () => {
    return (
        <div className="container mx-auto bg-purple-600 text-white text-center px-8 py-16 relative">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className="mt-4 mb-8 text-sm md:text-lg">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <Link
                        to='/dashboard'
                        className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out">
                        Shop Now
                    </Link>
                </div>

                
                <div className="flex justify-center -mb-72 mt-12">
                    <div className="relative bg-transparent border border-white p-5 rounded-xl ">
                        <img
                            src={bannerImg}
                            alt="Gadget"
                            className="w-[900px] h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
        </div>
    );
};

export default Banner;
