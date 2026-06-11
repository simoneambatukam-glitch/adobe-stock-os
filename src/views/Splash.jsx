import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Splash({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete?.();
          }, 300);

          return 100;
        }

        return prev + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex flex-col items-center justify-center px-6">

      {/* Aurora */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-red-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[140px]"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:14px_14px]" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        className="relative flex flex-col items-center"
      >

        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(168,85,247,.2)",
              "0 0 50px rgba(168,85,247,.45)",
              "0 0 20px rgba(168,85,247,.2)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="
          w-24 h-24
          rounded-full
          border border-white/10
          flex items-center justify-center
          mb-6
          "
        >
          <span className="text-5xl text-white">
            ◈
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="text-5xl font-black text-white"
        >
          STOCK OS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-2 text-xs tracking-[0.4em] uppercase text-gray-500"
        >
          Hunter Operating System
        </motion.p>

      </motion.div>

      {/* Progress */}
      <div className="absolute bottom-24 w-[85%] max-w-sm">

        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>Preparing your system...</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-white/10 overflow-hidden">

          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-purple-500"
            animate={{
              width: `${progress}%`
            }}
            transition={{
              ease: "easeOut"
            }}
          />

        </div>

      </div>

    </div>
  );
}
