import type { Transaction } from "@/lib/types/types.ts";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { TransactionTypeIcon } from "@/components/atoms/transaction-type-icon";
import { CurrencyText } from "@/components/atoms/currency-text";
import { Category } from "@/components/atoms/category";

interface TransactionItemProps {
  transaction: Transaction & {
    category?: {
      name: string;
      icon: string;
      id: string;
      color?: string;
    } | null;
  };
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <Item variant="outline" className="hover:bg-muted/50 transition-colors">
      <ItemMedia variant="icon">
        <TransactionTypeIcon type={transaction.type} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>
          {transaction.category?.icon}{" "}
          {transaction.category?.name || "Sem categoria"}
        </ItemTitle>
        <ItemDescription>
          {transaction.description || "Sem descrição"} •{" "}
          {new Date(transaction.date).toLocaleDateString("pt-BR")}
        </ItemDescription>
      </ItemContent>
      <ItemContent>
        <CurrencyText
          amount={transaction.amount}
          type={transaction.type}
          className="text-base"
        />
        {transaction.category && <Category category={transaction.category} />}
      </ItemContent>
    </Item>
  );
}
