import { useState } from "react";

export default function MobileNav({ navItems, activeView, setActiveView, addAsset }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
          <div className="bg-[#171721] p-6 rounded-3xl w-80 border border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-white">
              ⚔️ Acquire Relic
            </h2>

            <input
              placeholder="Asset Title"
              className="w-full p-3 rounded-xl bg-slate-800 text-white mb-3"
            />

            <select
              className="w-full p-3 rounded-xl bg-slate-800 text-white mb-4"
            >
              <option>Business</option>
              <option>Medical</option>
              <option>Education</option>
            </select>

            <div className="flex gap-2">
              <button
                onClick={async () => { await addAsset("New Asset","General"); setShowModal(false); }}
                className="flex-1 p-3 rounded-xl bg-slate-700 text-white"
              >
                Close
              </button>

              <button
                className="flex-1 p-3 rounded-xl bg-purple-600 text-white font-bold"
              >
                Summon
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowModal(true)}
        className="
        fixed bottom-20 left-1/2
        -translate-x-1/2
        w-16 h-16 rounded-full
        bg-purple-600
        text-white text-4xl
        shadow-2xl
        z-50
        "
      >
        +
      </button>

      <div
        className="
        fixed bottom-0 left-0 right-0
        bg-[#171721]
        border-t border-purple-900
        px-2 py-2
        "
      >
        <div className="grid grid-cols-5 gap-1 text-center text-slate-300">
          <button>🏠<br />Home</button>
          <button>📦<br />Archive</button>

          <div></div>

          <button>🏆<br />Titles</button>
          <button>👤<br />Profile</button>
        </div>
      </div>
    </>
  );
}
