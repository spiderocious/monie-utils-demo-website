import React from 'react';
import type { FunctionDef } from '../../types';
import { InputFields } from './InputFields';
import { LiveDemoResult } from './LiveDemoResult';
import { CodeExample } from './CodeExample';

interface FunctionCardProps {
  functionDef: FunctionDef;
  inputValues: Record<string, number | string | number[] | object>;
  onInputChange: (functionName: string, field: string, value: number | string) => void;
  onCopyCode: (code: string) => void;
  copiedCode: string | null;
  liveResult: unknown;
}

export const FunctionCard: React.FC<FunctionCardProps> = ({
  functionDef,
  inputValues,
  onInputChange,
  onCopyCode,
  copiedCode,
  liveResult,
}) => {
  const isCopied = copiedCode === functionDef.example;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-2">
          {functionDef.name}
        </h3>
        <p className="text-gray-300 mb-3">{functionDef.description}</p>
        <div className="bg-gray-900 p-3 rounded-md border border-gray-700">
          <code className="text-blue-400 text-sm">{functionDef.signature}</code>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-white mb-2">Example Usage</h4>
          <CodeExample
            code={functionDef.example}
            onCopy={onCopyCode}
            isCopied={isCopied}
          />
        </div>

        {functionDef.inputFields && functionDef.inputFields.length > 0 && (
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Interactive Demo</h4>
            <InputFields
              functionName={functionDef.name}
              inputFields={functionDef.inputFields}
              values={inputValues}
              onInputChange={onInputChange}
            />
            <LiveDemoResult result={liveResult} />
          </div>
        )}
      </div>
    </div>
  );
};
