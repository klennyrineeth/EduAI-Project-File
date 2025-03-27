import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Transform Your Learning with{' '}
          <span className="text-purple-600">EduAI</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Harness the power of AI to enhance your educational content. Get instant insights,
          analysis, and recommendations for any type of learning material.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/live-demo"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Demo
          </Link>
          <Link
            to="/how-it-works"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content Analysis
          </h3>
          <p className="text-gray-600">
            Get detailed insights into your educational content with our advanced AI analysis.
            Understand key concepts, difficulty levels, and learning objectives.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Multi-Format Support
          </h3>
          <p className="text-gray-600">
            Analyze text, images, and videos. Our AI can process various content formats
            to provide comprehensive educational insights.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Instant Feedback
          </h3>
          <p className="text-gray-600">
            Receive immediate feedback and suggestions to improve your educational content.
            Make data-driven decisions to enhance learning outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}; 