import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { formatCurrency, convertCurrency, calculateTip } from '@/utils/fallback';

const FloatingCodePreview = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [output, setOutput] = useState<string>('');

  const examples = useMemo(() => [
    {
      title: 'Currency Formatting',
      code: `import { formatCurrency } from 'monie-utils';

const result = formatCurrency(1234.56, 'USD');
console.log(result.formatted);`,
      execute: () => {
        const result = formatCurrency(1234.56, 'USD');
        return result.formatted;
      }
    },
    {
      title: 'Currency Conversion',
      code: `import { convertCurrency } from 'monie-utils';

const converted = convertCurrency(100, 'USD', 'EUR', 0.85);
console.log(\`\${converted.amount} EUR\`);`,
      execute: () => {
        const result = convertCurrency(100, 'USD', 'EUR', 0.85);
        return `${result.amount} EUR`;
      }
    },
    {
      title: 'Tip Calculator',
      code: `import { calculateTip } from 'monie-utils';

const tip = calculateTip(85.50, 20);
console.log(\`Tip: $\${tip}\`);`,
      execute: () => {
        const tip = calculateTip(85.50, 20);
        return `Tip: $${tip}`;
      }
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [examples.length]);

  useEffect(() => {
    try {
      const result = examples[activeExample].execute();
      setOutput(result);
    } catch {
      setOutput('Error executing code');
    }
  }, [activeExample, examples]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative max-w-lg mx-auto lg:mx-0"
    >
      {/* Floating glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 via-secondary-500/20 to-primary-600/20 rounded-2xl blur-xl animate-pulse" />
      
      {/* Main container */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <span className="text-gray-400 text-sm font-mono ml-3">
              {examples[activeExample].title}
            </span>
          </div>
          <div className="flex space-x-1">
            {examples.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveExample(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeExample ? 'bg-primary-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Code content */}
        <div className="relative overflow-hidden">
          <motion.div
            key={activeExample}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <SyntaxHighlighter
              language="typescript"
              style={oneDark}
              customStyle={{
                margin: 0,
                padding: 0,
                background: 'transparent',
                fontSize: '13px',
                lineHeight: '1.4'
              }}
              wrapLongLines
            >
              {examples[activeExample].code}
            </SyntaxHighlighter>
          </motion.div>

          {/* Output section */}
          <div className="border-t border-gray-700 bg-gray-800/50 px-4 py-3">
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-sm">→</span>
              <motion.span
                key={output}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-green-300 font-mono text-sm"
              >
                {output}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Running indicator */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default FloatingCodePreview;
