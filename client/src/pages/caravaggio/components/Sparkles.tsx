import { motion } from "framer-motion";

interface SparkleProps {
  count?: number;
  className?: string;
}

export default function Sparkles({ count = 30, className = "" }: SparkleProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Central burst effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`burst-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-white/80"
          >
            <path
              d="M6 0L6.5 4.5L11 5L6.5 5.5L6 10L5.5 5.5L1 5L5.5 4.5L6 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
