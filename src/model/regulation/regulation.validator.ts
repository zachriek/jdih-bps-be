import { z } from 'zod';
import { EDocumentType } from '../../generated/prisma';

export type TRegulationInput = z.infer<typeof regulationSchema>;

export const regulationSchema = z.object({
	documentType: z.enum(Object.values(EDocumentType)).optional(),
	legalType: z.string().optional(),
	title: z.string().optional(),
	abbreviation: z.string().optional(),
	regulationNumber: z.string().optional(),
	yearPublished: z.number().int().optional(),
	status: z.string().optional(),
	description: z.string().optional(),
	placeIssued: z.string().optional(),
	dateIssued: z.coerce.date().optional(),
	promulgationDate: z.coerce.date().optional(),
	language: z.string().optional(),
	location: z.string().optional(),
	lawField: z.string().optional(),
	governmentAffair: z.string().optional(),
	signer: z.string().optional(),
	abstractFileName: z.string().optional(),
	abstractFileUrl: z.string().optional(),
	regulationFileName: z.string().optional(),
	regulationFileUrl: z.string().optional(),
});
