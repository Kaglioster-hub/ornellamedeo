import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-[#9FE2BF] text-center">
      <Image src="/logo.png" alt="Logo" width={120} height={120} />
      <h1 className="mt-6 text-4xl font-bold text-[#2E8BC0]">Dott.ssa Ornella Amedeo</h1>
      <p className="mt-4 text-lg text-gray-700">
        Avvocato · Commercialista · Mediatrice ADR · Formatore accreditato
      </p>
      <a href="#contatti" className="mt-6 px-6 py-3 bg-[#FFD700] rounded-lg shadow text-black font-semibold hover:bg-[#2E8BC0] hover:text-white transition">
        Richiedi una consulenza
      </a>
    </section>
  );
}
