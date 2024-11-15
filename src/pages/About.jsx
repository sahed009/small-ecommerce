import bannerImage from '../assets/banner.jpg';
import bgImage from '../assets/about_bg.png';
import { Helmet } from 'react-helmet-async';
const faqs = [
    { question: "What products do we offer?", answer: "We offer a wide range of gadgets, including laptops, phones, accessories, and more." },
    { question: "How can I track my order?", answer: "Once your order is placed, you can track it via the 'Order Tracking' section in our services." },
    { question: "What is your return policy?", answer: "We have a 30-day return policy. Please see our Returns page for more information." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit cards, PayPal, and bank transfers." },
    { question: "What shipping options are available?", answer: "We offer standard, express, and next-day shipping options. You can choose your preferred option at checkout." },
    { question: "How can I contact customer support?", answer: "You can reach our customer support via email at support@gadgetheaven.com or by using the contact form on our website." },
];

const About = () => {
    return (
        <div
            className="container mx-auto h-full px-8 py-16 m-0 text-black rounded-b-lg"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(149, 56, 226, 0.8), rgba(167, 107, 219, 0.8)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Helmet>
                <title>About Us ||  Gadget Heaven</title> 
            </Helmet>
            <div className="container mx-auto">
                <div className="text-center rounded-xl mb-8 bg-purple-700/30 max-w-4xl mx-auto p-6 text-white backdrop-blur-sm">
                    <h1 className="text-xl md:text-4xl font-bold mb-2">About Gadget Heaven</h1>
                    <p className="max-w-2xl mx-auto font-light text-sm md:text-lg">
                        At Gadget Heaven, we are passionate about technology and strive to bring you the latest, most advanced gadgets in the market.
                        Discover our wide range of products designed to enhance your everyday life.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-8">
                    <img
                        src={bannerImage}
                        alt="Gadget Display"
                        className="rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3"
                    />

                    <div className="w-full md:w-1/2 svh-full space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="collapse collapse-plus backdrop-blur-sm bg-white/30 rounded-lg p-4 shadow-lg">
                                <input type="radio" name="my-accordion" id={`faq-${index}`} />
                                <div className="collapse-title text-xl font-medium">{faq.question}</div>
                                <div className="collapse-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg  p-4 md:p-8 shadow-lg mt-8 w-full md:w-1/2 mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-sm md:text-base text-center text-gray-800 mb-6">Stay updated with the latest news and offers!</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-2/3 p-3 mb-4 md:mb-0 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9538E2] focus:border-transparent"
                        />
                        <button className="bg-[#9538E2] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-70 transition-opacity duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
