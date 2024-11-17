import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe } from 'lucide-react';

const Hero = () => {
  const openEnrollmentForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScMR1yPuUe2osHbY-Z395ZUB3ShxdrrPJg103iC4KSsDugNmQ/viewform', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598714805247-5dd440d87124?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Learn German with Excellence
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Your Journey to German Fluency Starts Here
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                  <GraduationCap className="mb-2 text-yellow-400" size={28} />
                  <h3 className="font-semibold">All Levels (A1-TestAs)</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                  <BookOpen className="mb-2 text-yellow-400" size={28} />
                  <h3 className="font-semibold">Native Teachers</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                  <Globe className="mb-2 text-yellow-400" size={28} />
                  <h3 className="font-semibold">Study in Germany</h3>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
                onClick={openEnrollmentForm}
              >
                Start Your Journey
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
                alt="German Language Learning"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;