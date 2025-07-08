

import '../globals.css';
import I18nProvider from '@/container/I18nProvider';

export default async function LocaleLayout({ children, params }) {
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