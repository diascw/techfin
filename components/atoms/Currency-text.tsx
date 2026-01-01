import { cn } from "@/lib/utils";
import type { TransactionType } from "@/lib/types/types.ts";

interface CurrencyTextProps {
  amount: number;
  type?: TransactionType;
  className?: string;
}

export function CurrencyText({ amount, type, className }: CurrencyTextProps) {
  const colorClass =
    type === "income"
      ? "text-primary"
      : type === "expense"
      ? "text-foreground"
      : "";

  return (
    <span className={cn("font-semibold tabular-nums", colorClass, className)}>
      {type === "income" ? "+" : type === "expense" ? "-" : ""}
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Math.abs(amount))}
    </span>
  );
}
