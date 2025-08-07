import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-panel rounded-xl p-6 border transition-shadow duration-200 hover:shadow-lg",
        className
      )}
      {...props}
    />
  )
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
