import { PaymentEnum } from "@repo/prisma";
import { create } from "zustand";

export type SpecificTicket = {
  number: number | null;
  createdAt: Date;
  total: number | null;
  products: {
    code: string;
    createdAt: Date;
    ticketNumber: number | null;
    total: number;
    libelle: string;
    price: number;
    pvht: number;
    quantity: number;
    tva_code: number | null;
    famille_code: number | null;
    waittingTicketsNumber: number | null;
    id: number;
  }[];
  clientId: number | null;
  paymentModes: {
    mode: PaymentEnum;
    amount: number;
    ticketNumber: number | null;
    id: number;
  }[];
};

export const useSpecificTicket = create<SpecificTicket>((set) => ({
  clientId: null,
  createdAt: new Date(),
  number: null,
  products: [],
  paymentModes: [],
  total: null,
}));
export const createSpecificTicket = (data: SpecificTicket) => {
  useSpecificTicket.setState(data);
  return data;
};
export const deleteSpecificTicket = () => {
  useSpecificTicket.setState({
    clientId: null,
    createdAt: new Date(),
    number: null,
    products: [],
    paymentModes: [],
    total: null,
  });
  return null;
};
