import { Link } from 'react-router-dom';
import memeImage from '../assets/funny-meme.jpg';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-svh text-center ">
            <Helmet>
                <title>404 Page Not Available</title>
            </Helmet>
            <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
            <p className="text-xl mb-4">Uh-oh! Looks like you&apos;re lost.</p>
            <Link to="/" className=" text-2xl font-semibold underline hover:text-purple-300 transition duration-300">
                Go Back to Home
            </Link>
            <img src={memeImage} alt="Funny Meme" className="max-w-3/4 md:max-w-1/2 h-1/2 rounded-lg shadow-lg object-contain px-2 mb-4" />

        </div>
    );
};

export default NotFound;
