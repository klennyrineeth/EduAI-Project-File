import React from 'react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Input Your Content',
      description: 'Upload or paste your educational content - text, images, or videos.',
      icon: '📝'
    },
    {
      title: 'AI Analysis',
      description: 'Our advanced AI analyzes your content across multiple dimensions.',
      icon: '🤖'
    },
    {
      title: 'Get Insights',
      description: 'Receive detailed insights and recommendations for improvement.',
      icon: '💡'
    },
    {
      title: 'Enhance Content',
      description: 'Apply the suggestions to make your content more effective.',
      icon: '✨'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How EduAI Works
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your educational content in four simple steps
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step content */}
                <div className="flex-1 p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Step number */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg relative z-10">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to Try EduAI?
        </h2>
        <p className="text-lg text-gray-600">
          Experience the power of AI-driven content analysis
        </p>
        <Link
          to="/live-demo"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Demo Now
        </Link>
      </div>
    </div>
  );
};
