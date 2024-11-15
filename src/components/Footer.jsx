const Footer = () => {
    return (
        <footer className="bg-white py-10 px-6 text-gray-600 container mx-auto max-w-3xl">
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Gadget Heaven</h2>
                <p className="font-medium text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-around   gap-10">
                <div className="text-center">
                    <h3 className="font-bold text-black mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-800">Product Support</a></li>
                        <li><a href="#" className="hover:text-gray-800">Order Tracking</a></li>
                        <li><a href="#" className="hover:text-gray-800">Shipping & Delivery</a></li>
                        <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                    </ul>
                </div>

                <div className="text-center">
                    <h3 className="font-bold text-black mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                        <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                    </ul>
                </div>

                <div className="text-center">
                    <h3 className="font-bold text-black mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-800">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
