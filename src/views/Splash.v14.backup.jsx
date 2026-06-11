import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Splash({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFadeOut(true);

            setTimeout(() => {
              onComplete?.();
            }, 400);
          }, 150);

          return 100;
        }

        return prev + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>

      {!fadeOut && (

        <motion.div
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative min-h-screen overflow-hidden bg-[#09090B] flex flex-col items-center justify-center px-6"
        >

          {/* Aurora */}
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-red-500/20 blur-[160px]"
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[160px]"
          />

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:18px_18px]" />

          {/* Logo */}
          <div className="relative flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: .6 }}
              className="relative mb-6"
            >

              {/* Outer Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [.3, .1, .3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full border border-purple-400/30"
              />

              {/* Inner Ring */}
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
                  repeat: Infinity,
                }}
                className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center"
              >
                <span className="text-5xl text-white">
                  ◈
                </span>
              </motion.div>

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .25 }}
              className="text-5xl font-black text-white"
            >
              STOCK OS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-2 text-xs tracking-[0.4em] uppercase text-gray-500"
            >
              Hunter Operating System
            </motion.p>

          </div>

          {/* Progress */}
          <div className="absolute bottom-24 w-[85%] max-w-sm">

            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Preparing your system...</span>
              <span>{progress}%</span>
            </div>

            <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-purple-500"
                animate={{
                  width: `${progress}%`
                }}
              />

              {/* Shimmer */}
              <motion.div
                animate={{
                  x: ["-100%", "300%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-y-0 w-12 bg-white/20 blur-sm"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
