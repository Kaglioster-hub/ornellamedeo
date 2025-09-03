const servizi = [
  { icon: "📑", titolo: "Consulenza legale" },
  { icon: "📊", titolo: "Consulenza fiscale e contabile" },
  { icon: "⚖️", titolo: "Mediazione e arbitrato" },
  { icon: "🎓", titolo: "Formazione ADR" }
];

export default function Servizi() {
  return (
    <section id="servizi" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[#2E8BC0]">Servizi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {servizi.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg hover:bg-[#9FE2BF] transition">
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.titolo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
