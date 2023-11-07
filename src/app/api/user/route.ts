import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
	const users = await prisma.customer.findMany();
	return NextResponse.json(users);
}

export async function POST(request: Request) {
	const data = {
		username: 'gtn',
		email: 'gtn@example.com',
	};
	const user = await prisma.customer.create({
		data,
	});
	return NextResponse.redirect(`/user/${user.id}`);
}
