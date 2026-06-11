export default function MobileNav() {
  const items = [
    { icon: "🏠", label: "Home" },
    { icon: "📦", label: "Archive" },
    { icon: "⚔️", label: "Hunts" },
    { icon: "🏆", label: "Titles" },
    { icon: "👤", label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#171721] border-t border-purple-900 px-2 py-2 z-50">

      <div className="grid grid-cols-5 gap-1">

        {items.map((item, index) => (
          <button
            key={index}
            className="
              flex flex-col items-center
              justify-center
              rounded-2xl
              py-2
              text-slate-300
              active:bg-purple-700
              transition-all
            "
          >
            <span className="text-2xl">
              {item.icon}
            </span>

            <span className="text-xs mt-1">
              {item.label}
            </span>
          </button>
        ))}

      </div>

    </div>
  );
}

/* FLOATING ACTION BUTTON READY */
