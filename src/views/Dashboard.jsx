export default function Dashboard() {
  return (
    <div className="space-y-6">

      <div className="bg-[#171721] rounded-3xl p-6">
        <p className="text-slate-400 text-sm">
          GOOD EVENING, VIKI
        </p>

        <h1 className="text-3xl font-bold mt-2">
          ⚔️ E-RANK HUNTER
        </h1>

        <p className="text-slate-400 mt-1">
          Title: The Beginner
        </p>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>EXP</span>
            <span>0 / 100</span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-4">
            <div
              className="bg-purple-500 h-4 rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#171721] rounded-3xl p-6">
        <h2 className="text-xl font-bold">
          🔥 DAILY TRAINING
        </h2>

        <div className="text-4xl font-bold mt-4">
          Day 1
        </div>

        <p className="text-slate-400 mt-2">
          Do not skip today's hunt.
        </p>
      </div>

      <div className="bg-[#171721] rounded-3xl p-6">
        <h2 className="text-xl font-bold">
          🎯 DAILY HUNTS
        </h2>

        <div className="space-y-2 mt-4">
          <p>☐ Upload 1 Asset</p>
          <p>☐ Gain 20 EXP</p>
          <p>☐ Open Shadow Archive</p>
        </div>

        <button className="w-full mt-6 py-3 rounded-2xl bg-purple-600 font-bold">
          CLAIM REWARD
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-[#171721] rounded-2xl p-5">
          📦
          <div className="mt-2">
            Shadow Archive
          </div>
        </button>

        <button className="bg-[#171721] rounded-2xl p-5">
          🏆
          <div className="mt-2">
            Titles
          </div>
        </button>

        <button className="bg-[#171721] rounded-2xl p-5">
          💰
          <div className="mt-2">
            Gold
          </div>
        </button>

        <button className="bg-[#171721] rounded-2xl p-5">
          ⚔️
          <div className="mt-2">
            Hunts
          </div>
        </button>

      </div>

    </div>
  );
}
