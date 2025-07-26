# Monie Utils Documentation Website

A modern, interactive documentation website for [monie-utils](https://github.com/spiderocious/monie-utils) - a comprehensive TypeScript library for money formatting, currency conversion, financial calculations, and payment processing. Built with React, TypeScript, and Tailwind CSS to showcase all 60+ utility functions with live demos and interactive examples.

## Features

- **Interactive Documentation**: Live code examples with real-time output for every function
- **Comprehensive Coverage**: Documentation for all currency formatting, validation, conversion, arithmetic operations, and financial calculation functions
- **Modern UI/UX**: Clean, responsive design with smooth animations and intuitive navigation
- **Type Safety**: Full TypeScript support with proper type definitions and interfaces
- **Performance Optimized**: Debounced inputs, efficient search, and optimized component architecture

## Quick Start

```bash
# Clone the repository
git clone https://github.com/spiderocious/monie-utils-demo-website.git

# Install dependencies
cd monie-utils-demo-website
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit [monieutils.devferanmi.xyz](https://monieutils.devferanmi.xyz) to explore the live documentation and try out the interactive demos.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
