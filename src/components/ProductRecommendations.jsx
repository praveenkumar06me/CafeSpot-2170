import { motion } from 'framer-motion';
import { FaCoffee, FaCookie } from 'react-icons/fa';

const recommendations = [
  {
    id: 1,
    title: "Perfect Pairings",
    items: [
      {
        name: "Espresso & Croissant",
        price: "$7.00",
        description: "Our signature espresso paired with a buttery croissant",
        icon: <FaCoffee className="w-6 h-6" />,
        savings: "Save $1.25"
      },
      {
        name: "Latte & Muffin",
        price: "$7.50",
        description: "Smooth latte with a freshly baked muffin",
        icon: <FaCookie className="w-6 h-6" />,
        savings: "Save $0.75"
      }
    ]
  },
  {
    id: 2,
    title: "Customer Favorites",
    items: [
      {
        name: "Cappuccino Supreme",
        price: "$4.50",
        description: "Our most ordered coffee drink",
        icon: <FaCoffee className="w-6 h-6" />,
        badge: "Bestseller"
      },
      {
        name: "Danish Delight",
        price: "$4.00",
        description: "Highly rated fruit-filled pastry",
        icon: <FaCookie className="w-6 h-6" />,
        badge: "Popular"
      }
    ]
  }
];

const ProductRecommendations = () => {
  return (
    <section className="py-12 bg-cafe-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-cafe-500 text-center mb-8">
          Recommended For You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-serif text-cafe-400 mb-6">
                {section.title}
              </h3>
              
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-4 p-4 bg-cafe-100 rounded-lg"
                  >
                    <div className="text-cafe-400">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-cafe-500">
                          {item.name}
                        </h4>
                        <span className="text-cafe-400 font-medium">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                      
                      {item.savings && (
                        <span className="inline-block mt-2 text-sm text-green-600 font-medium">
                          {item.savings}
                        </span>
                      )}
                      
                      {item.badge && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-cafe-400 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;