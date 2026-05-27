import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hey Fede! Order Status';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { orderId: string } }) {
  const { orderId } = params;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5efe8', // cream
          border: '16px solid #eedfcc', // beige
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            backgroundColor: '#CC624C', // terracotta
            color: '#fefefe', // cream pure
            borderRadius: '100px',
            padding: '20px 40px',
            fontSize: '32px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 8px 32px rgba(204, 98, 76, 0.3)',
          }}
        >
          Hey Fede!
        </div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#2d1f19', // brown
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Dein Bestellstatus
        </div>

        <div
          style={{
            fontSize: '48px',
            fontWeight: 500,
            color: '#CC624C', // terracotta
            textAlign: 'center',
          }}
        >
          Bestellung #{orderId}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
