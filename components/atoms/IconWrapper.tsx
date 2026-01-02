import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  variant?: "default" | "warning" | "success" | "tip";
}

export function IconWrapper({
  icon: Icon,
  className,
  variant = "default",
}: IconWrapperProps) {
  const variantStyles = {
    default: "bg-muted text-muted-foreground",
    warning: "bg-destructive/10 text-destructive",
    success: "bg-primary/10 text-primary",
    tip: "bg-accent/10 text-accent",
  };

  return (
    <div className={cn("p-2 rounded-full", variantStyles[variant], className)}>
      <Icon className="h-5 w-5" />
    </div>
  );
}
