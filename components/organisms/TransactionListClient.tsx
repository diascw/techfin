"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ItemGroup, ItemSeparator } from "@/components/ui/item";
import { TransactionItem } from "@/components/molecules/TransactionItem";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Transaction } from "@/lib/types/types.ts";

interface TransactionListClientProps {
  transactions: (Transaction & {
    category?: {
      name: string;
      icon: string;
      id: string;
      color?: string;
    } | null;
  })[];
}

export function TransactionListClient({
  transactions: initialTransactions,
}: TransactionListClientProps) {
  const router = useRouter();
  const supabase = createClient();
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("transactions").delete().eq("id", id);

    if (error) {
      console.error("Error deleting transaction:", error);
      throw error;
    }

    setTransactions(transactions.filter((t) => t.id !== id));
    router.refresh();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>Suas últimas movimentações</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <ItemGroup>
            {transactions.map((transaction, index) => (
              <>
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  onDelete={handleDelete}
                />
                {index < transactions.length - 1 && <ItemSeparator />}
              </>
            ))}
          </ItemGroup>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
