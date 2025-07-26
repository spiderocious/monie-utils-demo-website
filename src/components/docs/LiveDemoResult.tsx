import React from 'react';

interface LiveDemoResultProps {
  result: unknown;
}

export const LiveDemoResult: React.FC<LiveDemoResultProps> = ({ result }) => {
  const formatResult = (value: unknown): string => {
    if (value === null || value === undefined) {
      return 'null';
    }
    
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    
    return String(value);
  };

  return (
    <div className="bg-gray-700 p-3 rounded-md">
      <div className="text-xs text-gray-400 mb-1">Live Result:</div>
      <pre className="text-green-400 text-sm overflow-x-auto">
        {formatResult(result)}
      </pre>
    </div>
  );
};
