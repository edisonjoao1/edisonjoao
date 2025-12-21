import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100 + 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 10,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          initial={{ y: "100vh" }}
          animate={{
            y: "-100vh",
            x: [0, Math.sin(particle.id) * 30, 0],
          }}
          transition={{
            y: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: particle.duration / 2,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + (i * 12)}%`,
            width: 4 + (i % 3),
            height: 4 + (i % 3),
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
