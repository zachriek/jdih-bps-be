"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regulationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.regulationSchema = zod_1.z.object({
    documentType: zod_1.z.enum(client_1.EDocumentType).optional(),
    legalType: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    abbreviation: zod_1.z.string().optional(),
    regulationNumber: zod_1.z.string().optional(),
    yearPublished: zod_1.z.number().int().optional(),
    status: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    placeIssued: zod_1.z.string().optional(),
    dateIssued: zod_1.z.coerce.date().optional(),
    promulgationDate: zod_1.z.coerce.date().optional(),
    language: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    lawField: zod_1.z.string().optional(),
    governmentAffair: zod_1.z.string().optional(),
    signer: zod_1.z.string().optional(),
    abstractFileName: zod_1.z.string().optional(),
    abstractFileUrl: zod_1.z.string().optional(),
    regulationFileName: zod_1.z.string().optional(),
    regulationFileUrl: zod_1.z.string().optional(),
});
