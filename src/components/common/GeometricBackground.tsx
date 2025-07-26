import { motion } from 'framer-motion';

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #1E40AF 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #10B981 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #1E40AF 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Large geometric shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-secondary-500 to-success-500 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating geometric elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-full h-full bg-primary-400 rounded-full" />
          ) : i % 3 === 1 ? (
            <div className="w-full h-full bg-secondary-400 rotate-45 rounded-lg" />
          ) : (
            <div className="w-full h-full bg-success-400" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} />
          )}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Currency symbols floating */}
      {['$', '€', '£', '¥', '₿'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-4xl font-bold text-primary-200 opacity-10 select-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Subtle mesh gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(30, 64, 175, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default GeometricBackground;
