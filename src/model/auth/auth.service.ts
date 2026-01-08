import { comparePassword } from '../../lib/bcrypt';
import { findUserByEmail, findUserById } from './auth.repository';
import { signToken } from '../../lib/jwt';
import { HttpError } from '../../utils/httpError';

export const loginService = async ({ email, password }: { email: string; password: string }) => {
	const user = await findUserByEmail(email);

	if (!user || !user.password) {
		throw new HttpError('Email tidak ditemukan', 401);
	}

	const match = await comparePassword({ password, hash: user.password });

	if (!match) {
		throw new HttpError('Password salah', 401);
	}

	const token = signToken({ id: user.id, email: user.email });

	return {
		message: 'Login berhasil',
		user: {
			id: user.id,
			name: user.name,
			username: user.username,
			email: user.email,
			createdAt: user.createdAt,
		},
		token,
	};
};

export const getAuthUserService = async (id: string) => {
	const user = await findUserById(id);
	if (!user) throw new HttpError('User tidak ditemukan', 404);
	return user;
};
