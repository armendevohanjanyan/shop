import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Required for @vercel/og

const font = fetch(
    new URL('../../../public/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        return new Response('Product not found', { status: 404 });
    }
    const product = await res.json();

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    fontSize: 40,
                    padding: '40px',
                }}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    style={{ objectFit: 'contain', marginBottom: '20px' }}
                />

                <h1 style={{ fontSize: 40, fontWeight: 'bold' }}>{product.title}</h1>

                <p style={{ fontSize: 30, color: 'gray' }}>${product.price}</p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Inter',
                    data: await font,
                    style: 'normal',
                },
            ],
        }
    );
}