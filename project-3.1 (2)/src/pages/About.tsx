import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">About EduAI</h1>
      <div className="prose prose-lg mx-auto">
        <p className="mb-6">
          EduAI is an innovative platform that uses artificial intelligence to analyze and enhance educational content.
          Our goal is to help educators create more effective and engaging learning materials.
        </p>
        <p className="mb-6">
          Whether you're a teacher, content creator, or educational institution, EduAI provides valuable insights
          and suggestions to improve your educational materials.
        </p>
        <p>
          Try our demo to experience how EduAI can transform your content and enhance the learning experience
          for your students.
        </p>
      </div>
    </div>
  );
}; 