import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";

const data = [
  { value: 0 },
  { value: 5 },
  { value: 12 },
  { value: 18 },
  { value: 35 },
  { value: 52 },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        h-[100dvh]
        overflow-hidden
        bg-gradient-to-br
        from-[#2B0B16]
        via-[#140B1F]
        to-black
        text-white
        px-5
        pt-8
      "
    >
      <div className="max-w-md mx-auto h-full flex flex-col">

        <div className="mb-5">
          <p className="text-xs tracking-[0.35em] text-red-300">
            ◈ STOCK OS
          </p>

          <h1 className="text-3xl font-black mt-2">
            Good Evening, Viki
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            The Adobe Stock Hunter System
          </p>
        </div>

        <div className="
          rounded-[28px]
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          p-5
        ">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-300 text-sm">
                ⚔ E-RANK HUNTER
              </p>

              <h2 className="text-2xl font-bold mt-1">
                The Beginner
              </h2>
            </div>

            <div className="text-4xl">
              ◈
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-sm mb-2">
              <span>EXP</span>
              <span>12 / 100</span>
            </div>

            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "12%" }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-red-500 to-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            ["📦", "12", "Assets"],
            ["💰", "80", "Gold"],
            ["🏆", "2", "Titles"],
            ["📈", "75%", "Rate"],
          ].map(([icon, value, label]) => (
            <div
              key={label}
              className="
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                p-4
              "
            >
              <div className="text-xl">{icon}</div>

              <div className="text-2xl font-bold mt-2">
                {value}
              </div>

              <div className="text-slate-400 text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="
          mt-4
          rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          p-4
          flex-1
        ">
          <div className="font-semibold mb-3">
            Hunter Lifetime
          </div>

          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#A855F7"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>

          <button
            className="
              mt-4
              w-full
              rounded-2xl
              py-3
              bg-gradient-to-r
              from-red-500
              to-purple-600
              font-semibold
            "
          >
            Today's Hunt
          </button>
        </div>

      </div>
    </motion.div>
  );
}
