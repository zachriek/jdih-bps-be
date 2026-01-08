import prisma from '../../lib/prisma';

const select = {
	id: true,
	name: true,
	username: true,
	email: true,
	createdAt: true,
};

export const findUserByEmail = async (email: string) =>
	await prisma.user.findUnique({
		where: { email },
		select: {
			...select,
			password: true,
		},
	});

export const findUserByUsername = async (username: string) =>
	await prisma.user.findUnique({
		where: { username },
		select,
	});

export const findUserById = async (id: string) => await prisma.user.findUnique({ where: { id }, select: { name: true, email: true } });
