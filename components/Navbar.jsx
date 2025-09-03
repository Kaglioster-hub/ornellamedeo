import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-xl font-bold text-[#2E8BC0]">Dott.ssa Ornella Amedeo</span>
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#chi-sono">Chi Sono</a></li>
          <li><a href="#servizi">Servizi</a></li>
          <li><a href="#adr">ADR Europa</a></li>
          <li><a href="#pubblicazioni">Pubblicazioni</a></li>
          <li><a href="#modulistica">Modulistica</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      </div>
    </nav>
  );
}
