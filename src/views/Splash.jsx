import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center justify-center">

      {/* Aurora Red */}
      <motion.div
        animate={{ x:[0,20,0], y:[0,-20,0] }}
        transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-red-500/20 blur-[150px]"
      />

      {/* Aurora Purple */}
      <motion.div
        animate={{ x:[0,-20,0], y:[0,20,0] }}
        transition={{ duration:20, repeat:Infinity, ease:"easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[150px]"
      />

      {/* Hunter */}
      <motion.img
        src="/hunter.png"
        alt="Hunter"
        animate={{ y:[0,-8,0] }}
        transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
        className="absolute right-[-8%] bottom-0 h-[82vh] opacity-90 pointer-events-none"
      />

      {/* Center */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.div
          animate={{ scale:[1,1.05,1] }}
          transition={{ duration:3, repeat:Infinity }}
          className="relative"
        >

          <div className="w-32 h-32 rounded-full border border-purple-400/40 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,.4)]">

            <div className="w-24 h-24 rounded-full border border-red-400/40 flex items-center justify-center">

              <span className="text-5xl text-white">
                ◈
              </span>

            </div>

          </div>

        </motion.div>

        <h1 className="mt-10 text-5xl font-black text-white">
          STOCK OS
        </h1>

        <p className="mt-3 text-xs tracking-[0.35em] uppercase text-gray-400">
          Hunter Operating System
        </p>

      </div>

    </div>
  );
}
