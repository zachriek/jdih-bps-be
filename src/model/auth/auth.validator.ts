import { z } from 'zod';

export type TLoginInput = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
	email: z.string('Email tidak valid').email('Format email tidak valid'),
	password: z.string('Password tidak valid').min(6, 'Password minimal 6 karakter'),
});
