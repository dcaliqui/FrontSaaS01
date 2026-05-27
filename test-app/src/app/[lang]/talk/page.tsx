import { notFound } from "next/navigation";
import LocaleSwitcher from "../../components/LocaleSwitcher";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import ptMessages from "@/messages/pt.json";

const locales = ["en", "pt", "fr"] as const;

type Locale = (typeof locales)[number];

type PageProps = {
  params: Promise<{ lang: string }>;
};

type Messages = {
  talk: string;
};

const content: Record<Locale, Messages> = {
  en: enMessages,
  pt: ptMessages,
  fr: frMessages,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function TalkPage({ params }: PageProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const copy = content[locale];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-900">
      <main className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Short sentence
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {copy.talk}
          </h1>
        </div>

        <div className="mt-6">
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </main>
    </div>
  );
}
