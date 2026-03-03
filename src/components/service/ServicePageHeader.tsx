
"use client";
import Image from 'next/image';

interface ServicePageHeaderProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
}

export default function ServicePageHeader({ logoSrc, logoAlt, title, subtitle }: ServicePageHeaderProps) {
  return (
    <section className="pb-0" data-aos="fade-up">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            padding: '1rem', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            flexShrink: 0
          }}>
            <Image 
              src={logoSrc} 
              alt={logoAlt} 
              width={100} 
              height={100} 
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontFamily: '"Baloo Thambi 2", system-ui', color: '#bd8c2e', marginBottom: '0.5rem', lineHeight: 1.2 }}>{title}</h1>
            <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
