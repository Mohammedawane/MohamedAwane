import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "fr"];

export const hasLocale = (lang: string): lang is Locale => lang in dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale]();
