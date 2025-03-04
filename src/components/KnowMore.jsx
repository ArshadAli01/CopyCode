import React from 'react';
import { motion } from 'framer-motion';
import FadeInAnimation from './FadeInAnimation';

function KnowMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 gradient-text text-center">
            Our Story
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-primary">
              About CopyCode
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              CopyCode was born from a simple idea: making web development more efficient and accessible. 
              We understand that developers often find themselves recreating common UI components from scratch, 
              which can be time-consuming and repetitive.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our mission is to provide developers with a comprehensive library of ready-to-use, 
              customizable UI components. We believe in the power of open-source collaboration 
              and aim to create a platform where developers can not only use but also contribute 
              to a growing collection of high-quality UI components.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  For Developers
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to production-ready components</li>
                  <li>• Time-saving copy-paste functionality</li>
                  <li>• Modern, responsive designs</li>
                  <li>• Regular updates and new additions</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  Our Values
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Open-source collaboration</li>
                  <li>• Quality code standards</li>
                  <li>• Community-driven development</li>
                  <li>• Continuous improvement</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Want to contribute to our project?
            </p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Join Us on GitHub
            </motion.a>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
}

export default KnowMore;