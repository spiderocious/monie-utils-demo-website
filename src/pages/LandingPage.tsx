import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import FloatingCodePreview from '@/components/common/FloatingCodePreview';
import GeometricBackground from '@/components/common/GeometricBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Download, Sparkles, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const companyUsages = ['Flutterwave', 'Oxygen Finance', 'Paystack', 'Kuda Bank', 'Chipper Cash'];
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <GeometricBackground />

        <motion.div style={{ y, opacity }} className="relative z-10 container-custom pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">
                  🎉 Now with 60+ Functions
                </span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Star className="w-4 h-4 text-secondary-500" />
                </motion.div>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-heading font-black text-5xl lg:text-7xl leading-tight"
                >
                  <span className="text-gray-900">Superfast!</span> <br />
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-pulse">
                      Finance & Accounting
                    </span>
                    <br />
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-primary-600/20 to-secondary-500/20 rounded-lg blur-xl"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </span>{' '}
                  <span className="text-gray-900">Utilities</span>
                  <br />
                  <span className="text-gray-700 text-4xl lg:text-5xl">package for Javascript</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed"
                >
                  The most comprehensive, type-safe library for{' '}
                  <span className="font-semibold text-primary-600">currency formatting</span>,{' '}
                  <span className="font-semibold text-secondary-600">financial calculations</span>,
                  and <span className="font-semibold text-success-600">money operations</span>.{' '}
                  Built for modern applications.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Zap className="mr-2 w-5 h-5" />
                      Try Interactive Demo
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Link>
                </motion.div>

                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/docs"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white/80 backdrop-blur-sm border-2 border-primary-200 rounded-xl shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300"
                  >
                    <Code className="mr-2 w-5 h-5" />
                    View Documentation
                    <motion.div
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div> */}
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                {[
                  { icon: Code, count: 50, suffix: '+', label: 'Functions' },
                  { icon: Download, count: 100, suffix: '+', label: 'Downloads' },
                  { icon: Users, count: 50, suffix: '+', label: 'Developers' },
                ].map(({ icon: Icon, count, suffix, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-center"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-2"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary-600" />
                    </motion.div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter end={count} suffix={suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <FloatingCodePreview />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-6 py-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="font-semibold text-primary-700">Powerful Features</span>
            </motion.div>

            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6">
              Everything You Need
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Out of the Box
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools for handling money in your applications. From simple formatting to
              complex financial calculations - we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative card-hover p-8 h-full">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </motion.div>

                  <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  <Link
                    to={feature.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section
        className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        id="get-started"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #1E40AF 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #F59E0B 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #10B981 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #1E40AF 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">
              Get Started in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">
                Seconds
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Install monie-utils and start building financial applications with confidence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-2xl text-white mb-8">Installation</h3>
              <div className="space-y-4">
                {['npm install monie-utils', 'yarn add monie-utils', 'pnpm add monie-utils'].map(
                  (command, index) => (
                    <motion.div
                      key={command}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto group-hover:border-primary-500/50 transition-colors duration-300">
                        <code className="text-green-400 text-sm font-mono">{command}</code>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-2xl text-white mb-8">Basic Usage</h3>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6 overflow-x-auto group-hover:border-primary-500/50 transition-colors duration-300">
                  <pre className="text-sm">
                    <code className="text-gray-300">
                      {`import { formatCurrency, convertCurrency } from 'monie-utils';

// Format currency
const formatted = formatCurrency(1234.56, 'USD');
// { formatted: '$1,234.56', currency: 'USD' }

// Convert currency  
const converted = convertCurrency(100, 'USD', 'EUR', 0.85);
// { amount: 85, fromCurrency: 'USD', toCurrency: 'EUR' }`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        <GeometricBackground />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative container-custom text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 text-secondary-500" />
            <span className="font-semibold text-primary-700">Ready to Build?</span>
          </motion.div>

          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6">
            Join Thousands of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Developers
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Build better financial applications with Monie Utils. Trusted by developers worldwide
            for production applications.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/demo"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary-500/25"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-3 w-6 h-6" />
                  Explore All Functions
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://github.com/spiderocious/monie-utils"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary-700 bg-white/80 backdrop-blur-sm border-2 border-primary-200 rounded-2xl shadow-2xl hover:shadow-xl hover:border-primary-300 transition-all duration-300"
              >
                <Star className="mr-3 w-6 h-6" />
                View on GitHub
                <motion.div
                  className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-500 mb-8">Trusted by developers at</p>
            <div className="flex items-center justify-center space-x-12 opacity-40">
              {companyUsages.map((company) => (
                <div key={company} className="text-gray-400 font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

// Features data
const features = [
  {
    title: 'Currency Formatting',
    description:
      'Format currencies with locale-specific rules, symbols, and cultural conventions for global applications.',
    icon: Code,
    href: '/demo/currency-formatting',
  },
  {
    title: 'Financial Calculations',
    description:
      'Calculate interest, loans, investments, and returns with precision and reliability.',
    icon: Users,
    href: '/demo/financial-calculations',
  },
  {
    title: 'Validation & Parsing',
    description:
      'Validate amounts and parse currency strings safely with comprehensive error handling.',
    icon: Star,
    href: '/demo/validation',
  },
  {
    title: 'Multi-Currency Support',
    description: 'Convert between fiat and cryptocurrencies with real-time exchange rates.',
    icon: Download,
    href: '/demo/currency-conversion',
  },
  {
    title: 'Type Safety',
    description:
      'Built with TypeScript for excellent developer experience and compile-time safety.',
    icon: Zap,
    href: '/docs/typescript',
  },
  {
    title: 'Zero Dependencies',
    description:
      'Lightweight and tree-shakeable with no external dependencies. Perfect for performance.',
    icon: Sparkles,
    href: '/docs/performance',
  },
];

export default LandingPage;
