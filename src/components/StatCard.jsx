export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-slate-800",
}) {
  return (
    <div className="bg-slate-700/50 p-5 rounded-2xl border border-slate-800">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${color}`}>
          {Icon && <Icon size={20} />}
        </div>

        <h3 className="text-slate-400 text-sm">
          {title}
        </h3>
      </div>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}
