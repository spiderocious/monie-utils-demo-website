import React from 'react';
import type { InputField } from '../../types';

interface InputFieldsProps {
  functionName: string;
  inputFields?: InputField[];
  values: Record<string, number | string | number[] | object>;
  onInputChange: (functionName: string, field: string, value: number | string) => void;
}

export const InputFields: React.FC<InputFieldsProps> = ({
  functionName,
  inputFields = [],
  values,
  onInputChange,
}) => {
  if (inputFields.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      {inputFields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder={field.placeholder}
            value={
              typeof values[field.name] === 'object' 
                ? JSON.stringify(values[field.name])
                : String(values[field.name] ?? '')
            }
            onChange={(e) => {
              const value =
                field.type === 'number' 
                  ? e.target.value === '' ? '' : Number(e.target.value)
                  : e.target.value;
              onInputChange(functionName, field.name, value);
            }}
          />
        </div>
      ))}
    </div>
  );
};
