import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, Users, CheckCircle2, Globe, Building } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Great German Schule</h1>
            <p className="text-xl max-w-2xl mx-auto">Empowering Students with German Language Excellence Since 2020</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2020, Great German Schule has been at the forefront of German language education in Coimbatore. 
              Our institute specializes in comprehensive German language training and study abroad consulting services, 
              helping students achieve their dreams of studying and working in Germany.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a team of experienced native speakers and education consultants, we provide personalized guidance 
              and support throughout your journey to mastering the German language and pursuing higher education in Germany.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Students learning German"
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="text-indigo-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-2xl mb-2">200+</h3>
            <p className="text-gray-600">Students Trained</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <GraduationCap className="text-indigo-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-2xl mb-2">100+</h3>
            <p className="text-gray-600">University Placements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="text-indigo-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-2xl mb-2">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <BookOpen className="text-indigo-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-2xl mb-2">A1-TestAs</h3>
            <p className="text-gray-600">All Levels</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Native Speakers</h3>
              <p className="text-gray-600">Learn from experienced native German speakers who understand the nuances of the language.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art classrooms equipped with modern learning tools and technology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Comprehensive Support</h3>
              <p className="text-gray-600">Complete guidance from language learning to university admissions and visa processing.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {[
                'Licensed Language School by German Education Ministry',
                'Certified TestDaF Examination Center',
                'ISO 9001:2015 Certified Institution',
                'Member of German Language School Association'
              ].map((cert, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-3" size={20} />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;