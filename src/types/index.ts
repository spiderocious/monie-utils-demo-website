// Common types for the application
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface FunctionDemo {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  examples: DemoExample[];
  parameters: Parameter[];
  returnType: string;
}

export interface DemoExample {
  title: string;
  description: string;
  code: string;
  result: string;
  interactive?: boolean;
}

export interface Parameter {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: string | number | boolean;
}

export interface FunctionCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  functions: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'function' | 'documentation' | 'example';
}

// New types for DocsPage refactor
export interface InputField {
  name: string;
  type: 'number' | 'text';
  label: string;
  placeholder: string;
}

export interface FunctionDef {
  name: string;
  description: string;
  signature: string;
  example: string;
  liveDemo: () => unknown;
  inputFields?: InputField[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  functions: FunctionDef[];
}

export type InputValues = Record<string, Record<string, number | string | number[] | object>>;

export interface CodePlaygroundState {
  code: string;
  result: string;
  error: string | null;
  isLoading: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'checkbox' | 'slider';
  placeholder?: string;
  options?: Array<{ label: string; value: string | number }>;
  min?: number;
  max?: number;
  step?: number;
  validation?: {
    required?: boolean;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  primaryColor: string;
  accentColor: string;
}

export type ErrorBoundaryFallback = React.ComponentType<{
  error: Error;
  resetErrorBoundary: () => void;
}>;
