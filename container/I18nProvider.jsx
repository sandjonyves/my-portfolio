'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';
import { useEffect } from 'react';

export default function I18nProvider({ children, locale }) {
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 