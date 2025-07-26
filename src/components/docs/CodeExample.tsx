import React from 'react';

interface CodeExampleProps {
  code: string;
  onCopy?: (code: string) => void;
  isCopied?: boolean;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ 
  code, 
  onCopy,
  isCopied = false 
}) => {
  return (
    <div className="relative">
      <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm border border-gray-700">
        <code className="text-gray-300">{code}</code>
      </pre>
      {onCopy && (
        <button
          onClick={() => onCopy(code)}
          className="absolute top-2 right-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-300 transition-colors"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      )}
    </div>
  );
};
