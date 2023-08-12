import { FC, PropsWithChildren } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const textVariants = cva("text-4xl bg-red-500", {
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      sm: "text-[32px]",
      lg: "text-[48px]",
    },
  },
  defaultVariants: {
    color: "secondary",
    size: "lg",
  },
});

interface TextProps
  extends PropsWithChildren,
    VariantProps<typeof textVariants> {
  className?: ClassValue;
}

export const Text: FC<TextProps> = ({ children, className, color, size }) => {
  return (
    <p className={cn(textVariants({ className, color, size }))}>{children}</p>
  );
};
