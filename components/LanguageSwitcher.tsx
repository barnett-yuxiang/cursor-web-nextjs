'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {locales} from '@/i18n.config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select value={locale} onChange={(e) => handleChange(e.target.value)}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc === 'en' ? 'English' : '中文'}
        </option>
      ))}
    </select>
  );
}