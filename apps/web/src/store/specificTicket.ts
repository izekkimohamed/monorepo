import { PaymentEnum } from "@repo/prisma/client";
import { create } from "zustand";

export type SpecificTicket = {
  number: number | null;
  createdAt: string;
  total: number | null;
  products: {
    code: string;
    createdAt: string;
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
  createdAt: "",
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
    createdAt: "",
    number: null,
    products: [],
    paymentModes: [],
    total: null,
  });
  return null;
};
