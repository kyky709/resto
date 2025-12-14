'use client';

export function SkipLinks() {
  return (
    <div className="skip-links">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#C9A227] focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Aller au contenu principal
      </a>
      <a
        href="#main-navigation"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-64 focus:z-[200] focus:bg-[#C9A227] focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Aller à la navigation
      </a>
      <a
        href="#footer"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-[500px] focus:z-[200] focus:bg-[#C9A227] focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Aller au pied de page
      </a>
    </div>
  );
}
