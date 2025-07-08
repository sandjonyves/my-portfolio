

import '../globals.css';
import { ReactNode } from "react";
import I18nProvider from '@/container/I18nProvider';
interface LocaleLayoutProps {
    children: ReactNode;
    params: { locale: string };
  }
export default async function LocaleLayout({ children, params } :LocaleLayoutProps) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
} 