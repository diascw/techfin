"use client";

import type { Transaction } from "@/lib/types/types.ts";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { TransactionTypeIcon } from "@/components/atoms/TransactionTypeIcon";
import { CurrencyText } from "@/components/atoms/CurrencyText";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Category } from "../atoms/Category";

interface TransactionItemProps {
  transaction: Transaction & {
    category?: {
      name: string;
      icon: string;
      id: string;
      color?: string;
    } | null;
  };
  onDelete?: (id: string) => Promise<void>;
}

export function TransactionItem({
  transaction,
  onDelete,
}: TransactionItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!onDelete) return;

    setIsDeleting(true);
    try {
      await onDelete(transaction.id);
    } catch (error) {
      console.error("Error deleting transaction:", error);
    } finally {
      setIsDeleting(false);
    }
  };

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
      <ItemContent className="flex items-center gap-3">
        <div>
          <CurrencyText
            amount={transaction.amount}
            type={transaction.type}
            className="text-base"
          />
          {transaction.category && <Category category={transaction.category} />}
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </ItemContent>
    </Item>
  );
}
