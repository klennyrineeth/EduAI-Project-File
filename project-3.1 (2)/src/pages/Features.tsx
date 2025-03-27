import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Advanced Content Analysis',
      description: 'Our AI analyzes educational content across multiple dimensions, including complexity, clarity, and engagement levels.',
      icon: '📊'
    },
    {
      title: 'Multi-Format Support',
      description: 'Process text, images, and videos seamlessly. Get comprehensive insights regardless of the content format.',
      icon: '🎯'
    },
    {
      title: 'Real-time Feedback',
      description: 'Receive instant feedback and suggestions to improve your educational materials and enhance learning outcomes.',
      icon: '⚡'
    },
    {
      title: 'Learning Objectives Analysis',
      description: 'Automatically identify and evaluate learning objectives in your content to ensure alignment with educational goals.',
      icon: '🎓'
    },
    {
      title: 'Accessibility Check',
      description: 'Get recommendations for making your content more accessible to all learners, including those with disabilities.',
      icon: '♿'
    },
    {
      title: 'Content Enhancement',
      description: 'Receive suggestions for improving content clarity, engagement, and effectiveness based on AI analysis.',
      icon: '✨'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features for Educational Content
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how EduAI can transform your educational content with our comprehensive suite of features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600 mb-6">
          Ready to experience these features in action?
        </p>
        <a
          href="/live-demo"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Demo Now
        </a>
      </div>
    </div>
  );
}; 