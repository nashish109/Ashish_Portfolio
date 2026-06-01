export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="portfolio-container flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-bold text-slate-900">N. Ashish</span>
        <span>Software Engineer | Full Stack Developer | AI & Data Enthusiast</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
