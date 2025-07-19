import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const product = await prisma.product.findUnique({ where: { id } })

  if (!product) {
    return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 })
  }

  return NextResponse.json(product)
}

// PUT
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const body = await request.json()
  const { name, description, price, image } = body

  try {
    const updated = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price),
        image,
      },
    })
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Update Error:', error)
    return NextResponse.json({ error: 'Gagal mengupdate produk.' }, { status: 500 })
  }
}

// DELETE
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  try {
    await prisma.product.delete({ where: { id } })
    return NextResponse.json({ message: 'Produk berhasil dihapus' })
  } catch (error) {
    console.error('Delete Error:', error)
    return NextResponse.json({ error: 'Gagal menghapus produk.' }, { status: 500 })
  }
}
