'use client';
import { useEffect } from 'react';
import I18nProvider from '@/container/I18nProvider';

export default function LocaleLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useEffect(() => {
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nProvider locale={locale}>
      {children}
    </I18nProvider>
  );
}