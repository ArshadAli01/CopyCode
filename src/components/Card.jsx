import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Card({ imageSrc, headerText, codeSnippet }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={headerText}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
          <h3 className="text-white text-xl font-bold">{headerText}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="max-h-[150px] overflow-y-auto p-4">
            <pre className="text-sm text-gray-700">
              <code>{codeSnippet}</code>
            </pre>
          </div>
          <div className="border-t border-gray-200 p-3 bg-white">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyToClipboard}
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;