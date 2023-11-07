import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
	const invoice = await prisma.invoice.findMany();
	return NextResponse.json({ invoice });
}
