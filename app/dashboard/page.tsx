import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/organisms/dashboard-header";
import { StatsOverview } from "@/components/organisms/stats-overview";
import { TransactionList } from "@/components/organisms/transaction-list";
import { TransactionButton } from "@/components/molecules/transaction-button";
import { ExpensesChart } from "@/components/organisms/expenses-chart";
import { InsightsSection } from "@/components/organisms/insights-section";
import type { MonthlyStats, CategoryStats } from "@/lib/types/types.ts";

async function getMonthlyStats(userId: string): Promise<MonthlyStats> {
  const supabase = await createClient();
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
    .toISOString()
    .split("T")[0];
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    .toISOString()
    .split("T")[0];

  const { data: transactions } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .gte("date", firstDay)
    .lte("date", lastDay);

  const income =
    transactions
      ?.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;
  const expense =
    transactions
      ?.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;
  const incomeCount =
    transactions?.filter((t) => t.type === "income").length || 0;
  const expenseCount =
    transactions?.filter((t) => t.type === "expense").length || 0;

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
    transactionCount: transactions?.length || 0,
    incomeCount,
    expenseCount,
  };
}

async function getExpensesByCategory(userId: string): Promise<CategoryStats[]> {
  const supabase = await createClient();
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
    .toISOString()
    .split("T")[0];
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    .toISOString()
    .split("T")[0];

  const { data: transactions } = await supabase
    .from("transactions")
    .select("*, category:categories(*)")
    .eq("user_id", userId)
    .eq("type", "expense")
    .gte("date", firstDay)
    .lte("date", lastDay);

  if (!transactions || transactions.length === 0) return [];

  const categoryMap = new Map<string, CategoryStats>();
  const totalExpense = transactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  transactions.forEach((transaction) => {
    if (!transaction.category) return;

    const existing = categoryMap.get(transaction.category.id);
    const amount = Number(transaction.amount);

    if (existing) {
      existing.total += amount;
      existing.transactionCount += 1;
    } else {
      categoryMap.set(transaction.category.id, {
        category: transaction.category,
        total: amount,
        percentage: 0,
        transactionCount: 1,
      });
    }
  });

  const result = Array.from(categoryMap.values());
  result.forEach((item) => {
    item.percentage = (item.total / totalExpense) * 100;
  });

  return result.sort((a, b) => b.total - a.total);
}

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const stats = await getMonthlyStats(user.id);
  const expensesByCategory = await getExpensesByCategory(user.id);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={profile?.full_name} />
      <main className="container px-4 py-8 max-w-7xl">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground mt-2">Visão geral</p>
            </div>
            <TransactionButton userId={user.id} />
          </div>

          <StatsOverview stats={stats} />

          <div className="grid gap-6 lg:grid-cols-2">
            <TransactionList userId={user.id} />
            <ExpensesChart data={expensesByCategory} />
          </div>

          <InsightsSection
            stats={stats}
            expensesByCategory={expensesByCategory}
          />
        </div>
      </main>
    </div>
  );
}
