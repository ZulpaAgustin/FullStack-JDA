import { NextResponse } from 'next/server';

let products = [
  {
    id: 1,
    name: 'T-Shirt Smile Love',
    price: 120000,
    image: '/images/tshirt.jpeg',
  },
  {
    id: 2,
    name: 'Baju Lengan Flowers',
    price: 80000,
    image: '/images/bj1.jpg',
  },
  {
    id: 3,
    name: 'Kemeja Casual',
    price: 125000,
    image: '/images/kemeja.jpg',
  },
  {
    id: 4,
    name: 'Kemeja Panjang Jeans',
    price: 200000,
    image: '/images/kemejaJeans.jpg',
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
    id: Date.now(),
    name: body.name,
    price: body.price,
    image: body.image || '', 
  };

  products.push(newProduct);
  return NextResponse.json(newProduct);
}

export async function PUT(req: Request) {
  const body = await req.json();

  products = products.map((p) =>
    p.id === body.id
      ? {
          ...p,
          name: body.name,
          price: body.price,
          image: body.image || p.image,
        }
      : p
  );

  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  products = products.filter((p) => p.id !== body.id);
  return NextResponse.json({ message: 'Deleted' });
}
