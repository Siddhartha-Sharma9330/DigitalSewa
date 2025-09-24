import * as React from "react";
import { cn } from "@/lib/utils";

const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 rounded-md w-full h-4",
      className
    )}
    aria-label="Loading..."
    role="status"
    {...props}
  />
));
Skeleton.displayName = "Skeleton";

export { Skeleton };
