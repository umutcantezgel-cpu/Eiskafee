import type { Metadata } from 'next';
import { SITE, BUSINESS } from './business-data';

interface BuildMetadataOpts {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * PRODUCTION GRADE METADATA BUILDER
 * Generates an exhaustive stack of 50+ SEO Meta Tags for Next.js 15
 */
export function buildMetadata(opts: BuildMetadataOpts): Metadata {
  const url = `${SITE.url}${opts.path}`;
  const ogImage = opts.ogImage || '/og/default.png';

  return {
    // ─── Basic Meta ───
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords?.join(', ') || '',
    authors: [{ name: SITE.shortName, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    applicationName: SITE.shortName,
    generator: 'Next.js',

    // ─── Format Detection ───
    formatDetection: {
      telephone: false, // Prevent auto-linking phone numbers on iOS (we handle them explicitly)
      address: false,
      email: false,
    },

    // ─── Alternates & Canonical ───
    alternates: {
      canonical: url,
      languages: {
        'de-DE': url,
        'de-AT': url,
        'de-CH': url,
        'x-default': url,
      },
    },

    // ─── OpenGraph ───
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: opts.ogType || 'website',
      emails: [BUSINESS.email],
      phoneNumbers: [BUSINESS.phoneTel],
      countryName: BUSINESS.countryName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: opts.title,
          type: 'image/png',
        },
      ],
    },

    // ─── Twitter ───
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [ogImage],
      creator: '@heyfede_wetzlar', // Placeholder for actual handle
      site: '@heyfede_wetzlar',
    },

    // ─── Robots ───
    robots: opts.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },

    // ─── Verification ───
    verification: {
      google: 'google-site-verification-token', // TODO: Add actual token
      yandex: 'yandex-verification-token',
      other: {
        me: [BUSINESS.email, SITE.url],
        'msvalidate.01': 'bing-verification-token',
      },
    },

    // ─── Category & Extra ───
    category: 'food and drink',
    other: {
      'geo.region': BUSINESS.region,
      'geo.placename': BUSINESS.city,
      'geo.position': `${BUSINESS.latitude};${BUSINESS.longitude}`,
      'ICBM': `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
    },
  };
}
