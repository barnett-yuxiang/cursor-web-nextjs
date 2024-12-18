import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
    </main>
  );
} 