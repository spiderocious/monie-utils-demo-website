import React from 'react';
import type { Section as SectionType, InputValues } from '../../types';
import { FunctionCard } from './FunctionCard';

interface SectionProps {
  section: SectionType;
  inputValues: InputValues;
  onInputChange: (functionName: string, field: string, value: number | string) => void;
  onCopyCode: (code: string) => void;
  copiedCode: string | null;
  getLiveResult: (functionName: string) => unknown;
}

export const Section: React.FC<SectionProps> = ({
  section,
  inputValues,
  onInputChange,
  onCopyCode,
  copiedCode,
  getLiveResult,
}) => {
  return (
    <section id={section.id} className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
        <p className="text-gray-300 text-lg">{section.description}</p>
      </div>

      <div className="space-y-8">
        {section.functions.map((functionDef) => (
          <FunctionCard
            key={functionDef.name}
            functionDef={functionDef}
            inputValues={inputValues[functionDef.name] || {}}
            onInputChange={onInputChange}
            onCopyCode={onCopyCode}
            copiedCode={copiedCode}
            liveResult={getLiveResult(functionDef.name)}
          />
        ))}
      </div>
    </section>
  );
};
