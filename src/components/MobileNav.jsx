export default function MobileNav({
  navItems,
  activeView,
  setActiveView,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around p-2 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`flex flex-col items-center text-xs p-2 ${
              activeView === item.id
                ? "text-white"
                : "text-slate-500"
            }`}
          >
            {Icon && <Icon size={20} />}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
