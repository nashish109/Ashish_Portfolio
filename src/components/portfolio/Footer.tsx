export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-white/45 sm:px-8 lg:px-12">
      <p className="font-medium">
        {"\u00a9"} {new Date().getFullYear()} N. Ashish - Data Engineer & Full-Stack Developer
      </p>
      <p className="mt-2 text-xs text-white/30">Built with passion and precision</p>
    </footer>
  );
};
