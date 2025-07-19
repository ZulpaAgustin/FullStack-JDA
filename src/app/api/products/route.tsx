import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(products)
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, description, price, image } = body

    if (!name || !description || price === undefined) {
      return NextResponse.json({ error: 'Name, description, dan price wajib diisi.' }, { status: 400 })
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        image,
      },
    })

    return NextResponse.json(newProduct)
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: 'Terjadi kesalahan saat menyimpan.' }, { status: 500 })
  }
}
