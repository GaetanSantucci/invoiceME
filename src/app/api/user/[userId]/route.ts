import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context: any) {
	const { userId } = context.params;
	const user = await prisma.customer.findUnique({
		where: { id: Number(userId) },
	});
	return NextResponse.json({ user });
}

export async function PATCH(
	request: Request,
	context: any
) {
	const { userId } = context.params;
	const { username, email } = await request.json();
	const user = await prisma.customer.update({
		where: { id: Number(userId) },
		data: { username, email },
	});
	return NextResponse.json({
		user: `${userId} updated succesfully`,
	});
}
