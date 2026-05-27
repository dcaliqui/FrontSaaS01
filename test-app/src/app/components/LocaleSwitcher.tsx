"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "pt", "fr"] as const;

type Locale = (typeof locales)[number];

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Portugues",
  fr: "Francais",
};

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.replace(`/${segments.join("/")}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchLocale(locale)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            currentLocale === locale
              ? "border-zinc-900 bg-zinc-900 text-white"
              : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
          }`}
          aria-pressed={currentLocale === locale}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
