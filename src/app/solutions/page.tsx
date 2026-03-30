export default function SolutionsPageTr() {
  const solutions = [
    "Yapay Zeka Büyüme Projeleri",
    "Performans Pazarlama",
    "Kreatif & İçerik Operasyonları",
    "Kampanya Yapıları",
    "Otomasyon",
    "Stratejik Uygulama",
  ];

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-12 w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
            Çözümler
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-gray-100 rounded-2xl bg-gray-50 flex items-center shadow-sm text-lg font-medium text-gray-800 transition-all hover:bg-white inset-ring hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
