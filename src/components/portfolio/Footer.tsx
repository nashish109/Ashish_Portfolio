export const Footer = () => {
  return (
    <footer className="container py-10 text-center text-sm text-gray-400 border-t border-gray-800 bg-black">
      <p className="font-medium">
        © {new Date().getFullYear()} N. Ashish — Data Engineer & Full‑Stack Developer
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Built with passion and precision
      </p>
    </footer>
  );
};
