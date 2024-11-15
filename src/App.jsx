import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className='bg-[#F6F6F6] font-sora'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category/:name" element={<ProductDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer />
            </div>
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
