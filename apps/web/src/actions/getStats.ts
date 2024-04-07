"use server";

import { serverClient } from "@repo/trpc/server";
import { DateRange } from "@ui/components/text";

export const getstats = async (date: DateRange) => {
  //return tickets within a range of dates
  const from = date.from;
  const to = date.to;

  const tickets = await serverClient.api.stats.get.query({
    from,
    to,
  });
  return tickets;
};
