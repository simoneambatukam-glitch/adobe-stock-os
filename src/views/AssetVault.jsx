export default function AssetVault() {
  const assets = [
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
    {
      title: "Online Learning",
      category: "Education",
      status: "Draft",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        📦 Asset Vault
      </h1>

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
