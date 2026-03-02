const Footer = () => (
  <footer className="py-8 border-t border-border" role="contentinfo">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jamees David. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with TypeScript ❤️
      </p>
    </div>
  </footer>
);

export default Footer;
