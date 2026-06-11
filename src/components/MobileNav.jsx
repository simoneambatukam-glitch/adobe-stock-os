export default function MobileNav() {
  return (
    <>
      <button
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
