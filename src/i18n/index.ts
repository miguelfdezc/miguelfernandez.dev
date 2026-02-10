import { ui, defaultLang, type Lang, type TranslationKey } from "./ui";

export { languages, defaultLang, type Lang, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLocalePath(pathname: string, lang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  // Remove existing lang prefix if present
  if (segments[0] === "en" || segments[0] === "es") {
    segments.shift();
  }
  return `/${lang}/${segments.join("/")}`;
}

export function formatDate(date: Date, lang: Lang): string {
  const locale = lang === "es" ? "es-ES" : "en-US";
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCvPath(lang: Lang): string {
  return `/cv/miguel-fernandez-cv-${lang}.pdf`;
}
