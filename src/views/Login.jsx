import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center justify-center px-6">

      {/* Glow Background */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="absolute top-20 text-center"
      >
        <div className="text-4xl text-white">◈</div>

        <h1 className="text-2xl font-bold text-white mt-2">
          STOCK OS
        </h1>

        <p className="text-xs tracking-[0.3em] text-gray-500 mt-1">
          HUNTER OPERATING SYSTEM
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: .95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .7 }}
        className="
        relative
        w-full
        max-w-md
        rounded-[32px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        p-8
        "
      >

        <h2 className="text-4xl font-bold text-white">
          Welcome Back,
        </h2>

        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
          Hunter.
        </h2>

        <p className="text-gray-400 mt-3 mb-8">
          Continue your journey.
        </p>

        {/* Google */}
        <motion.button
          whileTap={{ scale: .98 }}
          className="
          w-full
          rounded-2xl
          bg-white
          py-4
          font-semibold
          text-black
          shadow-lg
          "
        >
          Continue with Google
        </motion.button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">
            OR
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <input
          placeholder="Email"
          className="
          w-full
          rounded-2xl
          bg-white/5
          border border-white/10
          px-5
          py-4
          text-white
          mb-4
          outline-none
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          rounded-2xl
          bg-white/5
          border border-white/10
          px-5
          py-4
          text-white
          outline-none
          "
        />

        <div className="text-right mt-3">
          <button className="text-sm text-gray-400">
            Forgot Password?
          </button>
        </div>

        <motion.button
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          mt-8
          w-full
          rounded-2xl
          py-4
          font-bold
          text-white
          bg-gradient-to-r
          from-red-500
          to-purple-600
          shadow-xl
          "
        >
          LOGIN
        </motion.button>

      </motion.div>

      <div className="absolute bottom-8 text-center text-gray-600 text-xs">
        Built for Adobe Stock Hunters • V13.2
      </div>

    </div>
  );
}
