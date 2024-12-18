import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
} 