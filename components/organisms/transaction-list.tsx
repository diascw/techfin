import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { Inbox } from "lucide-react";
import { TransactionListClient } from "./transaction-list-client";

interface TransactionListProps {
  userId: string;
}

export async function TransactionList({ userId }: TransactionListProps) {
  const supabase = await createClient();

  const { data: transactions } = await supabase
    .from("transactions")
    .select("*, category:categories(*)")
    .eq("user_id", userId)
    .order("date", { ascending: false })
    .limit(10);

  if (!transactions || transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
          <CardDescription>Suas últimas movimentações</CardDescription>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>Nenhuma transação ainda</EmptyTitle>
              <EmptyDescription>
                Comece adicionando sua primeira receita ou despesa para começar
                a controlar suas finanças.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    );
  }

  return <TransactionListClient transactions={transactions} />;
}
