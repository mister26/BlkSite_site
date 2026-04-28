export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
        <p className="text-sm text-blacksite-text">
          BLACKSITE - a Redacted project
        </p>
        <p className="font-mono text-xs uppercase text-blacksite-muted">
          Operator: Redacted
        </p>
        <a
          href="mailto:contact@theblksite.com"
          className="w-fit font-mono text-xs uppercase text-blacksite-muted transition hover:text-blacksite-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blacksite-redSoft"
        >
          Contact: contact@theblksite.com
        </a>
      </div>
    </footer>
  );
}
