export default function Sidebar({
  navItems,
  activeView,
  setActiveView,
}) {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800 p-4">
      <h2 className="text-2xl font-bold mb-6">
        Stock OS
      </h2>

      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeView === item.id
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              {Icon && <Icon size={20} />}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
