import { Database, CheckCircle, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Dashboard({ assets }) {
  const approved = assets.filter(
      a => a.status === 'Approved'
        ).length;

          const inReview = assets.filter(
              a => a.status === 'In Review'
                ).length;

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
                                                                                                                                                        color="text-emerald-500"
                                                                                                                                                                />

                                                                                                                                                                        <StatCard
                                                                                                                                                                                  title="In Review"
                                                                                                                                                                                            value={inReview}
                                                                                                                                                                                                      icon={Clock}
                                                                                                                                                                                                                color="text-yellow-500"
                                                                                                                                                                                                                        />
                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                    }