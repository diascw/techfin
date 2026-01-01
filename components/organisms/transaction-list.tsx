import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemSeparator,
} from "@/components/ui/item";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { TransactionTypeIcon } from "@/components/atoms/transaction-type-icon";
import { CurrencyText } from "@/components/atoms/currency-text";
import { Category } from "../atoms/category";
import { Inbox } from "lucide-react";

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
                <Item
                  key={transaction.id}
                  variant="default"
                  className="hover:bg-accent/50 transition-colors"
                >
                  <ItemMedia variant="icon">
                    <TransactionTypeIcon type={transaction.type} />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>
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
                      className="text-base font-semibold"
                    />
                    {transaction.category && (
                      <Category category={transaction.category} />
                    )}
                  </ItemContent>
                </Item>
                {index < transactions.length - 1 && <ItemSeparator />}
              </>
            ))}
          </ItemGroup>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
