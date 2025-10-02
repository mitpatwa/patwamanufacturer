import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gold orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-gold-200/20 to-gold-400/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "10%",
        }}
      />

      {/* Medium primary orb */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          bottom: "20%",
          right: "15%",
        }}
      />

      {/* Small sand orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-sand-200/20 to-sand-400/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{
          top: "50%",
          right: "5%",
        }}
      />

      {/* Extra small accent orb */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-gold-300/25 to-gold-500/10 blur-2xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        style={{
          bottom: "10%",
          left: "30%",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
