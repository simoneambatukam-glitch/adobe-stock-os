import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center justify-center">

      {/* Aurora */}
      <motion.div
        animate={{ x:[0,30,0], y:[0,-30,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[160px]"
      />

      <motion.div
        animate={{ x:[0,-30,0], y:[0,30,0] }}
        transition={{ duration:22, repeat:Infinity }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[160px]"
      />

      {/* Hunter */}
      <motion.img
        src="/hunter.png"
        alt="Hunter"
        animate={{ y:[0,-10,0] }}
        transition={{ duration:5, repeat:Infinity }}
        className="absolute right-[-25%] bottom-0 h-[80vh] opacity-90 pointer-events-none"
      />

      {/* Center */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Neon Portal */}
        <motion.div
          animate={{ scale:[1,1.06,1] }}
          transition={{ duration:3, repeat:Infinity }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-full border border-purple-400/40 shadow-[0_0_50px_rgba(168,85,247,.4)] flex items-center justify-center">

            <div className="w-24 h-24 rounded-full border border-red-400/40 flex items-center justify-center">

              <span className="text-5xl text-white">
                ◈
              </span>

            </div>

          </div>
        </motion.div>

        <h1 className="mt-8 text-5xl font-black text-white">
          STOCK OS
        </h1>

        <p className="mt-3 text-xs tracking-[0.35em] uppercase text-gray-400">
          Hunter Operating System
        </p>

        {/* Glass Progress */}
        <div className="mt-8 w-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">

          <div className="flex justify-between text-sm text-gray-300">
            <span>Preparing your system...</span>
            <span>87%</span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width:"0%" }}
              animate={{ width:"87%" }}
              transition={{ duration:2 }}
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
            />

          </div>

        </div>

      </div>

    </div>
  );
}
