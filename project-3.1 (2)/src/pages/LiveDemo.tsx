import React, { useState } from 'react';

export const LiveDemo: React.FC = () => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to analyze the content
    setResult('Analysis will appear here...');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Try EduAI</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your educational content
          </label>
          <textarea
            id="content"
            rows={6}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your text, URL, or upload content here..."
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Analyze Content
          </button>
        </div>

        {result && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="prose max-w-none">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 