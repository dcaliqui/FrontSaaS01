import { notFound } from "next/navigation";
import LocaleSwitcher from "../components/LocaleSwitcher";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import ptMessages from "@/messages/pt.json";

const locales = ["en", "pt", "fr"] as const;

type Locale = (typeof locales)[number];

type PageProps = {
  params: Promise<{ lang: string }>;
};

type Messages = {
  tagline: string;
  title: string;
  intro: string;
  sentences: string[];
  footer: string;
};

const content: Record<Locale, Messages> = {
  en: enMessages,
  pt: ptMessages,
  fr: frMessages,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const copy = content[locale];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-900">
      <main className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            {copy.tagline}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {copy.title}
          </h1>
          <p className="text-base text-zinc-600 sm:text-lg">{copy.intro}</p>
        </div>

        <div className="mt-6">
          <LocaleSwitcher currentLocale={locale} />
        </div>

        <ol className="mt-8 list-decimal space-y-2 pl-6 text-base text-zinc-700">
          {copy.sentences.map((sentence) => (
            <li key={sentence}>{sentence}</li>
          ))}
        </ol>

        <p className="mt-8 text-xs text-zinc-400">{copy.footer}</p>
      </main>
    </div>
  );
}
