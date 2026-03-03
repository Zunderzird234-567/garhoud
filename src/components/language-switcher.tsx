'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';

export default function LanguageSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '20px' }}>
      {i18n.locales.map((locale) => {
        const isActive = pathName.startsWith(`/${locale}`);
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            style={{
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal',
                color: '#bd8c2e',
                fontSize: '14px',
                borderBottom: isActive ? '2px solid #bd8c2e' : 'none',
                paddingBottom: '2px'
            }}
          >
            {locale === 'ar' ? 'العربية' : 'English'}
          </Link>
        );
      })}
    </div>
  );
}
