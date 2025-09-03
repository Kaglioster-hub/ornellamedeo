export default function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center mt-16">
      <p className="text-sm">© {new Date().getFullYear()} Dott.ssa Ornella Amedeo</p>
      <p className="text-xs mt-2">P.IVA ADR Europa S.r.l. 14553571002 – REA 1529377 – CCIAA Roma</p>
      <a href="/privacy" className="underline text-sm mt-2 inline-block">Privacy & Cookie Policy</a>
    </footer>
  );
}
