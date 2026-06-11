import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-purple-600/10 to-black" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-white">
          Welcome Back,
          <span className="block text-red-500">
            Hunter.
          </span>
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Login to continue your journey.
        </p>

        <button
          className="
          w-full
          bg-white
          rounded-2xl
          py-4
          font-semibold
          mb-6
          "
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-500 mb-6">
          or continue with email
        </p>

        <input
          placeholder="Email or Username"
          className="
          w-full
          rounded-2xl
          bg-zinc-900
          text-white
          px-4
          py-4
          mb-4
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          rounded-2xl
          bg-zinc-900
          text-white
          px-4
          py-4
          "
        />

        <div className="text-right mt-3">
          <button className="text-gray-400">
            Forgot Password?
          </button>
        </div>

        <button
          className="
          w-full
          mt-8
          rounded-2xl
          py-4
          bg-gradient-to-r
          from-red-500
          to-purple-600
          text-white
          font-bold
          "
        >
          LOGIN
        </button>

      </motion.div>
    </div>
  );
}
