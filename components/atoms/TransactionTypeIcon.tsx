import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TransactionType } from "@/lib/types/types.ts";

interface TransactionTypeIconProps {
  type: TransactionType;
  className?: string;
}

export function TransactionTypeIcon({
  type,
  className,
}: TransactionTypeIconProps) {
  const isIncome = type === "income";

  return (
    <div
      className={cn(
        "p-2 rounded-full",
        isIncome
          ? "bg-primary/10 text-primary"
          : "bg-destructive/10 text-destructive",
        className
      )}
    >
      {isIncome ? (
        <ArrowUpIcon className="h-4 w-4" />
      ) : (
        <ArrowDownIcon className="h-4 w-4" />
      )}
    </div>
  );
}
