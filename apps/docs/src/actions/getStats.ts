"use server";

import { prisma } from "@repo/prisma";
import { DateRange } from "@ui/components/text";

export const getstats = async (date: DateRange) => {
  //return tickets within a range of dates
  const startDate = date.from;
  const endDate = date.to;

  const tickets = await prisma.ticket.findMany({
    where: {
      createdAt: {
        gte: startDate!,
        lte: endDate!,
      },
      clientId: null,
      total: {
        gt: 0,
      },
    },
    select: {
      total: true,
      paymentModes: true,
    },
  });
  return tickets;
};
