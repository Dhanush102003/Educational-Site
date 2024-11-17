import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-indigo-400" />
                <a href="mailto:gowthamthiru881999@gmail.com" className="hover:text-indigo-400 transition-colors">
                  gowthamthiru881999@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-indigo-400" />
                <a href="tel:+917708733736" className="hover:text-indigo-400 transition-colors">
                  +91 7708733736
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-3 text-indigo-400" />
               <a href='https://maps.app.goo.gl/Cv1L8qj49ranykKE8'> <span>Coimbatore, Tamil Nadu, India</span></a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-indigo-400 transition-colors">Courses</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

   
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Great German Schule. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;