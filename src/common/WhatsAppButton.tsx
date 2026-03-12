'use client';
import Link from 'next/link';
import { DEFAULT_WHATSAPP_NUMBER } from '@/lib/whatsapp';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${DEFAULT_WHATSAPP_NUMBER}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="whatsapp-icon"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </Link>
  );
};

export default WhatsAppButton;
