import {
  Database,
  CheckCircle,
  Clock,
  XCircle,
  Target,
  Award,
} from "lucide-react";

import StatCard from "../components/StatCard";

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

  const weeklyTarget = 100;

  const progress = Math.min(
    (assets.length / weeklyTarget) * 100,
    100
  );

  const reviewed = approved + rejected;

  const approvalRate =
    reviewed > 0
      ? Math.round((approved / reviewed) * 100)
      : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Assets"
          value={assets.length}
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
      </div>

      <div className="bg-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Target size={20} />
          <h2 className="font-bold text-lg">
            Weekly Goal
          </h2>
        </div>

        <p>
          {assets.length} / {weeklyTarget} assets
        </p>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p>
          {Math.round(progress)}% completed
        </p>
      </div>
    </div>
  );
}