export default function StreakCard() {
  const streak = 1;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 space-y-3">
      <h2 className="text-xl font-bold">
        🔥 Daily Streak
      </h2>

      <div className="text-4xl font-bold">
        {streak} Hari
      </div>

      <p className="text-slate-300">
        Jangan biarkan Goblin kelaparan.
        Upload minimal 1 asset hari ini.
      </p>
    </div>
  );
}
