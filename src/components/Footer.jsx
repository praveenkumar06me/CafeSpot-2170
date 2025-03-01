import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cafe-400 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-serif text-xl">Café Serenity</h3>
            <p className="mt-2">Your daily dose of comfort and joy</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cafe-100"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-cafe-100"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-cafe-100"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Café Serenity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;