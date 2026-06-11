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

      <div className="grid gap-4">
        {assets.map((asset, index) => (
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
      </div>
    </div>
  );
}
