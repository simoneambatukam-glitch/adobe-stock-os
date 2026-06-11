export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      <div className="absolute inset-0 bg-gradient-to-b from-[#07070A] via-[#0F0F17] to-[#151522]" />

      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
        <h1 className="text-8xl font-black tracking-[0.3em]">
          STOCK OS
        </h1>
      </div>

      <div className="relative z-10 space-y-6 p-6">

        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-2xl
        ">

          <div className="text-sm uppercase tracking-[0.4em] text-purple-300">
            STOCK OS
          </div>

          <h1 className="mt-4 text-4xl font-black">
            The Adobe Stock Hunter System
          </h1>

          <p className="mt-3 text-slate-300">
            Every asset is a relic.
            Every upload is a hunt.
          </p>

          <div className="mt-8">
            <div className="flex justify-between text-sm mb-2">
              <span>⚔️ E-RANK HUNTER</span>
              <span>THE BEGINNER</span>
            </div>

            <div className="h-4 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                style={{ width: "12%" }}
              />
            </div>

            <div className="mt-2 text-xs text-slate-400">
              EXP 12 / 100
            </div>
          </div>

        </div>

        <div className="
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-6
        ">
          <div className="text-purple-300 font-semibold">
            DAILY HUNT
          </div>

          <div className="mt-4 space-y-2 text-slate-200">
            <div>☐ Upload 1 Asset</div>
            <div>☐ Gain 20 EXP</div>
            <div>☐ Open Relic Archive</div>
          </div>
        </div>

      </div>

    </div>
  );
}
