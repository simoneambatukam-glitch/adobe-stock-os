import {
  Database,
  CheckCircle,
  Clock,
  XCircle,
  Target,
  Award,
  Sparkles,
  Crown,
} from "lucide-react";

import StatCard from "../components/StatCard";
import StreakCard from "../components/StreakCard";

export default function Dashboard({ assets }) {
  const approved = assets.filter(
    (a) => a.status === "Approved"
  ).length;

  const inReview = assets.filter(
    (a) => a.status === "In Review"
  ).length;

  const rejected = assets.filter(
    (a) => a.status === "Rejected"
  ).length;

  const reviewed = approved + rejected;

  const approvalRate =
    reviewed > 0
      ? Math.round((approved / reviewed) * 100)
      : 0;

  const weeklyTarget = 100;

  const weeklyProgress = Math.min(
    (assets.length / weeklyTarget) * 100,
    100
  );

  // ===== MONSTER EVOLUTION =====

  const totalAssets = assets.length;

  let monster = "👶 Rookie Goblin";
  let nextGoal = 10;

  if (totalAssets >= 1000) {
    monster = "👑 Emperor of Stock";
    nextGoal = 1000;
  } else if (totalAssets >= 500) {
    monster = "🔥 Approval Demon";
    nextGoal = 1000;
  } else if (totalAssets >= 100) {
    monster = "👹 Stock Monster";
    nextGoal = 500;
  } else if (totalAssets >= 50) {
    monster = "🦾 Factory Beast";
    nextGoal = 100;
  } else if (totalAssets >= 10) {
    monster = "😈 SVG Hunter";
    nextGoal = 50;
  }

  // ===== XP SYSTEM =====

  const xp =
    totalAssets * 10 +
    approved * 25 +
    rejected * 5;

  const level =
    Math.floor(xp / 100) + 1;

  const currentLevelXP =
    xp % 100;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        🎮 Adobe Stock Tycoon
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <StatCard
          title="Total Assets"
          value={totalAssets}
          icon={Database}
          color="text-blue-500"
        />

        <StatCard
          title="Approved"
          value={approved}
          icon={CheckCircle}
          color="text-green-500"
        />

        <StatCard
          title="In Review"
          value={inReview}
          icon={Clock}
          color="text-yellow-500"
        />

        <StatCard
          title="Rejected"
          value={rejected}
          icon={XCircle}
          color="text-red-500"
        />

        <StatCard
          title="Approval Rate"
          value={`${approvalRate}%`}
          icon={Award}
          color="text-purple-500"
        />

      <StreakCard />
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

        <div className="flex items-center gap-2">
          <Crown />
          <h2 className="text-xl font-bold">
            Monster Evolution
          </h2>
        </div>

        <div className="text-3xl font-bold">
          {monster}
        </div>

        <p>
          {totalAssets} / {nextGoal} assets
        </p>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-purple-500 h-4 rounded-full"
            style={{
              width: `${Math.min(
                (totalAssets / nextGoal) * 100,
                100
              )}%`,
            }}
          />
        </div>

      <StreakCard />
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

        <div className="flex items-center gap-2">
          <Sparkles />
          <h2 className="text-xl font-bold">
            XP System
          </h2>
        </div>

        <div className="text-3xl font-bold">
          ⭐ Level {level}
        </div>

        <p>
          {currentLevelXP} / 100 XP
        </p>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-yellow-500 h-4 rounded-full"
            style={{
              width: `${currentLevelXP}%`,
            }}
          />
        </div>

        <p>
          Total XP : {xp}
        </p>

      <StreakCard />
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

        <div className="flex items-center gap-2">
          <Target />
          <h2 className="text-xl font-bold">
            Weekly Goal
          </h2>
        </div>

        <p>
          {totalAssets} / {weeklyTarget} assets
        </p>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${weeklyProgress}%`,
            }}
          />
        </div>

        <p>
          {Math.round(weeklyProgress)}% completed
        </p>

      <StreakCard />
      </div>

    </div>
  );
}

/* STREAK PLACEHOLDER */
