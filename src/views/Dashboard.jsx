import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        h-[100dvh]
        overflow-hidden
        bg-gradient-to-b
        from-[#140B1F]
        via-[#0D0D14]
        to-black
        text-white
        px-6
        pt-10
      "
    >
      <div className="max-w-md mx-auto h-full flex flex-col justify-between">

        <div>

          <div className="text-center mb-8">
            <p className="text-sm tracking-[0.3em] text-purple-300">
              ◈ STOCK OS
            </p>

            <h1 className="text-4xl font-black mt-3">
              Good Evening, Viki
            </h1>

            <p className="text-slate-400 mt-2">
              The Adobe Stock Hunter System
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              p-6
            "
          >
            <p className="text-purple-300">
              ⚔ E-RANK HUNTER
            </p>

            <h2 className="text-3xl font-bold mt-2">
              The Beginner
            </h2>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>EXP</span>
                <span>12 / 100</span>
              </div>

              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "12%" }}
                  transition={{ duration: 1 }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    to-fuchsia-500
                  "
                />
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-6
            mb-24
          "
        >
          <p className="text-purple-300">
            Today's Hunt
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Upload 1 Asset
          </h3>

          <p className="text-slate-400 mt-2">
            Reward: +20 EXP
          </p>

          <button
            className="
              mt-5
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              py-3
              font-semibold
            "
          >
            Claim Reward
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}
