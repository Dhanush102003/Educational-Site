import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, Clock, CreditCard, GraduationCap } from 'lucide-react';

interface Course {
  id: number;
  level: string;
  icon: React.ReactNode;
  description: string;
  duration: string;
  cost: string;
  rating: number;
  features: string[];
}

const Skills = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      level: 'A1 - Beginner',
      icon: <BookOpen size={40} />,
      description: 'Start your German journey with basic communication skills.',
      duration: '2 months',
      cost: '₹10,000',
      rating: 5.0,
      features: ['Basic Grammar', 'Essential Vocabulary', 'Simple Conversations', 'Cultural Introduction']
    },
    {
      id: 2,
      level: 'A2 - Elementary',
      icon: <BookOpen size={40} />,
      description: 'Build upon basics and enhance your daily communication.',
      duration: '2 months',
      cost: '₹15,000',
      rating: 4.9,
      features: ['Advanced Grammar', 'Extended Vocabulary', 'Daily Conversations', 'Writing Skills']
    },
    {
      id: 3,
      level: 'B1 - Intermediate',
      icon: <BookOpen size={40} />,
      description: 'Achieve fluency in most everyday situations.',
      duration: '2 months',
      cost: '₹20,000',
      rating: 4.9,
      features: ['Complex Grammar', 'Professional Vocabulary', 'Fluent Conversations', 'Academic Writing']
    },
    {
      id: 4,
      level: 'TestAs Preparation',
      icon: <GraduationCap size={40} />,
      description: 'Prepare for the Test Deutsch als Fremdsprache.',
      duration: '3 months',
      cost: '₹40,000',
      rating: 5.0,
      features: ['Exam Strategies', 'Practice Tests', 'Speaking Training', 'Writing Workshop']
    }
  ];

  const openEnrollmentForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScMR1yPuUe2osHbY-Z395ZUB3ShxdrrPJg103iC4KSsDugNmQ/viewform', '_blank');
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Language Courses</h2>
          <p className="text-lg text-gray-600">Choose your path to German fluency</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedCourse(selectedCourse?.id === course.id ? null : course)}
                className="w-full h-full bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer
                  transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4 text-indigo-600">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.level}</h3>
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="text-indigo-600 mr-4">{selectedCourse.icon}</div>
                  <h3 className="text-2xl font-bold">{selectedCourse.level}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="text-gray-400 mr-2" size={20} />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="text-gray-400 mr-2" size={20} />
                    <span>{selectedCourse.cost}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {selectedCourse.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="text-indigo-600 mr-3" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openEnrollmentForm}
                className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;