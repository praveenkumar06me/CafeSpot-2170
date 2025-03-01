import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCoffee className="h-8 w-8 text-cafe-400" />
              <span className="ml-2 text-xl font-serif font-bold text-cafe-500">Café Serenity</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-cafe-400 hover:text-cafe-500">Home</Link>
            <Link to="/menu" className="text-cafe-400 hover:text-cafe-500">Menu</Link>
            <Link to="/contact" className="text-cafe-400 hover:text-cafe-500">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;