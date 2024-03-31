import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@repo/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary/50 text-primary-foreground text-2xl font-bold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ticket:
          "h-full row-span-1 bg-gradient-to-br to-purple-100 from-purple-700 to-80%  text-gray-950 text-xl font-bold",
        custome:
          "h-full row-span-1 bg-gradient-to-br to-pink-100 from-pink-700 to-80%  text-gray-950 text-xl font-bold",
        print:
          "h-full row-span-1 bg-gradient-to-br to-lime-100 from-lime-700 to-90%  text-gray-950 text-xl font-bold",
        cash: "h-full row-span-1 bg-gradient-to-br  to-amber-100 from-orange-700 to-80%  text-gray-950 text-xl font-bold",
        card: "h-full row-span-1 bg-gradient-to-br to-blue-100 from-blue-800 to-80%  text-gray-950 text-xl font-bold",
        cheque:
          "h-full row-span-1 bg-gradient-to-br to-zinc-100 from-gray-700 to-80%  text-gray-950 text-xl font-bold",
        tabs: "h-full row-span-1 bg-gradient-to-br to-zinc-400 from-secondary to-90%  text-gray-950 font-bold",
      },
      size: {
        default: "h-10 p-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        full: "h-full w-full p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  clickHandler?: (() => void) | undefined;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
