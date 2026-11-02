function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-10 py-6 border-t border-gray-800">
      <div className="mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} · Unyielding Tenacity.
        </p>

        <p className="text-sm font-semibold">
          James Louie
        </p>
      </div>
    </footer>
  );
}

export default Footer;