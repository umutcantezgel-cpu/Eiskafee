import { buildMetadata } from '@/lib/seo/base-metadata';

export const metadata = buildMetadata({
  title: 'Passwort zurücksetzen · Hey Fede!',
  description: 'Setze dein Passwort für dein Hey Fede! Konto zurück.',
  path: '/password-reset',
  noIndex: true, // Should not be indexed
});

export default function PasswordResetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
