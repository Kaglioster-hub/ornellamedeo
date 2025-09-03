import jsPDF from "jspdf";

function generatePDF(titolo) {
  const doc = new jsPDF();
  doc.text(titolo, 20, 20);
  doc.save(titolo + ".pdf");
}

export default function Modulistica() {
  return (
    <section id="modulistica" className="py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#2E8BC0]">Modulistica</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <button onClick={() => generatePDF("Mandato Professionale")} className="px-6 py-3 bg-[#FFD700] rounded-lg">Mandato professionale</button>
        <button onClick={() => generatePDF("Richiesta Prestazione Professionale")} className="px-6 py-3 bg-[#FFD700] rounded-lg">Richiesta prestazione</button>
        <button onClick={() => generatePDF("Richiesta Mediazione ADR")} className="px-6 py-3 bg-[#FFD700] rounded-lg">Richiesta mediazione</button>
      </div>
    </section>
  );
}
