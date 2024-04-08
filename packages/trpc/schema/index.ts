import * as z from "zod";
export const ProductSchema = z.object({
  id: z.number().optional(),
  code: z.string().optional(),
  code_interne: z.string().optional(),
  libelle: z.string().nullable(),
  price: z.number().nullable(),
  pvht: z.number().nullable(),
  rayon_code: z.number().nullable(),
  famille_code: z.number().nullable(),
  tva_code: z.number().nullable(),
});

export const DataSchema = z.object({
  id: z.number().optional(),
  code: z.string(),
  code_interne: z.string(),
  libelle: z.string(),
  price: z.number(),
  pvht: z.number(),
  famille_code: z.number().nullable(),
  tva_code: z.number().nullable(),
  total_pvht: z.number(),
  quantity: z.number(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ticketNumber: z.number().nullable(),
  waittingTicketsNumber: z.number().nullable(),
});

export const WaittingTicketsSchema = z.object({
  number: z.number().optional(),
  total: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const TicketSchema = z.object({
  number: z.number().optional(),
  total: z.number().optional(),
  clientId: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  products: z.array(DataSchema),
});

export const ClientSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  address: z.string().optional(),
  phone_number: z.string(),
  ticket: TicketSchema,
});

export const PaymentEnum = z.enum(["Cash", "Card", "Cheque"]);

export const PaymentModeSchema = z.object({
  id: z.number().optional(),
  mode: PaymentEnum,
  amount: z.number(),
  ticketNumber: z.number().optional(),
});

export const TabsSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  products: z.array(ProductSchema).optional(),
});
