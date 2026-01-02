import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  value: number;
  isPositive: boolean;
}

export function TrendIndicator({ value, isPositive }: TrendIndicatorProps) {
  return (
    <div className="flex items-center mt-2">
      <span
        className={cn(
          "text-xs font-medium",
          isPositive ? "text-primary" : "text-destructive"
        )}
      >
        {isPositive ? "+" : ""}
        {value}%
      </span>
      <span className="text-xs text-muted-foreground ml-1">
        vs mês anterior
      </span>
    </div>
  );
}
