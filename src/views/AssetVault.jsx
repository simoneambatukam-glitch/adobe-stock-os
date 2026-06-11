import { useState } from "react";

export default function AssetVault() {
  const [assets, setAssets] = useState([
    {
      title: "Business Meeting",
      category: "Business",
      status: "In Review",
    },
    {
      title: "Doctor Consultation",
      category: "Medical",
      status: "Approved",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addAsset = () => {
    const title = prompt("Judul asset:");
    if (!title) return;

    const category = prompt("Kategori:");
    if (!category) return;

    setAssets([
      ...assets,
      {
        title,
        category,
        status: "Draft",
      },
    ]);
  };

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch =
      asset.title.toLowerCase().includes(search.toLowerCase()) ||
      asset.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || asset.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        📦 Asset Vault
      </h1>

      <button
        onClick={addAsset}
        className="px-4 py-2 rounded-xl bg-blue-600"
      >
        + Tambah Asset
      </button>

      <input
        type="text"
        placeholder="🔍 Cari asset..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800"
      >
        <option>All</option>
        <option>Draft</option>
        <option>In Review</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>

      <div className="grid gap-4">
        {filteredAssets.map((asset, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-5"
          >
            <h2 className="font-bold text-lg">
              {asset.title}
            </h2>

            <p>📁 {asset.category}</p>

            <p>🏷️ {asset.status}</p>
          </div>
        ))}

        {filteredAssets.length === 0 && (
          <div className="bg-slate-800 rounded-2xl p-5">
            Tidak ada asset ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}

/* SHADOW ARCHIVE REBORN */
