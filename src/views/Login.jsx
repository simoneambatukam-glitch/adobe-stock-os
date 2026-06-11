import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center justify-center px-5">

      {/* Background Glow */}
      <motion.div
        animate={{ x:[0,40,0], y:[0,-30,0] }}
        transition={{ duration:10, repeat:Infinity }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ x:[0,-40,0], y:[0,30,0] }}
        transition={{ duration:12, repeat:Infinity }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:14px_14px]" />

      {/* Logo */}
      <motion.div
        initial={{ opacity:0, y:-20 }}
        animate={{ opacity:1, y:[0,-6,0] }}
        transition={{ duration:4, repeat:Infinity }}
        className="absolute top-12 text-center"
      >
        <div className="text-5xl text-white">◈</div>

        <h1 className="text-4xl font-extrabold text-white mt-3">
          STOCK OS
        </h1>

        <p className="text-[11px] tracking-[0.4em] text-gray-500 mt-2 uppercase">
          Hunter Operating System
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity:0, y:40, scale:.95 }}
        animate={{
          opacity:1,
          y:0,
          scale:[1,1.01,1]
        }}
        transition={{
          opacity:{duration:.7},
          y:{duration:.7},
          scale:{
            duration:5,
            repeat:Infinity
          }
        }}
        className="
        relative
        w-[92%]
        max-w-[420px]
        mt-28
        rounded-[36px]
        border border-white/15
        bg-white/[0.08]
        backdrop-blur-2xl
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
          whileTap={{ scale:.98 }}
          whileHover={{ scale:1.02 }}
          className="
          w-full
          flex
          items-center
          justify-between
          rounded-2xl
          bg-white
          py-4
          px-5
          font-semibold
          text-black
          shadow-lg
          "
        >
          <span>🔍 Continue with Google</span>
          <span>→</span>
        </motion.button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">OR</span>
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
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/20
          transition-all
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
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/20
          transition-all
          "
        />

        <div className="text-right mt-3">
          <button className="text-sm text-gray-400">
            Forgot Password?
          </button>
        </div>

        <motion.button
          animate={{
            scale:[1,1.03,1],
            boxShadow:[
              "0 0 0 rgba(0,0,0,0)",
              "0 0 40px rgba(168,85,247,.35)",
              "0 0 0 rgba(0,0,0,0)"
            ]
          }}
          transition={{
            duration:2,
            repeat:Infinity
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
          "
        >
          ENTER STOCK OS
        </motion.button>

      </motion.div>

      <div className="absolute bottom-6 text-center text-gray-600 text-xs">
        Built for Adobe Stock Hunters • V13.4
      </div>

    </div>
  );
}
