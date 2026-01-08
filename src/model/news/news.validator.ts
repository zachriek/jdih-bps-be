import { z } from 'zod';
import { ENewsCategory } from '@prisma/client';

export type TNewsInput = z.infer<typeof newsSchema>;

export const newsSchema = z.object({
	title: z.string().min(1, 'Title tidak boleh kosong'),
	content: z.string().min(1, 'Content tidak boleh kosong'),
	authorId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Author ID tidak valid'),
	source: z.string().optional(),
	category: z.enum(Object.values(ENewsCategory)).optional(),
});
