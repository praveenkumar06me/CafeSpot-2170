import { motion } from 'framer-motion';
import ProductRecommendations from '../components/ProductRecommendations';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl mb-4">Welcome to Café Serenity</h1>
            <p className="text-xl md:text-2xl">Where every cup tells a story</p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-8 text-cafe-500">Our Story</h2>
          <p className="text-cafe-400 leading-relaxed">
            Nestled in the heart of the city, Café Serenity is more than just a coffee shop - it's a sanctuary for coffee lovers and food enthusiasts alike. Since 2015, we've been crafting exceptional coffee experiences and creating a warm, welcoming space where community thrives.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-cafe-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Artisanal Coffee', 'Fresh Pastries', 'Cozy Atmosphere'].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="font-serif text-xl mb-2 text-cafe-500">{feature}</h3>
              <p className="text-cafe-400">Experience the finest selection of carefully curated offerings.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Recommendations */}
      <ProductRecommendations />
    </div>
  );
};

export default Home;