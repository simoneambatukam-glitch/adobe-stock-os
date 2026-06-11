import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08080B]">

      {/* Aurora */}
      <motion.div
        animate={{
          x:[0,30,0],
          y:[0,-20,0],
        }}
        transition={{
          duration:18,
          repeat:Infinity,
        }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-red-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x:[0,-30,0],
          y:[0,20,0],
        }}
        transition={{
          duration:22,
          repeat:Infinity,
        }}
        className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[130px]"
      />

      {/* Main */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

        {/* Hunter */}
        <motion.img
          src="/hunter.png"
          alt="Hunter"
          animate={{
            y:[0,-10,0],
          }}
          transition={{
            duration:5,
            repeat:Infinity,
          }}
          className="absolute top-10 right-[-18%] h-[55vh] opacity-95 pointer-events-none"
        />

        {/* Portal */}
        <motion.div
          animate={{
            scale:[1,1.04,1],
          }}
          transition={{
            duration:3,
            repeat:Infinity,
          }}
          className="relative"
        >

          <div className="w-28 h-28 rounded-full border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,.45)] flex items-center justify-center">

            <div className="w-20 h-20 rounded-full border border-red-500/50 flex items-center justify-center">

              <span className="text-4xl text-white">
                ◈
              </span>

            </div>

          </div>

        </motion.div>

        {/* Branding */}
        <h1 className="mt-8 text-5xl font-black tracking-wide text-white">
          STOCK OS
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">
          Hunter Operating System
        </p>

        {/* Glass Progress */}
        <div className="mt-10 w-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-5 shadow-[0_0_35px_rgba(0,0,0,.35)]">

          <div className="flex items-center justify-between text-sm text-gray-300">

            <span>
              Preparing your system...
            </span>

            <span>
              87%
            </span>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{
                width:"0%",
              }}
              animate={{
                width:"87%",
              }}
              transition={{
                duration:2,
              }}
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
            />

          </div>

        </div>

      </div>

    </div>
  );
}
