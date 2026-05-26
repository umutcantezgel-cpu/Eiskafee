import LiveOrderKanban from '@/components/admin/LiveOrderKanban';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KDS - Admin Dashboard',
};

export default function KDSPage() {
  return <LiveOrderKanban />;
}
