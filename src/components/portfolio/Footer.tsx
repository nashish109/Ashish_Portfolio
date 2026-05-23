export const Footer = () => {
  return (
    <footer className="relative z-10 px-2 pb-4 pt-8">
      <div className="retro-toolbar mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan-100 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>
          SYS_FOOTER / {new Date().getFullYear()} / N. Ashish
        </p>
        <p className="text-slate-400">
          Data Engineer & Full-Stack Developer / NETWORK: STABLE
        </p>
      </div>
    </footer>
  );
};
