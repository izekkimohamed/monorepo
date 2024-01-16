"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@repo/ui/src/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/src/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/src/components/ui/select";
import { Calendar } from "@repo/ui/src/components/ui/calendar";
import {
  addDays,
  endOfMonth,
  endOfYear,
  format,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  addHours,
  subYears,
  add,
} from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "@repo/ui/src/components/text";
import { PaymentEnum } from "@repo/prisma/client";
import { cn } from "@repo/libs/utils";

// import { getstatus } from "@/actions/getStatus";
// import { getModes } from "@/lib/getModes";
export type PaymentMethods = {
  id: number;
  mode: PaymentEnum;
  amount: number;
  ticketNumber: number | null;
};
export type StatusProps = {
  total: number;
  paymentModes: PaymentMethods[];
};

function Stats() {
  let currentDate = new Date(new Date().toLocaleDateString("en-US"));

  const [date, setDate] = useState<DateRange | undefined>({
    from: currentDate,
    to: addDays(currentDate, 1),
  });
  const [data, setData] = useState<StatusProps[]>([]);

  function setValue(value: string) {
    // currentDate = addHours(currentDate, 1);
    const lastWeek = {
      // last week : last seven days

      start: subDays(currentDate, 7),
      end: currentDate, // Today
    };
    const lastMonth = {
      start: startOfMonth(subMonths(new Date(), 1)),
      end: endOfMonth(subMonths(new Date(), 1)),
    };
    const lastYear = {
      start: startOfYear(subYears(new Date(), 1)),
      end: endOfYear(subYears(new Date(), 1)),
    };
    switch (value) {
      case "today":
        setDate({
          from: currentDate,
          to: addDays(currentDate, 1), // Tomorrow
        }); // Today
        break;
      case "yesterday":
        setDate({
          from: subDays(currentDate, 1), // Yesterday
          to: currentDate,
        }); // Yesterday
        break;
      case "lastWeek":
        setDate({
          from: lastWeek.start, // Last Week
          to: lastWeek.end,
        }); // Last Week
        break;
      case "lastMonth":
        setDate({
          from: lastMonth.start, // Last Month
          to: lastMonth.end,
        });
        break;
      case "lastYear":
        setDate({
          from: lastYear.start, // Last Year
          to: lastYear.end,
        }); // Last Year
        break;
      default:
        setDate({
          from: addDays(currentDate, 1), // Tomorrow
          to: currentDate,
        });
    }
  }

  // async function getSatus() {
  //   const status = await getstatus(date!);
  //   setData(status);
  // }
  // const modes = getModes(data);
  // // function to reduce on data.paymentModes return total of each mode
  // function totalPayment() {
  //   const total = data.reduce((acc, curr) => {
  //     return acc + curr.total;
  //   }, 0);
  //   return total;
  // }

  return (
    <div>
      <Dialog>
        <DialogTrigger className="" asChild>
          <Button
            variant={"outline"}
            className="w-full h-16 text-primary font-bold text-3xl hover:text-primary/90"
          >
            Status
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <div className="flex mt-3 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal border-2 border-gray-400",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex w-auto flex-col space-y-2 p-2"
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                      className="bg-white rounded-md"
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <Select
                defaultValue="today"
                onValueChange={(value) => setValue(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key={"today"} value="today">
                      Today
                    </SelectItem>
                    <SelectItem key={"yesterday"} value="yesterday">
                      Yesterday
                    </SelectItem>
                    <SelectItem key={"lastWeek"} value="lastWeek">
                      Last Week
                    </SelectItem>
                    <SelectItem key={"lastMonth"} value="lastMonth">
                      Last Month
                    </SelectItem>
                    <SelectItem key={"lastYear"} value="lastYear">
                      Last Year
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </DialogHeader>
          {data && (
            <div className="flex flex-col  gap-2">
              <div className="flex justify-between gap-2">
                <span className="font-bold text-2xl ">Total:</span>
                <span className="font-semibold text-2xl">
                  {/* {totalPayment().toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} */}
                </span>
              </div>
              <div className="w-full gap-2">
                {/* {modes.map((mode, index) => {
                  return (
                    <div key={index} className="flex justify-between gap-2">
                      <span className="font-bold text-2xl ">{mode.mode}:</span>
                      <span className="font-semibold text-2xl">
                        {Number(mode.amount).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  );
                })} */}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant={"default"}
              size={"sm"}
              // onClick={getSatus}
            >
              Calculate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Stats;
