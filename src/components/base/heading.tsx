import { FC, PropsWithChildren } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const headingVariants = cva("bg-blue-500", {
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      xxl: "text-xxl",
      "48": "text-[48px]",
    },
  },
  defaultVariants: {
    color: "secondary",
    size: "xxl",
  },
});

interface TextProps
  extends PropsWithChildren,
    VariantProps<typeof headingVariants> {
  className?: ClassValue;
}

export const Heading: FC<TextProps> = ({
  children,
  className,
  color,
  size,
}) => {
  return (
    <p className={cn(headingVariants({ className, color, size }))}>
      {children}
    </p>
  );
};
