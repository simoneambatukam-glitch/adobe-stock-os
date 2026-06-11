import { useEffect, useState } from "react";
import {
  LayoutDashboard,
    Database,
      Zap,
        CircleDollarSign,
          FileTerminal,
            LineChart,
              Settings,
              } from "lucide-react";

              import { db } from "./database/db";

              import Sidebar from "./components/Sidebar";
              import MobileNav from "./components/MobileNav";

              import Dashboard from "./views/Dashboard";

              export default function App() {
                const [activeView, setActiveView] =
                    useState("dashboard");

                      const [assets, setAssets] = useState([]);

                        const refresh = async () => {
                            const data = await db.assets.toArray();
                                setAssets(data);
  };

  const addAsset = async (title, category) => {
    await db.assets.add({
      title,
      category,
      status: "Draft",
    });

    refresh();
                                  };

                                    useEffect(() => {
                                        refresh();
                                          }, []);

                                            const navItems = [
                                                {
                                                      id: "dashboard",
                                                            label: "Dashboard",
                                                                  icon: LayoutDashboard,
                                                                      },
                                                                          {
                                                                                id: "vault",
                                                                                      label: "Vault",
                                                                                            icon: Database,
                                                                                                },
                                                                                                    {
                                                                                                          id: "pipeline",
                                                                                                                label: "Pipeline",
                                                                                                                      icon: Zap,
                                                                                                                          },
                                                                                                                              {
                                                                                                                                    id: "earnings",
                                                                                                                                          label: "Earnings",
                                                                                                                                                icon: CircleDollarSign,
                                                                                                                                                    },
                                                                                                                                                        {
                                                                                                                                                              id: "prompts",
                                                                                                                                                                    label: "Prompts",
                                                                                                                                                                          icon: FileTerminal,
                                                                                                                                                                              },
                                                                                                                                                                                  {
                                                                                                                                                                                        id: "analytics",
                                                                                                                                                                                              label: "Analytics",
                                                                                                                                                                                                    icon: LineChart,
                                                                                                                                                                                                        },
                                                                                                                                                                                                            {
                                                                                                                                                                                                                  id: "settings",
                                                                                                                                                                                                                        label: "Settings",
                                                                                                                                                                                                                              icon: Settings,
                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                    ];

                                                                                                                                                                                                                                      return (
                                                                                                                                                                                                                                          <div className="flex h-screen bg-slate-950 text-slate-200">
                                                                                                                                                                                                                                                <Sidebar
                                                                                                                                                                                                                                                        navItems={navItems}
                                                                                                                                                                                                                                                                activeView={activeView}
                                                                                                                                                                                                                                                                        setActiveView={setActiveView}
        addAsset={addAsset}
                                                                                                                                                                                                                                                                              />

                                                                                                                                                                                                                                                                                    <main className="flex-1 p-6 overflow-y-auto pb-24">
                                                                                                                                                                                                                                                                                            {activeView === "dashboard" && (
                                                                                                                                                                                                                                                                                                      <Dashboard assets={assets} />
                                                                                                                                                                                                                                                                                                              )}

                                                                                                                                                                                                                                                                                                                      {activeView !== "dashboard" && (
                                                                                                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                                                                                                            <h1 className="text-3xl font-bold capitalize">
                                                                                                                                                                                                                                                                                                                                                          {activeView}
                                                                                                                                                                                                                                                                                                                                                                      </h1>

                                                                                                                                                                                                                                                                                                                                                                                  <p className="text-slate-400 mt-2">
                                                                                                                                                                                                                                                                                                                                                                                                Coming Soon...
                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                                                                                                                                                                                    </main>

                                                                                                                                                                                                                                                                                                                                                                                                                                          <MobileNav
                                                                                                                                                                                                                                                                                                                                                                                                                                                  navItems={navItems}
                                                                                                                                                                                                                                                                                                                                                                                                                                                          activeView={activeView}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  setActiveView={setActiveView}
        addAsset={addAsset}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }