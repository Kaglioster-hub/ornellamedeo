import { useState } from "react";

const servizi = [
  {
    icon: "📑",
    titolo: "Consulenza legale",
    telefono: "0637518763",
    email: "studio.amedeo@gmail.com",
  },
  {
    icon: "📊",
    titolo: "Consulenza fiscale e contabile",
    telefono: "0637518763",
    email: "studio.amedeo@gmail.com",
  },
  {
    icon: "⚖️",
    titolo: "Mediazione e arbitrato",
    telefono: "0637518763",
    email: "studio.amedeo@gmail.com",
  },
  {
    icon: "🎓",
    titolo: "Formazione ADR",
    telefono: "0645542099",
    email: "segreteria@adreuropa.it",
    email2: "o.amedeo@associationline.it",
  },
];

export default function Servizi() {
  const [popup, setPopup] = useState(null);

  return (
    <section id="servizi" className="py-16 bg-brandCream">
      <h2 className="text-3xl font-title font-bold text-center text-brandBlack">
        Servizi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {servizi.map((s, i) => (
          <div
            key={i}
            onClick={() => setPopup(s)}
            className="
              group block p-6 rounded-2xl shadow-lg
              bg-brandWhite text-brandBlack
              transition-all duration-500
              cursor-pointer select-none
              hover:bg-gold-gradient hover:shadow-2xl
            "
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold group-hover:text-brandBlack">
              {s.titolo}
            </h3>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-brandWhite rounded-2xl shadow-2xl p-8 max-w-sm text-center">
            <h3 className="text-2xl font-title text-brandBlack mb-4">
              {popup.titolo}
            </h3>

            {/* Telefono */}
            <a
              href={`tel:${popup.telefono}`}
              className="block bg-brandGold text-brandBlack font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-90 transition"
            >
              📞 Chiama {popup.telefono}
            </a>

            {/* Email principale */}
            {popup.email && (
              <a
                href={`mailto:${popup.email}`}
                className="block bg-brandBlack text-brandWhite font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-80 transition"
              >
                ✉️ Invia mail a {popup.email}
              </a>
            )}

            {/* Email secondaria (solo per Formazione ADR) */}
            {popup.email2 && (
              <a
                href={`mailto:${popup.email2}`}
                className="block bg-brandBlack text-brandWhite font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-80 transition"
              >
                ✉️ Invia mail a {popup.email2}
              </a>
            )}

            {/* Bottone chiudi */}
            <button
              onClick={() => setPopup(null)}
              className="mt-4 text-sm text-brandGray underline hover:text-brandBlack"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
