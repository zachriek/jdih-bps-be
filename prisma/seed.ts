import { hashPassword } from '../src/lib/bcrypt';
import prisma from '../src/lib/prisma';

async function seedAdmin() {
	const hashedPassword = await hashPassword({ password: 'admin123' });

	const adminUser = await prisma.user.upsert({
		where: { email: 'admin@gmail.com' },
		update: {},
		create: {
			name: 'Gibran Rakabooming',
			username: 'gibran',
			email: 'admin@gmail.com',
			password: hashedPassword,
			picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zxNPPu8l-x9vXHDm1ibb-GdCGogGzqiyGyROiUK-2CvhyjExbj9EI0sYdXGEIx2xfcWnCrj46bksAffgEinpQxLPNjL5r_jrCgjQBBvG&s=10',
		},
	});

	console.log('Admin user created:', adminUser);
}

seedAdmin()
	.catch((err) => {
		console.error(err);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
